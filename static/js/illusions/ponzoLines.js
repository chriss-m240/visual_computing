var lines = function(p5) {
  var railsWidth = 30
  var yPosition = 1000;

  p5.setup = function() {
    let cvn = p5.createCanvas(597, 650);
    cvn.mouseMoved(p5.changePosition)
    p5.background(220);
    p5.strokeWeight(5);
  }


  //dis
  //0.72y + 59.76

  //x
  //-0.36y + 268.62
  p5.draw = function() {
    p5.background(220);
    p5.stroke(0, 0, 0);
    
    
    p5.line((p5.width / 2) - railsWidth, 0, 1 * p5.width / 8, p5.height);
    p5.line((p5.width / 2) + railsWidth, 0, 7 * p5.width / 8, p5.height);

    let offset = 0
    
    for (let i = 1; i < 20; i++) {
      offset +=  5*i;
      let x0 = -0.36*offset+268.62
      let x1 = x0 + 0.72*offset + 59.76
      p5.line(x0-25, offset, x1+25, offset);
    }
    
    p5.stroke(255, 204, 0);
    p5.line(2.5/8*p5.width, 70, 5.5/8*p5.width, 70);
    p5.line(2.5/8*p5.width, p5.min(630, p5.max(90, yPosition)), 5.5/8*p5.width, p5.min(630, p5.max(90, yPosition)));
    
  }

  p5.changePosition = function(event) {
    yPosition = event.layerY
  }
}

var myp5 = new p5(lines, 'lines')
