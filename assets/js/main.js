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
        this.body.splice(0, 1);
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
}

var gameMode = {
    troughthewall: 1,
    wallsaresolid: 2
};

var directions = {
    up: 0,
    right: 1,
    down: 2,
    left: 3
};

var fps = 10;
var speed = { xspeed: 15, yspeed: 0 };
var head = new HeadPosition(60, 300)
var body = [];
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
}

function setUpGame() {
    document.getElementById('info-section').classList.add('invisible');
    document.getElementById('game-section').classList.remove('invisible');
    setUpCanvas();
    startGame();
}

function startGame(){
    if (ctx == null) { return; }
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    snake.update();
    snake.draw();

    setTimeout(function () { //throttle requestAnimationFrame to 10fps
        requestAnimationFrame(startGame);
    }, 1000 / fps)
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

//Helper functions

function chooseLower(a, b) {
    if (a > b) {
        return b
    }
    return a
}