function preload(){

}
function setup(){
    canvas = createCanvas(400 , 380)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(400 , 380)
    video.hide()
}

function draw(){
    stroke(0 , 0 , 255)
    fill (0 , 0 , 255)
    rect(30 , 20 ,340 , 25)
    rect(20 , 20 ,25 , 320)
    rect(360 , 20 ,25 , 320)
    rect(30 , 340 ,340 , 25)
    stroke(255 , 0 , 0)
    fill (255 , 0 , 0)
    circle(30, 30, 50);
    circle(370, 30, 50);
    circle(30, 350, 50);
    circle(370, 350, 50);

    image(video , 50 , 50 , 300 , 280)
    

    
}
function take_snapshot(){
    save("avani.png")
}