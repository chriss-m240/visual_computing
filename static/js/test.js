function setup() {
    var myCanvas = createCanvas(200, 200);
    myCanvas.class('backgroundsketch');
}

function draw() {
  	ellipse(50, 50, 80, 80);
}

function mouseMoved() {
	ellipse(mouseX, mouseY, 80, 80);
}