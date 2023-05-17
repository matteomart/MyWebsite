let isOn = true;
let isJumping = false;
let jumpHeight = 0;
let jumpSpeed = 1.8;
let obstacleX = 40;
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
}

function draw() {
  background(bgImage);

  if (!gameover) {
    // Move and draw the obstacle
    obstacleX -= obstacleSpeed;

    if (obstacleX < -50) {
      obstacleX = width;
      score++;
    }
    drawObstacle(obstacleX, height - 50, 50, color(0));

    // Check for collision
    if (isColliding(obstacleX, height - 50)) {
      gameover = true;
      // Play the game over sound
      gameOverSound.play();
    }

    // Draw the robot
    drawRobot(width / 2, height / 2 + jumpHeight, 150, color(255, 204, 0), color(0), color(255, 0, 0), color(0, 255, 0));

    // Update the jump
    if (isJumping) {
      jumpHeight -= jumpSpeed;
      if (jumpHeight <= -100) { // Adjust the jump height as needed
        isJumping = false;
        jumpHeight = 0; // Reset jump height
      }
    }
  } else {
    // Game over screen
    textAlign(CENTER);
    textSize(30);
    fill(255, 0, 0);
    text("Game Over", width / 2, height / 2);
    textSize(20);
    fill(255, 255, 255);
    text("Score: " + score, width / 2, height / 2 + 40);
  }
}

function mouseClicked() {
  if (!isJumping && !gameover) {
    isJumping = true;
    jumpHeight = -50; // Adjust the jump height as needed
  } else if (gameover) {
    resetGame();
  }
}

function resetGame() {
  isOn = false;
  isJumping = false;
  jumpHeight = 0;
  obstacleX = 750;
  score = 0;
  gameover = false;
}

function isColliding(obstacleX, obstacleY) {
  const d = dist(width / 2, height / 2 + jumpHeight, obstacleX, obstacleY);
  return d < 160; // Adjust the collision distance as needed
}