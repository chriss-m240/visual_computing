let hard_convolution = function(p5) {
  let convolutionShader;
  let img;

  let WEBGL_kernels = {
    "emboss" : 1.0,
    "sharpen" : 2.0,
    "blur" : 3.0,
    "bottom sobel" : 4.0,
    "left sobel" : 5.0,
    "top sobel" : 6.0,
    "right sobel" : 7.0,
    "outline" : 8.0,
    "identity" : 9.0,
    "none" : 9.0,
  }

  let selectedWEBGLKernel = "none"
  let WEBGLflag = false

  p5.preload = function(){
    convolutionShader = p5.loadShader('/js/convolution.vert', '/js/convolution.frag');
  }

  p5.setup  = function() {
    img = p5.loadImage("/images/rover.png"); 

    p5.createCanvas(319, 359, p5.WEBGL);
    p5.noStroke();

    selGL = p5.createSelect(p5.select("#webgl_kernels"));
    selGL.option('none');
    selGL.option('bottom sobel');
    selGL.option('emboss');
    selGL.option('blur');
    selGL.option('identity');
    selGL.option('left sobel');
    selGL.option('outline');
    selGL.option('right sobel');
    selGL.option('sharpen');
    selGL.option('top sobel');

    selGL.selected("none");

    selGL.changed(handleSelectChangeI);

    function handleSelectChangeI() {
      selectedWEBGLKernel = selGL.value();
      WEBGLflag = true

    }
  }

  p5.draw = function () {  
    if  (selectedWEBGLKernel == undefined || selectedWEBGLKernel == "none") {
      p5.shader(convolutionShader);

      convolutionShader.setUniform('tex0', img);
      convolutionShader.setUniform('kernelType', WEBGL_kernels["none"]);
      
      convolutionShader.setUniform('stepSize', [1.0/p5.width, 1.0/p5.height]);
  
      convolutionShader.setUniform('dist', 1.0);
  
      p5.rect(0,0, p5.width, p5.height);

    } else if (WEBGLflag) {
      let tt0 = performance.now()

      p5.shader(convolutionShader);

      convolutionShader.setUniform('tex0', img);
      convolutionShader.setUniform('kernelType', WEBGL_kernels[selectedWEBGLKernel]);
      
      convolutionShader.setUniform('stepSize', [1.0/p5.width, 1.0/p5.height]);
  
      convolutionShader.setUniform('dist', 1.0);
  
      p5.rect(0,0, p5.width, p5.height);
      WEBGLflag = false

      let tt1 = performance.now()

      var paragraph = document.getElementById("WEBGL");
      var text = document.createTextNode((tt1 - tt0).toFixed(5) + " milliseconds.");
      paragraph.removeChild(paragraph.childNodes[0]);
      paragraph.appendChild(text);
    }
  }
}

new p5(hard_convolution, "canvasI")