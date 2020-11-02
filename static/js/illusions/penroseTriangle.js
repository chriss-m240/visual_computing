var penroseTriangle = function(p5) {
  let sf = 2; // scaleFactor
  
  p5.setup = function() {
    p5.createCanvas(500, 500, p5.WEBGL);
    p5.ortho(-p5.width / 2, p5.width / 2, p5.height / 2, -p5.height / 2, 0, 500);
    
  }
  p5.draw = function() {
    
    p5.background(200);
    p5.orbitControl();
    p5.normalMaterial();
    p5.rotateX(5.675);
    p5.rotateY(-150.00200)
    
    p5.scale(sf);
    p5.push();
     let r= p5.color(255,51,51);
    
     p5.background(255);
     p5.lights();
    
    p5.noStroke();
    p5.box(20,20,20);
    p5.translate(-20,0,0);
    p5.box(20,20,20);
    p5.translate(-20,0,0);
    p5.box(20,20,20);
    p5.translate(-20,0,0);
    
    p5.box(20,20,20);
    p5.translate(-20,0,0);
    
    p5.box(20,20,20);
    p5.translate(0,0,20);
    
    p5.box(20,20,20);
    p5.translate(0,0,20);
    
    p5.box(20,20,20);
    p5.translate(0,0,20);
    
    p5.box(20,20,20);
    p5.translate(0,0,20);
    
    p5.box(20,20,20);
    p5.translate(0,-20,0);
    
    p5.box(20,20,20);
    p5.translate(0,-20,0);
    
    p5.box(20,20,20);
    p5.translate(0,-20,0);
    
    p5.box(20,20,20);
    p5.translate(0,-20,10);
    
    p5.box(20,20,0.01);
    p5.translate(-20,0,0);
    
    p5.box(20,20,0.1);
    p5.fill(r)

    p5.translate(0,0,10);
    p5.normalMaterial();
    p5.beginShape();
    p5.fill(15)
    p5.vertex(50,50,50);
    p5.vertex(60,50,50);
    p5.vertex(50,50,50);
    p5.endShape(p5.CLOSE);
    
    p5.pop();
  }
}


var myp5 = new p5(penroseTriangle, 'penroseTriangle')