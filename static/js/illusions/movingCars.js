var movingCars = function(p5) {
  var aux = 1;
  var x = 0;
  var flag = false;

  p5.setup = function() {
    let cnv = p5.createCanvas(597, 555);
    cnv.mousePressed(p5.mouseHandler)
    cnv.mouseReleased(p5.mouseHandler)

    p5.background(255);
    p5.strokeWeight(15);  
  }

  p5.draw = function() {
    p5.background(255);
    p5.stroke(0, 0, 0);
    let offset = 10

    for (let i = 0; i < 200; i++) {
      if (i % 2 == 0) {
        let x0 = (offset * i) + 5 * i;
        p5.line(x0, 10, x0, p5.height-10)
      }
    }

    if (flag) {
      p5.background(255);
    }
    
    p5.stroke(255, 255, 0);
    
    if ((p5.frameCount)%(p5.width-45) == 0) {
      aux *= -1;
    }
    x += aux* 1
    p5.rect(x, 2*p5.height/6, 45, 15);
    p5.stroke(0, 0, 255);
    p5. rect(x, 4*p5.height/6, 45, 15);
  }

  p5.mouseHandler = function() {
    flag = !flag;
  }
}

var myp5 = new p5(movingCars, 'movingCars')
