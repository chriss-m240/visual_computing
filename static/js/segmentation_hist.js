
var constraints= [0, 255, 0, 255, 0, 255, 0, 255];
var old_constraints= [0, 255, 0, 255, 0, 255, 0, 255];

var sliderR;
var sliderG;
var sliderB;
var windowR;
var windowG;
var windowB;

function arrayEquals(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}

function preload() {
  img = loadImage("https://vignette.wikia.nocookie.net/drama/images/d/d9/Sana28.jpg/revision/latest/scale-to-width-down/300?cb=20200924140412&path-prefix=es");
  h_img = loadImage("https://vignette.wikia.nocookie.net/drama/images/d/d9/Sana28.jpg/revision/latest/scale-to-width-down/300?cb=20200924140412&path-prefix=es");
}


function segment_hist(imagen){
  
  //imagen.pixels = [...img.pixels];
  //print(imagen.pixels[5], constraints)
  for (var x = 0; x < imagen.width; x++) {
    for (var y = 0; y < imagen.height; y++) {
      var loc = (x + y * imagen.width) * 4;
      for (var z = 0; z<3; z++){
        if (img.pixels[loc + z]< constraints[2*z] || img.pixels[loc + z] >constraints[2*z+1]){
        imagen.pixels[loc + z] = 0;
      }else{
        imagen.pixels[loc + z] = img.pixels[loc + z];
      }
    }
  }
  }
  imagen.updatePixels();
  var sumPixelsNotRestricted = 0;
  for(i = 0; i< 4; i++){
    sumPixelsNotRestricted+=constraints[2*i+1] - constraints[2*z]; 
  }
  return sumPixelsNotRestricted!=1020
}


function createHist(imagen){
  
  var hist = new Array(4);
  for (var x = 0; x<4; x++){
    hist[x] = new Array(256).fill(0);
  }

  
  for (var x = 0; x < imagen.width-4; x++) {
    for (var y = 0; y < imagen.height-4; y++) {
      var loc = (x + y * imagen.width) * 4;
      for (var z = 0; z<4; z++){
        hist[z][imagen.pixels[loc + z]]++
      }
    }
  }
  return hist
}


function drawHist(hist, maxPixels, trans, imagen){
  
  for(x = 0; x < 3; x++) {
    translate(0, imagen.height/6);
    for (i = 0; i < 255; i++) {
      h = map(hist[x][i], 0, maxPixels[x], 0, height - imagen.height-10)
      if (x==0){
        fill(255, 0, 0);
      }else if (x==1){
        fill(0, 255, 0);
      }else if (x==2){
        fill(0, 0, 255);
      }

      rect(trans + (i * (imagen.width / (255))), imagen.height, imagen.width / (255), -h/7);
    }
  
  }
  translate(0, -imagen.height/2);
  image(imagen, imagen.width, 0);
}

function maxPixelValue(hist){
  var maxPixels = new Array(4).fill(255);
  for (i = 0; i<4; i++){
    maxPixels[i] = max(hist[i])
  }
  return maxPixels
}


function setup() {

  c = createCanvas(2*img.width, 2* img.height);
  background(255);
  
  sliderR = createSlider(0, 255, 125);
  
  sliderR.style('width', '300px');
  sliderG = createSlider(0, 255, 125);

  sliderG.style('width', '300px');
  sliderB = createSlider(0, 255, 125);
  
  sliderB.style('width', '300px');
  
  textBoxR = createInput('');
  
  textBoxR.size(50);
  
  textBoxG = createInput('');
  
  textBoxG.size(50);
  
  textBoxB = createInput('');
  
  textBoxB.size(50);
  sliderG.position(10, 200);

  sliderR.position(1.2*c.position().x,c.position().y + img.height + 3/6*img.height + 30);
  sliderG.position(1.2*c.position().x,c.position().y + img.height + 3/6*img.height + 80);
  sliderB.position(1.2*c.position().x,c.position().y + img.height + 3/6*img.height + 130);

  textBoxR.position(c.position().x,c.position().y + img.height + 3/6*img.height + 30);
  textBoxG.position(c.position().x,c.position().y + img.height + 3/6*img.height + 80);
  textBoxB.position(c.position().x,c.position().y + img.height + 3/6*img.height + 130);

  image(img, 0, 0);
  
  img.loadPixels();
  h_img.loadPixels();
  rgba_histogram = createHist(img);
  var maxPixels = maxPixelValue(rgba_histogram, img);
  drawHist(rgba_histogram, maxPixels, 0, img);

}

function updateConstrains(sliderR, sliderG, sliderB, windowR, windowG, windowB){
  constraints[0] = sliderR;
  constraints[1] = sliderR + parseInt(windowR);
  constraints[2] = sliderG;
  constraints[3] = sliderG + parseInt(windowG);
  constraints[4] = sliderB;
  constraints[5] = sliderB + parseInt(windowB);
  if (! arrayEquals(constraints, old_constraints)){
    print("necesita actualiza la imagen")
    updateImage();
    print(constraints, windowR, windowG, windowB)
    old_constraints = [...constraints]
  }
}


function updateImage(){
  
  normalize = segment_hist(h_img)
  image(h_img, h_img.width, 0);
  rgba_histogram = createHist(h_img);
  var maxPixels = maxPixelValue(rgba_histogram, h_img);
  
  
}

function draw() {
  
  background(255);
   
  
  image(img, 0, 0);
  
  rgba_or_histogram = createHist(img);
  var maxPixels = maxPixelValue(rgba_or_histogram, img);
  drawHist(rgba_or_histogram, maxPixels, 0, img);
  
  rgba_histogram = createHist(h_img);
  updateConstrains(sliderR.value(),sliderG.value(), sliderB.value(), textBoxR.value(), textBoxG.value(), textBoxB.value());
  var maxPixels = maxPixelValue(rgba_histogram, h_img);
  drawHist(rgba_histogram, maxPixels, h_img.width, h_img);

  fill(0);
  textSize(10);
  text1 = text('Slider y tamano de la segmentacion del histograma \ndel color Rojo: ', 0, 1.535 *h_img.height);
  fill(0);
  textSize(10);
  text2 = text('Slider y tamano de la segmentacion del histograma \ndel color Verde: ', 0, 1.635 *h_img.height);
  fill(0);
  textSize(10);
  text3 = text('Slider y tamano de la segmentacion del histograma \ndel color Azul: ', 0, 1.735 *h_img.height);

}