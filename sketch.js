// ----------------------- starts from 3/16/2022 ------------- // 
var backgroundImage


function preload() {
  backgroundImage = loadImage("assets/ground.png");
 
 
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(backgroundImage);
 
}
