const snakeboard = document.getElementsById("gameCanvas");
const snakeboard_ctx = gameCanvas.getContext("2d");
//Creates Snake in centre of game board
let snake = [ {x: 200, y: 200},
              {x: 190, y: 200},
              {x: 180, y: 200},
              {x: 170, y: 200},
              {x: 160, y: 200},];

//This function displays snake on canvas
function drawSnakePart(snakePart) {
    snakeboard_ctx.fillStyle = "lightblue";
    snakeboard_ctx.strokeStyle = "darkblue";
    snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function drawSnake() {
    snake.forEach(drawSnakePart);
}
//Snakes movement
function move_snake() {
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head);
    snake.pop();
}
//
function main() {
    setTimeout(function onTick() {
    clear_board();
    move_snake();
    drawSnake();
    // Call main again
    main();
  }, 100)
}
//Change snake direction
function change_direction(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    const keyPressed = event.keyCode;
    const goingUp = dr === -10;
    const goingDown = dy === 10;
    const goingRight = dx === 10;
    const goingLeft = dx === -10;

    if (keyPressed === LEFT_KEY && !goingRight) {
        dx = -10;
        dy = 0;
    }

    if (keyPressed === UP_KEY && !goingDown) {
        dx = 0;
        dy = -10;
    }

    if (keyPressed === RIGHT_KEY && !goingLeft) {
        dx = 10;
        dy = 0;
    }

    if (keyPressed === DOWN_KEY && !goingUp) {
        dx = 0;
        dy = 1
    }
}

