song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
    song1 = loadSound("Gangnam_Style.mp3");
    song2 = loadSound("My_Little_pony.mp3");
}

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 550);
    video.hide();

    canvas = createCanvas(550, 550);
    canvas.position(675, 350);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 550, 550);
}

function modelLoaded(){
    console.log("posenet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left wrist x = "+leftWristX+" left wrist y = "+leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right wrist x = "+rightWristX+" right wrist y = "+rightWristY);
    }
}