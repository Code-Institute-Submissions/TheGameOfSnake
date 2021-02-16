class HeadPosition {
    constructor(xpos, ypos) {
        this.xpos = xpos,
            this.ypos = ypos
    };
}

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
        ctx.fillStyle = "black"
        ctx.fillRect(this.head.xpos, this.head.ypos, this.width - 1, this.width - 1)
        for (let index = 0; index < this.body.length; index++) {
            var positions = this.body[index]
            ctx.fillStyle = "rgba(0,0,0,0.5)" 
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
    checkWall(mode) {
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
    crash() {
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
var highScores = [];


if (localStorage.getItem("highScores") !== null) {
    highScores = JSON.parse(localStorage.getItem("highScores"))
}

var el_throughthewall = document.getElementById('through-the-wall');
var el_wallsaresolid = document.getElementById('walls-are-solid');

var el_score = document.getElementById('score');
var el_level = document.getElementById('level');

var el_infosection = document.getElementById('info-section');
var el_gamesection = document.getElementById('game-section');
var el_gameoversection = document.getElementById('game-over-section');

var el_touchcontrol = document.getElementById('touch-control');

var el_background = document.getElementsByClassName('background-image');
var el_table = document.getElementById("score-table");


window.onload = function () {

    //Element listeners for GameMode buttons

    el_throughthewall.addEventListener("click", function () {
        mode = gameMode.troughthewall;
        el_throughthewall.classList.add('active-gamemode');
        el_wallsaresolid.classList.remove('active-gamemode');
    })

    el_wallsaresolid.addEventListener("click", function () {
        mode = gameMode.wallsaresolid;
        el_wallsaresolid.classList.add('active-gamemode');
        el_throughthewall.classList.remove('active-gamemode');
    })

    if (el_score && el_level) {
        var score_content = document.createElement('p')
        var level_content = document.createElement('p')

        score_content.style.fontSize = "1.5rem";
        level_content.style.fontSize = "1.5rem";

        score_content.innerHTML = `Your score is: ${score}`
        level_content.innerHTML = `Your level is: ${level}`

        el_score.appendChild(score_content);
        el_level.appendChild(level_content);
    }
}

window.addEventListener('beforeunload', function () {
    if (highScores.length > 0) {
        localStorage.setItem('highScores', JSON.stringify(highScores));
    }
});

function setUpGame() {

    el_infosection.classList.add('invisible');
    el_gamesection.classList.remove('invisible');

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

    if (el_score && el_level) {
        el_score.firstChild.innerHTML = `Your score is: ${score}`;
        el_level.firstChild.innerHTML = `Your level is: ${level}`;
    }

    if (!gameOVer) {
        setTimeout(function () { //throttle requestAnimationFrame to 20fps
            requestAnimationFrame(startGame);
        }, 1000 / fps)
    } else {

        let today = new Date()

        highScores.push({ "time": today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(), "score": score, "level": level, "gamemode": mode })
        

        var tableRows = el_table.getElementsByTagName('tr');
        var rowCount = tableRows.length;

        for (var x=rowCount; x>0; x--) {
            el_table.deleteRow(tableRows[x]);
        }

        generateTable(el_table, highScores)
        generateTableHead(el_table)

        el_gameoversection.classList.remove('invisible');
        el_gamesection.classList.add('invisible');
        el_background[0].classList.add('grayscale');
        document.getElementById('final-level').innerHTML = level;
        document.getElementById('final-score').innerHTML = score;
    }
}

function setUpCanvas() {
    // Setting up the canvas
    ctx = document.getElementById("game").getContext("2d");

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
            case "default":
                break;
        }
        console.log(dir);
        if (dir !== undefined){snake.newDirection = dir}
    });

    swipedetect(el_touchcontrol, function (swipedir) {
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

function setupGameVariables() {
    gameOVer = false;
    speed = { xspeed: 15, yspeed: 0, speed: 15 };
    head = new HeadPosition(15 * (Math.floor((ctx.canvas.width/2) / 15)), 15 * (Math.floor((ctx.canvas.height/2) / 15)))
    body = [];
    food_position = ({ xpos: 75, ypos: 75 })
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
        ctx.fillStyle = "#660000"
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

            ctx.fillStyle = "#660000"
            ctx.fillRect(food_position.xpos, food_position.ypos, 15, 15)

            decideSpeed();

            return hasEaten;
        }
    }
}

function reset() {

    mode = gameMode.troughthewall;

    el_throughthewall.classList.add('active-gamemode');
    el_wallsaresolid.classList.remove('active-gamemode');
    setTimeout(function () {
        el_infosection.classList.remove('invisible');
        el_gameoversection.classList.add('invisible');
        el_background[0].classList.remove('grayscale');
    }, 1501);
}

function decideSpeed() {
    if (score % 3 === 0 && score !== 0) {
        fps += 1;
        level++
    }
}

// This code comes from http://www.javascriptkit.com/javatutors/touchevents2.shtml with some small changes to fit my project 
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
    let el_btntouchpad = document.getElementById("btn-touchpad");
    let el_btnarrows = document.getElementById('btn-arrows');


    let el_buttoncontrol = document.getElementById('arrows-control');

    if (control === "touchpad") {
        el_btntouchpad.classList.add('active')
        el_btnarrows.classList.remove('active')

        el_touchcontrol.style.display = "block";
        el_buttoncontrol.style.display = "none";
    }
    else {
        el_btntouchpad.classList.remove('active')
        el_btnarrows.classList.add('active')

        el_buttoncontrol.style.display = "block";
        el_touchcontrol.style.display = "none";
    }
}

function generateTableHead(el_table) {
    let data = Object.keys(highScores[0]);

    let thead = el_table.createTHead();
    let row = thead.insertRow();

    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key.toUpperCase());
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, highScores) {

    highScores.sort(function (a, b) { return a.score - b.score });
    highScores.reverse();

    let shown_results = (highScores.length < 3) ? highScores.length : 3;

    for (let i = 0; i < shown_results; i++) {
        let row = table.insertRow();
        for (key in highScores[i]) {
            let cell = row.insertCell();
            if(key !== "gamemode") {
                let text = document.createTextNode(highScores[i][key]);
                cell.appendChild(text);
            } else{
                let text = document.createTextNode((highScores[i][key] === 1) ? "Through the walls" : "Walls are solid")
                cell.appendChild(text);
            }
            
            
        }
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