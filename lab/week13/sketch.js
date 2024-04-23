var skyHeight;
var grassHeight;
var roofHeight;
var houseHeight;

// var houseHeight;

function setup() {
   
    createCanvas(windowWidth,windowHeight);

    skyHeight = windowHeight / 3;
    grassHeight = 2 * (windowHeight / 3);
    roofHeight = windowHeight / 4;
    houseHeight = windowHeight / 3;

  
  }
  



function draw() {
    // sky
    noStroke();
    fill(110,110,230);
    rect(0,0,windowWidth,(windowHeight / 3));

    // Grass
    fill(0,255,0);
    rect(0,skyHeight,windowWidth,grassHeight);


    // roof
    fill(229, 178, 76);
    triangle (30, 75, 58, 20, 86, 75);


    // // House
    fill(232, 221, 199);
    rect(30,200,(windowWidth / 2) ,houseHeight);




  }

