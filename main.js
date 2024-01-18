leftWrist_x = 0;
rightWrist_x = 0;
function preload() {

}
function setup() {
    video = createCapture(VIDEO);
    video.size(650, 600);
    canvas = createCanvas(650, 600);
    canvas.position(1100, 150);
    video.position(150, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotResults);
}
function draw() {
    background("white");
    textSize(leftWrist_x - rightWrist_x);
    text("hello. Nice to meet you!",200,200);
}
function modelLoaded() {
    console.log("Model has been loaded successfully");
}
function gotResults(result) {
    if (result.length > 0) {
        leftWrist_x = result[0].pose.leftWrist.x;
        rightWrist_x = result[0].pose.rightWrist.x;
        console.log(leftWrist_x);
    }
}