img= "";
status = "";

 function preload() {
    img= loadImage("dog_cat.jpg");
}

function setup() {
    canvas= createCanvas(640, 420);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Status : Detecting Objects";

}

function modelLoaded() {
    console.log("Model is Loaded");
    status = true;
    objectDetector.detect(img, gotResult);

}

function gotResult (error, results) {

    if (error){
console.error("error")
    }
    console.log(results)
}

function draw() {
    image(img, 0, 0, 640, 420);
    stroke("red");
    fill("red");
    text("Dog",35,60);
    noFill();
   rect(30,50, 400, 350);

   stroke("red");
   fill("red");
   text("cat", 350,100);
   noFill();
   rect(300,85, 300, 300);
    
}