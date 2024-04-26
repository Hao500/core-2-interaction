var skyHeight;
var grassHeight;
var roofHeight;
var houseHeight;

// var houseHeight;

function setup() {
   
    createCanvas(windowWidth,windowHeight);
  
  }
  



function draw() {
    // sky
    noStroke();
    fill(110,110,230);
    rect(0,0,windowWidth,(windowHeight / 3));




  // Ears -triangles
  fill(0); // Black
  triangle(300, 100, 320, 50, 340, 100); // Left ear
  triangle(460, 100, 480, 50, 500, 100); // Right ear

  // Face - Using ellipse
  fill(0); // Black color for the cat
  ellipse(400, 200, 150, 150); // Cat's face

  // Eyes - Using ellipses
  fill(255); // White color for eyes
  ellipse(370, 180, 40, 20); // Left eye
  ellipse(430, 180, 40, 20); // Right eye



  }

