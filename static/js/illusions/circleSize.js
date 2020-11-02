var circleSize = function(p5) {

  var flag = true;


  p5.setup = function() {
    let cnv = p5.createCanvas(597, 555);
    cnv.mousePressed(p5.mouseHandler)
    cnv.mouseReleased(p5.mouseHandler)
    p5.background(255);
    p5.strokeWeight(1);
  }

  p5.draw = function() {
    p5.background(255);
    p5.stroke(0, 0, 0);

    p5.fill(255, 34, 5)

    p5.ellipse(p5.width / 4 + 75, p5.height / 2, 60, 60);

    p5.fill(0, 127, 255)

    let offset = 147
    let size = 145

    if (flag) {
      p5.ellipse(p5.width / 4 + offset +75, p5.height / 2, size, size);
      p5.ellipse(p5.width / 4 - offset+75, p5.height / 2, size, size);

      p5.ellipse(p5.width / 4 + offset / 2+75, p5.height / 2 + offset, size, size);
      p5.ellipse(p5.width / 4 - offset / 2+75, p5.height / 2 - offset, size, size);
      p5.ellipse(p5.width / 4 - offset / 2+75, p5.height / 2 + offset, size, size);
      p5.ellipse(p5.width / 4 + offset / 2+75 , p5.height / 2 - offset, size, size);
    }


    p5.fill(255, 34, 5)

    p5.ellipse(3 * p5.width / 4 + 85, p5.height / 2, 60, 60);

    offset = 40
    size = 20
    p5.fill(0, 127, 255)
    
    if (flag) {
      p5.ellipse(3 * p5.width / 4 + offset + 85, p5.height / 2, size, size);
      p5.ellipse(3 * p5.width / 4 - offset+ 85, p5.height / 2, size, size);
      p5.ellipse(3 * p5.width / 4 + offset / 2+ 85, p5.height / 2 + offset, size, size);
      p5.ellipse(3 * p5.width / 4 - offset / 2+ 85, p5.height / 2 - offset, size, size);

      p5.ellipse(3 * p5.width / 4 - offset / 2+ 85, p5.height / 2 + offset, size, size);
      p5.ellipse(3 * p5.width / 4 + offset / 2+ 85, p5.height / 2 - offset, size, size);

      p5.ellipse(3 * p5.width / 4 + offset / 1.1+ 85, p5.height / 2 + offset / 1.7, size, size);
      p5.ellipse(3 * p5.width / 4 - offset / 1.1+ 85, p5.height / 2 - offset / 1.7, size, size);
      p5.ellipse(3 * p5.width / 4 - offset / 1.1+ 85, p5.height / 2 + offset / 1.7, size, size);
      p5.ellipse(3 * p5.width / 4 + offset / 1.1+ 85, p5.height / 2 - offset / 1.7, size, size);

      p5.ellipse(3 * p5.width / 4+ 85, p5.height / 2 - offset - offset / 6, size, size);
      p5.ellipse(3 * p5.width / 4+ 85, p5.height / 2 + offset + offset / 6, size, size);
    }
  }

  p5.mouseHandler = function() {
    flag = !flag;
  }
}

var myp5 = new p5(circleSize, 'circleSize')
