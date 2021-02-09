class HeadPosition {
    constructor(xpos, ypos) {
        this.xpos = xpos,
            this.ypos = ypos
    };
}

//The snake Class

class Snake {
    constructor(head, body, speed, direction) {
        this.width = 15;
        this.height = 15;
        this.speedX = speed.xspeed;
        this.speedY = speed.yspeed;
        this.head = head
        this.body = body;
        this.direction = direction;
        this.newDirection = undefined;
    }
    update() {
        var new_body = JSON.parse(JSON.stringify(this.head))
        this.body.push(new_body);
        snake.newPos()
        snake.checkWall(mode)
        var ate = makeFood(snake);
        if (!ate) {
            this.body.splice(0, 1);
        }
    }
    draw() {
        ctx.fillStyle = "blue"
        ctx.fillRect(this.head.xpos, this.head.ypos, this.width - 1, this.width - 1)
        for (let index = 0; index < this.body.length; index++) {
            var positions = this.body[index]
            ctx.fillStyle = "blue"
            ctx.fillRect(positions.xpos, positions.ypos, this.width - 1, this.height - 1)
        }
    }
    newPos() {
        if (this.direction == this.newDirection || this.newDirection == undefined) { this.speedX = this.speedX; this.speedY = this.speedY }
        else if (this.direction == directions.up || this.direction == directions.down) {
            if (this.newDirection == directions.up || this.newDirection == directions.down) { this.speedX = this.speedX; this.speedY = this.speedY }
            else if (this.newDirection == directions.right) { this.speedX = 15; this.speedY = 0; this.direction = directions.right }
            else { this.speedX = -15; this.speedY = 0; this.direction = directions.left }
        }
        else if (this.direction == directions.right || this.direction == directions.left) {
            if (this.newDirection == directions.right || this.newDirection == directions.left) { this.speedX = this.speedX; this.speedY = this.speedY }
            else if (this.newDirection == directions.up) { this.speedY = -15; this.speedX = 0; this.direction = directions.up }
            else { this.speedY = 15; this.speedX = 0; this.direction = directions.down }
        }
        this.head.xpos += this.speedX;
        this.head.ypos += this.speedY;
        this.newDirection == undefined
    }
    checkWall = function (mode) {
        if (mode == gameMode.troughthewall) {
            if (this.head.xpos >= ctx.canvas.width) {
                this.head.xpos = 0;
            }
            else if (this.head.xpos < 0) {
                this.head.xpos = ctx.canvas.width - 15;
            }
            else if (this.head.ypos >= ctx.canvas.height) {
                this.head.ypos = 0;
            }
            else if (this.head.ypos < 0) {
                this.head.ypos = ctx.canvas.height - 15;
            }
            else {
                return;
            }
        }
        else {
            if (this.head.xpos == ctx.canvas.width || this.head.xpos == 0 || this.head.ypos == ctx.canvas.height || this.head.ypos == 0) {
                gameOVer = true;
            }
        }
    }
    crash = function () {
        for (let index = 0; index < this.body.length; index++) {
            var positions = this.body[index]
            if (this.head.xpos == positions.xpos && this.head.ypos == positions.ypos) {
                gameOVer = true;
            }
        }

    }
}


var gameMode = {
    troughthewall: 1,
    wallsaresolid: 2
};

var level = 1;
var score = 0;
var fps = 5;

var directions = {
    up: 0,
    right: 1,
    down: 2,
    left: 3
};

var gameOVer = false;
var speed = { xspeed: 15, yspeed: 0 };
var head = new HeadPosition(60, 300)
var body = [];
var food_position = ({ xpos: 75, ypos: 315 })
var snake = new Snake(head, body, speed, directions.right)
var ctx = null;
var mode = gameMode.troughthewall;

window.onload = function () {

    //Element listeners for GameMode buttons
    var troughthewall_el = document.getElementById('through-the-wall')
    var wallsaresolid_el = document.getElementById('walls-are-solid')

    troughthewall_el.addEventListener("click", function () {
        mode = gameMode.troughthewall;
        troughthewall_el.classList.add('active-gamemode');
        wallsaresolid_el.classList.remove('active-gamemode');
    })

    wallsaresolid_el.addEventListener("click", function () {
        mode = gameMode.wallsaresolid;
        wallsaresolid_el.classList.add('active-gamemode');
        troughthewall_el.classList.remove('active-gamemode');
    })

    if (document.getElementById('score') && document.getElementById('level')) {
        var score_el = document.createElement('p')
        var level_el = document.createElement('p')
        
        score_el.style.fontSize = "1.5rem";
        level_el.style.fontSize = "1.5rem";

        score_el.innerHTML = `Your score is: ${score}`
        level_el.innerHTML = `Your level is: ${level}`

        document.getElementById('score').appendChild(score_el);
        document.getElementById('level').appendChild(level_el);
    }
}

function setUpGame() {
    document.getElementById('info-section').classList.add('invisible');
    document.getElementById('game-section').classList.remove('invisible');
    setUpCanvas();
    startGame();
}

function startGame() {
    if (ctx == null) { return; }
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    snake.update(mode);
    snake.crash();
    snake.draw();

    if (document.getElementById('score') && document.getElementById('level')) {
        document.getElementById('score').firstChild.innerHTML = `Your score is: ${score}`;
        document.getElementById('level').firstChild.innerHTML = `Your level is: ${level}`;
    }

    if (!gameOVer) {
        setTimeout(function () { //throttle requestAnimationFrame to 20fps
            requestAnimationFrame(startGame);
        }, 1000 / fps)
    }

    else {
        document.getElementById('game-over-section').classList.remove('invisible');
        document.getElementById('game-section').classList.add('invisible');
        var el = document.getElementsByClassName('background-image');
        el[0].classList.add('grayscale');
        document.getElementById('final-level').innerHTML = level;
        document.getElementById('final-score').innerHTML = score;
    }
}

