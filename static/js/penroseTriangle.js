var penroseTriangle = function(p5) {
    var bg, sc, c1, c2, c3;
    var e = 110;
    var w = 60;
    
    p5.setup = function() {
      p5.createCanvas(500, 500);
      p5.strokeWeight(1);
      p5.mousePressed();
    }
    
    p5.mousePressed = function (){
      bg = p5.color(p5.random(255), p5.random(255), p5.random(255));
      sc = p5.color(p5.random(255), p5.random(255), p5.random(255));
      c1 = p5.color(p5.random(255), p5.random(255), p5.random(255));
      c2 = p5.color(p5.random(255), p5.random(255), p5.random(255));
      c3 = p5.color(p5.random(255), p5.random(255), p5.random(255));
    }
    
    p5.draw = function (){
      p5.background(bg);
      p5.stroke(sc);
      p5.translate(p5.width / 2, p5.height * 3 / 5);
      p5.fill(c1);
      p5.drawSide();
      p5.rotate(p5.TWO_PI / 3);
      p5.fill(c2);
      p5.drawSide();
      p5.rotate(p5.TWO_PI / 3);
      p5.fill(c3);
      p5.drawSide();
    }
    
    p5.drawSide = function(){
      var sin30, sin60, cos30, cos60;
      sin30 = cos60 = p5.sin(p5.PI / 6);
      cos30 = sin60 = p5.cos(p5.PI / 6);
      p5.beginShape();
      var x1 = -e * cos60;
      var y1 = (e * cos60) / p5.sqrt(3);
      p5.vertex(x1, y1);
      var x2 = x1 - w;
      var y2 = y1;
      p5.vertex(x2, y2);
      var x3 = x2 + (e + 3.0 * w) * cos60;
      var y3 = y2 - (e + 3.0 * w) * sin60;
      p5.vertex(x3, y3);
      var x4 = x3 + (e + 4.0 * w) * sin30;
      var y4 = y3 + (e + 4.0 * w) * cos30;
      p5.vertex(x4, y4);
      var x5 = x4 - w * cos60;
      var y5 = y4 + w * sin60;
      p5.vertex(x5, y5);
      var x6 = x5 - (e + 3 * w) * cos60;
      var y6 = y5 - (e + 3 * w) * sin60;
      p5.vertex(x6, y6);
      p5.endShape(p5.CLOSE);
    }
}


var myp5 = new p5(penroseTriangle, 'penroseTriangle')