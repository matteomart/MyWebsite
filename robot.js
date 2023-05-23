function drawRobot(x, y, size, bodyColor, detailColor, Rood, Groen) {
  // lichaam
  noStroke();
  fill(bodyColor);
  rectMode(CENTER);
  rect(x, y, size / 2, size, 10);
  fill(detailColor);
  ellipse(x, y - 20, size / 3, size / 3);
  fill(isOn ? Groen : Rood);
  ellipse(x, y - 20, size / 4, size / 4);
  textSize(18);
  textAlign(CENTER, CENTER);
  fill(255);
  text(isOn ? "ON" : "OFF", x, y - 20);
  // hoofd
  fill(detailColor);
  rect(x, y - size / 2 - size / 10, size / 3, size / 5, 5);
  rect(x, y - size / 2 - size / 5, size / 2, size / 5, 5);
  fill(bodyColor);
  rect(x, y - size / 2 - size / 4, size / 2, size / 10, 5);

  // ogen
  fill(detailColor);
  ellipse(x - size / 5 + 10, y - size / 5 - size / 10 - 67, size / 11, size / 11);
  ellipse(x + size / 5 - 10, y - size / 5 - size / 10 - 67, size / 11, size / 11);

  // mond
  stroke(bodyColor);
  strokeWeight(3);
  line(x - size / 5 + 10, y + size / 10 - 100, x + size / 5 - 10, y + size / 10 - 100);

  // armen
  strokeWeight(1);
  fill(bodyColor);
  rect(x - size / 3, y - 30, size / 3, size / 10, 5);
  rect(x + size / 3, y - 30, size / 3, size / 10, 5);

  // benen
  fill(detailColor);
  rect(x - size / 8, y + 100, size / 10, size / 2, 5);
  rect(x + size / 8, y + 100, size / 10, size / 2, 5);

  fill(detailColor);
  rect(x, y - 135, 5, 30);

  //antenne
  fill(bodyColor);
  ellipse(x, y - 150, size / 15, size / 15);

  noStroke(100);
  fill(detailColor);
  rectMode(CENTER);
  rect(x - size / 2, y - 30, 6, size / 10, 5);
  noStroke(100);
  fill(detailColor);
  rectMode(CENTER);
  rect(x + size / 2, y - 30, 6, size / 10, 5);

  if (isOn) {
    fill(255, 204, 0);
    triangle(x - 20, y - 160, x - 35, y - 160, x - 37, y - 140);
    triangle(x - 10, y - 145, x - 27, y - 145, x - 37, y - 120);
    triangle(x + 20, y - 160, x + 35, y - 160, x + 37, y - 140);
    triangle(x + 10, y - 145, x + 27, y - 145, x + 37, y - 120);
  }
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