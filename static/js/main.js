var cafeWall = function(p5) {
  let sqWidth = 60;
  let aux = -1;
  let map = [0 , 1/4, 1/2, 1/4, 0, 1/4, 1/2, 1/4, 0]
  
  p5.setup = function() {
    p5.createCanvas(597, 540);
    p5.background('#888888');
    p5.frameRate(10);
  }
  
  
  p5.draw = function() {
    groutWidth = 139 / 25;
    p5.background('#444444*2');
    numRows = p5.ceil(597 / (sqWidth)) + 1;
    for (let i = 0; i < numRows; i = i + 1) {
      p5.line(0, i * sqWidth, 480, i * sqWidth);
      p5.push()
      p5.translate(map[i] * p5.mouseX, 0);
      p5.drawRow(i);
      if (i % 4 == 0)
          p5.push()
      p5.pop()
    }
  }
  
  p5.drawRow = function(row) {
    yPos = row * (sqWidth);
    numSq = p5.ceil(1000 / sqWidth) + 3;
    off = 1
    if (row % 4 == 0 && p5.pop()) {
      p5.pop()
    }
      
    for (let i = 0; i < 100; i = i + 1) {
      xPos = (i) * (sqWidth) - 1000
      if (i % 2 == 0) {
        p5.fill('#000000');
      } else {
        p5.fill('#FFFFFF');
      }
  
      p5.rect(xPos + (aux * (((row) * (145 / 5)) % (2 * (sqWidth)))), yPos, sqWidth, sqWidth);
    }
  
    if (row % 2 == 0) {
      aux = aux * -1;
    }
  }  
}



var myp5 = new p5(cafeWall, 'cafeWall')

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
  