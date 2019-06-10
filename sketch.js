var snekey;
var scl = 20;
var food;
function setup() {
    createCanvas(600, 600);
    snekey = new Snake();
    frameRate(10);
    pickLocation();

}

function pickLocation() {
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}
function draw() {
    background(10);
    if (snekey.eat(food)){
        pickLocation();
    }
    snekey.death();
    snekey.update();
    snekey.show();
    fill(175,100,220);
    rect(food.x, food.y, scl, scl);
    fill(204, 102, 0);
}
function keyPressed() {
    if (keyCode === UP_ARROW) {
        snekey.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        snekey.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        snekey.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        snekey.dir(-1, 0);
    }
}