function setUpCanvas() {
    // Setting up the canvas
    ctx = document.getElementById("game").getContext("2d");
    //ctx.canvas.style.background = "grey";

    resizeCanvasToDisplaySize(ctx.canvas);

    window.addEventListener("keydown", function (e) {

        switch (e.key) {
            case "ArrowUp":
                snake.newDirection = directions.up;
                break;
            case "ArrowRight":
                snake.newDirection = directions.right;
                break;
            case "ArrowDown":
                snake.newDirection = directions.down;
                break;
            case "ArrowLeft":
                snake.newDirection = directions.left;
                break;
        }
    });

    var el = document.getElementById('touch-control')
    swipedetect(el, function (swipedir) {
        switch (swipedir) {
            case "up":
                snake.newDirection = directions.up;
                break;
            case "right":
                snake.newDirection = directions.right;
                break;
            case "down":
                snake.newDirection = directions.down;
                break;
            case "left":
                snake.newDirection = directions.left;
                break;
        }
    })
}

function changeDirection(direction) {
    switch (direction) {
        case "up":
            snake.newDirection = directions.up;
            break;
        case "right":
            snake.newDirection = directions.right;
            break;
        case "down":
            snake.newDirection = directions.down;
            break;
        case "left":
            snake.newDirection = directions.left;
            break;
    }
}

function resizeCanvasToDisplaySize(canvas) {
    // look up the size the canvas is being displayed and multiply by percentage of canvas size

    const width = (window.innerWidth * 0.9)
    const height = (window.innerHeight * 0.6)
    const max_width = 510
    const max_height = 510;

    // make it dividable by 15 

    var ratioW = Math.floor(width / 15)
    var ratioH = Math.floor(height / 15)

    // determine the canvas size

    canvas.width = chooseLower((15 * ratioW), max_width);
    canvas.height = chooseLower((15 * ratioH), max_height);
}

function makeFood(snake) {

    if (((snake.head.xpos == food_position.xpos) && (snake.head.ypos == food_position.ypos))) { var hasEaten = true; score++ }
    else { var hasEaten = false }

    if (hasEaten == false) {
        ctx.fillStyle = "red"
        ctx.fillRect(food_position.xpos, food_position.ypos, 15, 15)
        return hasEaten
    }
    else {
        var isSame = true

        food_position.xpos = 1;
        food_position.ypos = 1;

        while (isSame) {
            while (food_position.xpos % 15 != 0) {
                while (food_position.ypos % 15 != 0) {
                    food_position.ypos = Math.floor(Math.random() * ctx.canvas.height)
                }
                food_position.xpos = Math.floor(Math.random() * ctx.canvas.width)
            }

            if (snake.body.includes(food_position) || ((snake.head.xpos == food_position.xpos) && (snake.head.ypos == food_position.ypos))) { isSame = true; }

            isSame = false;

            ctx.fillStyle = "red"
            ctx.fillRect(food_position.xpos, food_position.ypos, 15, 15)

            decideSpeed(hasEaten);

            return hasEaten;
        }
    }
}

function reset() {
    gameOVer = false;
    mode = gameMode.troughthewall;
    fps = 5;
    level = 1;
    score = 0;
    document.getElementById('through-the-wall').classList.add('active-gamemode');
    document.getElementById('walls-are-solid').classList.remove('active-gamemode');

    snake = new Snake(new HeadPosition(60, 300), [], { xspeed: 15, yspeed: 0 }, directions.right)

    document.getElementById('info-section').classList.remove('invisible');
    document.getElementById('game-over-section').classList.add('invisible');
    var el = document.getElementsByClassName('background-image');
    el[0].classList.remove('grayscale');
}

function decideSpeed(hasEaten) {
    if (score % 3 == 0 && score != 0 && hasEaten) {
        fps += 2;
        level++
    }
}

//Helper functions

function chooseLower(a, b) {
    if (a > b) {
        return b
    }
    return a
}

/* This code comes from http://www.javascriptkit.com/javatutors/touchevents2.shtml with some small changes to fit my project */

function swipedetect(el, callback) {

    var touchsurface = el,
        swipedir,
        startX,
        startY,
        distX,
        distY,
        threshold = 50, //required min distance traveled to be considered swipe
        restraint = 100, // maximum distance allowed at the same time in perpendicular direction

        handleswipe = callback || function (swipedir) { }

    touchsurface.addEventListener('touchstart', function (e) {
        var touchobj = e.changedTouches[0]
        swipedir = 'none'
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        e.preventDefault()
    }, false)

    touchsurface.addEventListener('touchmove', function (e) {
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)

    touchsurface.addEventListener('touchend', function (e) {
        var touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface

        if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) { // horizontal swipe met
            swipedir = (distX < 0) ? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
        }
        else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) { // vertical swipe met
            swipedir = (distY < 0) ? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
        }
        handleswipe(swipedir)
        e.preventDefault()
    }, false)
}

function toggleControl(control){
    if(control === "touchpad"){
        document.getElementById("btn-touchpad").classList.add('active')
        document.getElementById('btn-arrows').classList.remove('active')

        document.getElementById('touch-control').style.display = "block";
        document.getElementById('arrows-control').style.display = "none";
    }
    else{
        document.getElementById("btn-touchpad").classList.remove('active')
        document.getElementById('btn-arrows').classList.add('active')

        document.getElementById('arrows-control').style.display = "block";
        document.getElementById('touch-control').style.display = "none";


    }
}

