let convolutionShader;
let img;
let framecount;
let framerate = 0;


let kernel = {
  "emboss": 1.0,
  "sharpen": 2.0,
  "blur": 3.0,
  "bottomSobel": 4.0,
  "leftSobel": 5.0,
  "topSobel": 6.0,
  "rightSobel": 7.0,
  "outline": 8.0,
}

function preload() {
  convolutionShader = loadShader('/js/convolution.vert', '/js/convolution.frag');
}

function setup() {
  c = createCanvas(360, 360, WEBGL);
  c.parent("video")
  noStroke();

  img = createVideo(["/videos/tiger.mp4"]);
  img.play()
  img.position(c.position().x + 330, c.position().y)
  frameRate(120)
}

function draw() {
  if (img.time() < img.duration()) {
    shader(convolutionShader);

    convolutionShader.setUniform('tex0', img);
    convolutionShader.setUniform('kernelType', kernel.leftSobel);

    convolutionShader.setUniform('stepSize', [1.0 / width, 1.0 / height]);

    convolutionShader.setUniform('dist', 1.0);

    rect(0, 0, width, height);
    framecount = frameCount
    framerate += frameRate()
    // console.log(framerate/framecount)
  }
}