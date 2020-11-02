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