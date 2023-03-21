function setup() {
    createCanvas(600, 600);
    background('#8FBDD3');
    rectMode(CENTER);
  }
  
  function draw() {
    stroke(0); //telescope
    fill(125);
    strokeWeight(3);
    rect(310, 320, 30, 60, 5, 5, 0, 0);
    rect(310, 370, 40, 60, 5, 5, 0, 0);
    rect(310, 400, 50, 50, 5, 5, 0, 0);
    rect(310, 420, 80, 20, 7, 7, 0, 0);
  
    fill(0); // oog
    stroke(0);
    rect(365, 255, 20, 30, 5, 5, 5, 5);
  
    stroke(0); //kop
    fill('#3A58FA');
    arc(365, 275, 220, 90, radians(180), radians(270), PIE);
  
    stroke('#FFA40F'); // gele basis
    strokeWeight(3);
    fill('#FABF1C');
    rectMode(CENTER);
    rect(310, 290, 120, 30, 10, 10, 10, 10);
    rect(310, 450, 150, 50, 10, 10, 0, 0);
  
    stroke(0); //armen
    fill('#3A58FA');
    quad(310, 295, 315, 290, 350, 330, 345, 335);
    rect(380, 335, 60, 7);
  
    noStroke(); //gun
    fill('#D62D2D');
    triangle(407, 325, 407, 345, 435, 335);
    rect(425, 335, 20, 10);
  
    stroke(0);
    strokeCap(ROUND);
    line(435, 330, 435, 339);
    line(420, 330, 420, 339);
    line(407, 325, 407, 344);
  
    stroke(0); //schouder en elleboog
    fill(125);
    ellipse(350, 335, 20, 20);
    ellipse(310, 290, 20, 20);
  
    noStroke(); //rupsbanden fill
    fill(80);
    rectMode(CENTER);
    rect(310, 500, 120, 60);
    arc(250, 500, 60, 60, radians(90), radians(270));
    arc(370, 500, 60, 60, radians(-90), radians(90));
  
    noFill(); //rupsbanden stroke
    stroke(0);
    strokeWeight(4);
    line(250, 530, 370, 530);
    line(250, 470, 370, 470);
    arc(250, 500, 60, 60, radians(90), radians(270), OPEN);
    arc(370, 500, 60, 60, radians(-90), radians(90), OPEN);
  
    fill(255); //3 wielen
    strokeWeight(2);
    ellipse(250, 500, 50, 50);
   
  