function preload(){

}

function setup(){
canvas=createCanvas(600,500);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();
}

function draw(){
    image(video,0,0,600,500);
    rec(50,50,600,500);
}