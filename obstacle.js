function drawMagnet(x, y, size) {
  
  fill(255, 0, 0); 
  rect(x - size / 4, y, size / 2, size / 2 + 5, 0);
  fill(255, 255, 255); 
  rect(x + size / 4, y, size / 2, size / 2 + 5, 0);


  fill(0); 
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
  return d < 160; 
}
