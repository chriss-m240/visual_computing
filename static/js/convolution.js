let kernel = null;

let blur_ = [[0.0625, 0.125, 0.0625],
             [0.125, 0.25, 0.125],
             [0.0625, 0.125, 0.0625]];

let emboss = [[-2, -1, 0],
              [-1, 1, 1],
              [0, 1, 2]];

let identity = [[0, 0, 0],
                [0, 1, 0],
                [0, 0, 0]];

let sharpen = [[0, -1, 0], 
               [-1, 5, -1],
               [0, -1, 0]];

let outline = [[-1, -1, -1],
               [-1, 8, -1],
               [-1, -1, -1]];

let bottomSobel = [[-1, -2, -1],
            [0, 0, 0],
            [1, 2, 1]];

let leftSobel = [[1, 0, -1],
           [2, 0, -2],
           [1, 0, -1]];

let topSobel = [[1, 2, 1],
           [0, 0, 0],
           [-1, -2, -1]];  

let rightSobel = [[-1, 0, 1], 
           [-2, 0, 2],
           [-1, 0, 1]];

let kernels = {
  "none" : null,
  "blur" : blur_,
  "emboss" : emboss,
  "identity" : identity,
  "sharpen" : sharpen,
  "outline" : outline,
  "bottom sobel" : bottomSobel,
  "left sobel" : leftSobel,
  "top sobel" : topSobel,
  "right sobel" : rightSobel,
}

var selectedKernel = "none"
var flag = false

function preload() {
  img = loadImage("/images/rover.png"); 
}

function setup() {
  var canvas = createCanvas(img.width, img.height)
  canvas.parent("canvas");
  background(60);

  sel = createSelect(select("#kernels"));
  sel.option('none');
  sel.option('bottom sobel');
  sel.option('emboss');
  sel.option('identity');
  sel.option('left sobel');
  sel.option('outline');
  sel.option('right sobel');
  sel.option('sharpen');
  sel.option('top sobel');

  sel.selected("none");

  sel.changed(handleSelectChange);

  function handleSelectChange() {
    selectedKernel = sel.value();
    kernel = kernels[selectedKernel]
    flag = true
  }
}

function draw() {
  if(selectedKernel == undefined || selectedKernel == "none") {
      image(img, 0, 0);
  } else if (flag) {
    edgeImg = createImage(img.width, img.height);
    edgeImg.loadPixels();
    
    for (let x = 1; x < img.width; x++) {
        for (let y = 1; y < img.height; y++) {
        let sum = 0; 
  
        for (kx = -1; kx <= 1; kx++) {
            for (ky = -1; ky <= 1; ky++) {
              let xpos = x + kx;
              let ypos = y + ky;
              
              let val = red(img.get(xpos, ypos));
    
              sum += kernel[kx+1][ky+1] * val;
            }
        }
  
        edgeImg.set(x, y, color(sum));
        }
    }
    edgeImg.updatePixels();
    image(edgeImg, 0, 0);
    flag = false
  }
}
