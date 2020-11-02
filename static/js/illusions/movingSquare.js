var movingSquare = function (p5) {
    var x = 0;
    var sqWidth = 275;
    var sqCWidth = 350;
    var flag = true;

    p5.setup = function () {
        let cnv = p5.createCanvas(600, 600);
        cnv.mousePressed(p5.mouseHandler)
        cnv.mouseReleased(p5.mouseHandler)
        p5.rectMode(p5.CENTER);
    }
    p5.draw = function () {
        p5.background(220);
        x += 0.015;

        p5.push()
            p5.fill("#95C27D")
            p5.translate(p5.width / 2, p5.height / 2);
            p5.rotate(x);
            p5.rect(0, 0, sqCWidth, sqCWidth);
        p5.pop()

        if(flag) {
            p5.fill("#F5D660")
            p5.rect(sqWidth / 2, sqWidth / 2, sqWidth, sqWidth);
            p5.rect(p5.width - sqWidth / 2, p5.height - sqWidth / 2, sqWidth, sqWidth);
            p5.rect(p5.width - sqWidth / 2, sqWidth / 2, sqWidth, sqWidth);
            p5.rect(sqWidth / 2, p5.height - sqWidth / 2, sqWidth, sqWidth);
        } 
    }

    p5.mouseHandler = function() {
        flag = !flag;
    }
}

var myp5 = new p5(movingSquare, 'movingSquare')
