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
        if (!isHorizontal(this.direction)) {
            if (this.newDirection == directions.right) {
                this.speedX = speed.speed;
                this.speedY = 0;
                this.direction = directions.right
            } else if (this.newDirection == directions.left) {
                this.speedX = speed.speed * -1;
                this.speedY = 0;
                this.direction = directions.left
            }
        }
        else {
            if (this.newDirection == directions.up) {
                this.speedY = speed.speed * -1;
                this.speedX = 0;
                this.direction = directions.up
            } else if (this.newDirection == directions.down) {
                this.speedY = speed.speed;
                this.speedX = 0;
                this.direction = directions.down
            }
        }

        this.head.xpos += this.speedX;
        this.head.ypos += this.speedY;
        this.newDirection == undefined
    }
    checkWall = function (mode) {
        if (mode == gameMode.troughthewall) {
            if (this.head.xpos >= ctx.canvas.width) {
                this.head.xpos = 0;
            } else if (this.head.xpos < 0) {
                this.head.xpos = ctx.canvas.width - 15;
            } else if (this.head.ypos >= ctx.canvas.height) {
                this.head.ypos = 0;
            } else if (this.head.ypos < 0) {
                this.head.ypos = ctx.canvas.height - 15;
            } else {
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
var score;
var fps;

var directions = {
    up: 0,
    right: 1,
    down: 2,
    left: 3
};

var mode = gameMode.troughthewall;
var gameOVer;
var speed;
var head;
var body;
var food_position;
var snake;
var ctx;


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
    setupGameVariables()
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
    } else {    
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
                dir = directions.up;
                break;
            case "ArrowRight":
                dir = directions.right;
                break;
            case "ArrowDown":
                dir = directions.down;
                break;
            case "ArrowLeft":
                dir = directions.left;
                break;
        }

        snake.newDirection = dir
    });

    var el = document.getElementById('touch-control')
    swipedetect(el, function(swipedir) {
        var dir = swipedir;
        snake.newDirection = directions[dir]
    })
}


function changeDirection(direction) {
    var dir = direction;
    snake.newDirection = directions[dir]
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

function setupGameVariables(){
    gameOVer = false;
    speed = { xspeed: 15, yspeed: 0, speed: 15 };
    head = new HeadPosition(60, 300)
    body = [];
    food_position = ({ xpos: 75, ypos: 315 })
    snake = new Snake(head, body, speed, directions.right)
    fps = 5;
    level = 1;
    score = 0;

}

function makeFood(snake) {
    var hasEaten = false;

    if ((snake.head.xpos == food_position.xpos) && (snake.head.ypos == food_position.ypos)) {
        hasEaten = true;
        score++
    }

    if (hasEaten == false) {
        ctx.fillStyle = "red"
        ctx.fillRect(food_position.xpos, food_position.ypos, 15, 15)
        return hasEaten
    } else {
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

            decideSpeed();

            return hasEaten;
        }
    }
}

function reset() {
    mode = gameMode.troughthewall;
    document.getElementById('through-the-wall').classList.add('active-gamemode');
    document.getElementById('walls-are-solid').classList.remove('active-gamemode');

    document.getElementById('info-section').classList.remove('invisible');
    document.getElementById('game-over-section').classList.add('invisible');
    var el = document.getElementsByClassName('background-image');
    el[0].classList.remove('grayscale');
}

function decideSpeed() {
    if (score % 3 === 0 && score !== 0) {
        fps += 2;
        level++
    }
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

function toggleControl(control) {
    if (control === "touchpad") {
        document.getElementById("btn-touchpad").classList.add('active')
        document.getElementById('btn-arrows').classList.remove('active')

        document.getElementById('touch-control').style.display = "block";
        document.getElementById('arrows-control').style.display = "none";
    }
    else {
        document.getElementById("btn-touchpad").classList.remove('active')
        document.getElementById('btn-arrows').classList.add('active')

        document.getElementById('arrows-control').style.display = "block";
        document.getElementById('touch-control').style.display = "none";
    }
}

//Helper functions

function chooseLower(a, b) {
    if (a > b) {
        return b
    }
    return a
}

function isHorizontal(x) {
    if (x == directions.up || x == directions.down) {
        return false
    } else {
        return true;
    };
}