var canvasDiv = document.getElementById('myCanvas');
var width = canvasDiv.clientWidth;
let ik = 0;
let v = 1.0 / 9.0;
let kernel = [[ v, v, v ], [ v, v, v ], [ v, v, v ]]; 
let blurr = [[0.0625, 0.125, 0.0625], [0.125, 0.25, 0.125], [0.0625, 0.125, 0.0625]];
let b_s = [[-1, -2, -1], [0, 0, 0], [1, 2, 1]];
let emboss = [[-2, -1, 0], [-1, 1, 1], [0, 1, 2]];
let identity = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
let l_s = [[1, 0, -1], [2, 0, -2], [1, 0, -1]];
let outline = [[-1, -1, -1], [-1, 8, -1], [-1, -1, -1]];
let r_s = [[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]];
let sharpen = [[0, -1, 0], [-1, 5, -1], [0, -1, 0]];
let t_s = [[1, 2, 1], [0, 0, 0], [-1, -2, -1]];
var first = 0;
var pressed = 0;
var ik2 =0;



let kernel2=[blurr,b_s,emboss,identity,l_s,outline,r_s,sharpen,t_s];


function randomizeKernel() {
  ik = (ik+1)%9;
  console.log(ik);
}

function preload() {
  var loc = window.location.pathname;
  var dir = loc.substring(0, loc.lastIndexOf('/'));
  console.log(dir)
  img = loadImage("/images/rover.png"); 
  
}

function setup() {
  var MyCanvas = createCanvas(img.width, img.height)
  MyCanvas.parent("myCanvas");
  background(60);

  sel = createSelect();
  sel.position(img.width+250, img.height+480);
  sel.option('bottom sobel');
  sel.option('embosss');
  sel.option('identity');
  sel.option('emboss');
  sel.option('left sobel');
  sel.option('outline');
  sel.option('right sobel');
  sel.option('sharpen');
  sel.option('top sobel');

  sel.changed(cambiar);
  function cambiar() {
        let val = sel.value();
        if(val == 'bottom sobel'){
            ik=0;
        } else if(val == 'embosss'){
            ik=1;
        } else if(val == 'identity'){
            ik=2;
        } else if(val == 'emboss'){
            ik=3;
        } else if(val == 'left sobel'){
            ik=4;
        } else if(val == 'outline'){
            ik=5;
        } else if(val == 'right sobel'){
            ik=6;
        } else if(val == 'sharpen'){
            ik=7;
        } else if(val == 'top sobel'){
            ik=8;
        }
        console.log(ik);
    }
}

function draw() {
  //image(img, 0, 0);
  
  if(first==0){
    edgeImg = createImage(img.width, img.height);

    edgeImg.loadPixels();
    
    //button.mousePressed(convolution());
    
    for (let x = 1; x < img.width; x++) {
        for (let y = 1; y < img.height; y++) {
        let sum = 0; 

        for (kx = -1; kx <= 1; kx++) {
            for (ky = -1; ky <= 1; ky++) {
            let xpos = x + kx;
            let ypos = y + ky;
            
            let val = red(img.get(xpos, ypos));

            sum += kernel2[ik][kx+1][ky+1] * val;
            }
        }

        edgeImg.set(x, y, color(sum));
        }
    }
    edgeImg.updatePixels();
    
    image(edgeImg, 0, 0);
    first = 1;
    }
    if(ik2!=ik){
        edgeImg = createImage(img.width, img.height);

        edgeImg.loadPixels();
        
        //button.mousePressed(convolution());
        
        for (let x = 1; x < img.width; x++) {
            for (let y = 1; y < img.height; y++) {
            let sum = 0; 

            for (kx = -1; kx <= 1; kx++) {
                for (ky = -1; ky <= 1; ky++) {
                let xpos = x + kx;
                let ypos = y + ky;
                
                let val = red(img.get(xpos, ypos));

                sum += kernel2[ik][kx+1][ky+1] * val;
                }
            }

            edgeImg.set(x, y, color(sum));
            }
        }
        edgeImg.updatePixels();
        
        image(edgeImg, 0, 0);
        ik2=ik;
    }

}
/*
function convolution() {
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

          sum += kernel2[ik][kx+1][ky+1] * val;
        }
      }

      edgeImg.set(x, y, color(sum));
    }
  }
  edgeImg.updatePixels();
  
  image(edgeImg, 0, 0);
} */