let luma_SDTV = [0.2989, 0.5870, 0.1140];
let luma_Adobe = [0.212, 0.701, 0.087];
let luma_HDTV = [0.2126, 0.7152, 0.0722]
let luma_UHDTV = [0.2627, 0.6780, 0.0593];

function preload() {
  var loc = window.location.pathname;
  var dir = loc.substring(0, loc.lastIndexOf('/'));
  console.log(dir)
  img = loadImage("/images/fue.jpg"); 
}

function setup() {
  createCanvas(820,700);
  noLoop();
}


function draw() {
  
  //background(10);
  promedio = createImage(img.width, img.height);
  lu_SDTV = createImage(img.width, img.height);
  lu_Adobe = createImage(img.width, img.height);
  lu_HDTV = createImage(img.width, img.height);
  lu_UHDTV = createImage(img.width, img.height);

  promedio.loadPixels();
  lu_SDTV.loadPixels();
  lu_Adobe.loadPixels();
  lu_HDTV.loadPixels();
  lu_UHDTV.loadPixels();
  
  for (let x = 1; x < img.width; x++) {
    for (let y = 1; y < img.height; y++) {
          let r = red(img.get(x,y));
          let g = green(img.get(x,y));
          let b = blue(img.get(x,y));
          let c = (r+g+b)/3;
          let l_s = (luma_SDTV[0]*r+luma_SDTV[1]*g+luma_SDTV[2]*b);
          let l_a = (luma_Adobe[0]*r+luma_Adobe[1]*g+luma_Adobe[2]*b);
          let l_h = (luma_HDTV[0]*r+luma_HDTV[1]*g+luma_HDTV[2]*b);
          let l_u = (luma_UHDTV[0]*r+luma_HDTV[1]*g+luma_UHDTV[2]*b);

      promedio.set(x, y, color(c));
      lu_SDTV.set(x, y, color(l_s));
      lu_Adobe.set(x, y, color(l_a));
      lu_HDTV.set(x, y, color(l_h));
      lu_UHDTV.set(x, y, color(l_u));
    }
  }
  promedio.updatePixels();
  lu_SDTV.updatePixels();
  lu_Adobe.updatePixels();
  lu_HDTV.updatePixels();
  lu_UHDTV.updatePixels();

  image(img, 0, 0,400,200);
  text('Original image',0,215);
  image(promedio, 410, 0,400,200);
  text('average',410,215)
  image(lu_SDTV, 0, 220,400,200);
  text('Luma SDTV',0,435);
  image(lu_Adobe, 410, 220,400,200);
  text('Luma Adobe',410,435);
  image(lu_HDTV, 0, 440,400,200);
  text('Luma HDTV',0,660);
  image(lu_UHDTV, 410, 440,400,200);
  text('Luma UHDTV',410,660);
}