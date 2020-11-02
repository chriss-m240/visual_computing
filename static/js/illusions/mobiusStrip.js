var mobiusStrip = function (p5) {
    let angle = 0;
    let flag = true;

    p5.setup = function() {
        p5.createCanvas(600, 555);
        p5.angleMode(p5.DEGREES);
        p5.background(255)
        p5.strokeWeight(1.2)
        p5.noLoop()
    }

    p5.draw = function() {
        for (let i = 0; i < 220; i++) {
            let x = p5.cos(angle) * 130 + p5.width / 2.4;
            let y = p5.sin(angle) * 120 + p5.height / 2;

            p5.fill(255)

            p5.push();
            p5.translate(x, y);
            if (i == 219)
            p5.noStroke()
            p5.ellipse(0, 0, 70, 180);

            p5.pop();

            angle -= 2;
            flag = !flag;
        }

        angle = 282;

        for (let i = 0; i < 16; i++) {
            let x = p5.cos(angle) * 130 + p5.width / 2.4;
            let y = p5.sin(angle) * 120 + p5.height / 2;

            p5.noFill()

            p5.push();
            p5.translate(x, y);
            p5.arc(0, 0, 70, 180, 270, 90);
            p5.pop();

            angle -= 2;
            flag = !flag;
        }

    }
}

var myp5 = new p5(mobiusStrip, 'mobiusStrip')
