song1 = "";
song2 = "";

function preload(){
    song1 = loadSound("History.mp3");
    song2 = loadSound("Story of my Life.mp3");
}

function setup(){
    canvas = createCanvas(450, 450); 
    canvas.center(); 

    video = createCapture(VIDEO); 
    video.hide(); 
}

function draw(){
    image(video, 0, 0, 450, 450); 
}