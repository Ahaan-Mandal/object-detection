img= ""

 function preload() {
    img= loadImage("dog_cat.jpg");
}

function setup() {
    canvas= createCanvas(640, 420);
    canvas.center();

}

function draw() {
    image(img, 0, 0, 640, 420);
    stroke("red");
    fill("red");
    text("Dog",35,60);
    noFill();
   rect(30,50, 400, 350);
    
}