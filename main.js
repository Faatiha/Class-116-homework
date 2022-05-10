rightEyeX = 0;
rightEyeY = 0;
function preload(){
    hat_filter = loadImage("https://i.postimg.cc/ZRmKx1py/309-3094138-top-hat-clipart-transparent-black-hat-clip-art-removebg-preview.png")
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initiated!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        rightEyeX = results[0].pose.rightEye.x-10;
        rightEyeY = results[0].pose.rightEye.y -100;
        console.log("rightEyes x = " + rightEyeX);
        console.log("rightEyes y = " + rightEyeY);
    }
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(hat_filter, rightEyeX, rightEyeY, 50, 50);
}

function take_snapshot(){
    save("HatFilter.png");
}
