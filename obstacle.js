function drawMagnet(x, y, size) {
  // Magnet poles
  fill(255, 0, 0); // Red color for magnet's north pole
  rect(x - size / 4, y, size / 2, size / 2 + 5, 0);
  fill(255, 255, 255); // White color for magnet's south pole
  rect(x + size / 4, y, size / 2, size / 2 + 5, 0);

  // Magnet symbol
  fill(0); // Black color for magnet symbol
  textSize(size / 8);
  textAlign(CENTER, CENTER);
  text("N", x - size / 4, y);
  text("S", x + size / 4, y);
}

function drawObstacle(x, y, size, obstacleColor) {
  drawMagnet(x, y, size);
}

function isColliding(obstacleX, obstacleY) {
  const d = dist(width / 2, height / 2 + jumpHeight, obstacleX, obstacleY);
  return d < 160; // Adjust the collision distance as needed
}
