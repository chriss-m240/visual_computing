let soft_convolution = function(p5) {
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

  let selectedKernel = "none"
  let flag = false

  p5.preload = function() {
    img = p5.loadImage("/images/rover.png"); 
  }

  p5.setup = function() {
    var canvas = p5.createCanvas(img.width, img.height)
    canvas.parent("canvas");
    p5.background(60);

    sel = p5.createSelect(p5.select("#kernels"));
    sel.option('none');
    sel.option('bottom sobel');
    sel.option('emboss');
    sel.option('blur');
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

  p5.draw = function() {
    // console.log(p5.frameCount)

    if(selectedKernel == undefined || selectedKernel == "none") {
        p5.image(img, 0, 0);
    } else if (flag) {
      let t0 = performance.now()

      edgeImg = p5.createImage(img.width, img.height);
      edgeImg.loadPixels();
      
      for (let x = 1; x < img.width; x++) {
          for (let y = 1; y < img.height; y++) {
          let sum = 0; 
    
          for (kx = -1; kx <= 1; kx++) {
              for (ky = -1; ky <= 1; ky++) {
                let xpos = x + kx;
                let ypos = y + ky;
                
                let val = p5.red(img.get(xpos, ypos));
      
                sum += kernel[kx+1][ky+1] * val;
              }
          }
    
          edgeImg.set(x, y, p5.color(sum));
          }
      }
      edgeImg.updatePixels();
      p5.image(edgeImg, 0, 0);
      flag = false

      let t1 = performance.now()

      var paragraph = document.getElementById("noWEBGL");
      var text = document.createTextNode((t1 - t0).toFixed(5) + " miliseconds.");
      paragraph.removeChild(paragraph.childNodes[0]);
      paragraph.appendChild(text);
    }


  }

  
}  

new p5(soft_convolution, "canvas")

