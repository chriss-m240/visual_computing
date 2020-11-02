
var mullerLyer = function(p5) {
  var t = 1;
  var mult = 1;

  p5.setup = function() {
    p5.createCanvas(400, 400);
  }

  p5.draw = function() {
    p5.background(0);
    
    p5.scale(1.5);
    p5.strokeWeight(2);
    p5.rotate(0.5 * p5.PI);
    p5.translate(-70, -380);
    p5.drawShape();
    


    t += mult * 0.003;
    if (t > 1 || t < -1) {
      mult *= -1;
    }
  }

  p5.drawShape = function() {

    // lines are always the same size
    p5.stroke('green');
    p5.line(100, 200, 200, 200);
    p5.stroke('yellow');
    p5.line(200, 200, 300, 200);

    // Translating the same lines for comparison
    p5.stroke('green');
    p5.line(100, 300, 200, 300);
    p5.stroke('yellow');
    p5.line(200, 300, 300, 300);

    // arrows vary with time
    p5.stroke('white');
    p5.line(100, 200, 100 + t * 15, 200 + 15);
    p5.line(100, 200, 100 + t * 15, 200 - 15);

    p5.line(200, 200, 200 - t * 15, 200 + 15);
    p5.line(200, 200, 200 - t * 15, 200 - 15);

    p5.line(300, 200, 300 + t * 15, 200 + 15);
    p5.line(300, 200, 300 + t * 15, 200 - 15);

  }
}


var myp5 = new p5(mullerLyer, 'mullerLyer')
