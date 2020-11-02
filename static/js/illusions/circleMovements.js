
var circleMovements = function(p5) {
    p5.setup = function() {
      p5.createCanvas(400, 400);
      p5.angleMode(p5.DEGREES);
    }
    
    p5.draw = function() {
      p5.background('black');
      p5.noStroke();
      p5.fill('blue');
      // Move the origin to the center
      p5.translate(p5.width / 2, p5.height / 2);
      
      // Don’t look at this line
      p5.rotate(p5.frameCount / 50);
      
      for (let i = 0; i < 8; ++i) {
        p5.push();
        p5.rotate(360 / 8 * i);
        p5.translate(p5.width / 4, 0);
        p5.ellipse(0, 0, 50, 50);
        p5.pop();
      }  
    }
  }
  
  
  var myp5 = new p5(circleMovements, "circleMovements")
  