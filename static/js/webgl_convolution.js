let convolutionShader;
let img;

let kernel = {
  "emboss" : 1.0,
  "sharpen" : 2.0,
  "blur" : 3.0,
  "bottomSobel" : 4.0,
  "leftSobel" : 5.0,
  "topSobel" : 6.0,
  "rightSobel" : 7.0,
  "outline" : 8.0,
}

function preload(){
  convolutionShader = loadShader('convolution.vert', 'convolution.frag');
}

function setup() {
  createCanvas(350, 400, WEBGL);
  noStroke();

  img = loadImage("rover.png"); 
}

function draw() {  
  shader(convolutionShader);

  convolutionShader.setUniform('tex0', img);
  convolutionShader.setUniform('kernelType', kernel.sharpen);
  
  convolutionShader.setUniform('stepSize', [1.0/width, 1.0/height]);

  convolutionShader.setUniform('dist', 1.0);

  rect(0,0, width, height);
}