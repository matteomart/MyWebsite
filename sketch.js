let isOn = true;
let isJumping = false;
let jumpHeight = 0;
let jumpSpeed = 1.8;
let obstacles = [];
let obstacleSpeed = 5;
let score = 0;
let gameover = false;
let bgImage;
let gameOverSound;

function preload() {
  bgImage = loadImage('data/achtergrond.jpg');
  gameOverSound = new Audio('data/dead.wav');
}

function setup() {
  createCanvas(400, 400);
  spawnObstacles();
}

function draw() {
  background(bgImage);

  if (!gameover) {
    for (let i = obstacles.length - 1; i >= 0; i--) {
      let obstacle = obstacles[i];
      obstacle.x -= obstacleSpeed;

      drawObstacle(obstacle.x, obstacle.y, obstacle.size, obstacle.color);

      if (obstacle.x < -50) {
        obstacles.splice(i, 1);
        let newObstacle = {
          x: obstacles[obstacles.length - 1].x + random(300, 500),
          y: height - 50,
          size: 50,
          color: color(0)
        };
        obstacles.push(newObstacle);
        score++;
      }

      if (isColliding(obstacle.x, obstacle.y)) {
        gameover = true;
        gameOverSound.play();
        updateHighScore(score);
      }
    }

    drawRobot(width / 2, height / 2 + jumpHeight, 150, color(255, 204, 0), color(0), color(255, 0, 0), color(0, 255, 0));

    if (isJumping) {
      jumpHeight -= jumpSpeed;
      if (jumpHeight <= -100) {
        isJumping = false;
        jumpHeight = 0;
      }
    }
  } else {
    textAlign(CENTER);
    textSize(30);
    fill(255, 0, 0);
    text("Game Over", width / 2, height / 2 - 40);
    textSize(20);
    fill(255, 255, 255);
    text("High Score: " + getHighScore(), width / 2, height / 2);
    text("Score: " + score, width / 2, height / 2 + 30);

    drawOnOffButton(width / 2, height / 2 + 80, 80, 30);
    drawRestartButton(width / 2, height / 2 + 120, 80, 30);
  }
}

function mouseClicked() {
  if (!isJumping && !gameover) {
    isJumping = true;
    jumpHeight = -50;
  } else if (gameover) {
    if (
      mouseX > width / 2 - 40 &&
      mouseX < width / 2 + 40 &&
      mouseY > height / 2 + 120 - 15 &&
      mouseY < height / 2 + 120 + 15
    ) {
      resetGame();
    } else if (
      mouseX > width / 2 - 40 &&
      mouseX < width / 2 + 40 &&
      mouseY > height / 2 + 80 - 15 &&
      mouseY < height / 2 + 80 + 15
    ) {
      isOn = !isOn;
    }
  }
}

function resetGame() {
  isJumping = false;
  jumpHeight = 0;
  score = 0;
  gameover = false;
  obstacles = [];
  spawnObstacles();
}

function updateHighScore(score) {
  const highScore = getHighScore();
  if (score > highScore) {
    setHighScore(score);
  }
}

function setHighScore(value) {
  localStorage.setItem('highScore', value.toString());
}

function getHighScore() {
  const highScore = localStorage.getItem('highScore');
  return highScore ? parseInt(highScore) : 0;
}

function spawnObstacles() {
  for (let i = 0; i < 3; i++) {
    let obstacle = {
      x: width + i * 400,
      y: height - 50,
      size: 50,
      color: color(0)
    };
    obstacles.push(obstacle);
  }
}

function isColliding(obstacleX, obstacleY) {
  const d = dist(width / 2, height / 2 + jumpHeight, obstacleX, obstacleY);
  return d < 160;
}

function drawOnOffButton(x, y, width, height) {
  noStroke();
  fill(isOn ? color(0, 255, 0) : color(255, 0, 0));
  rectMode(CENTER);
  rect(x, y, width, height, 10);
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text(isOn ? "ON" : "OFF", x, y);
}

function drawRestartButton(x, y, width, height) {
  noStroke();
  fill(0, 0, 0);
  rectMode(CENTER);
  rect(x, y, width, height, 10);
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Restart", x, y);
}
