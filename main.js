function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(100, 150);

    canvas = createCanvas(550, 550);
    canvas.position(800, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("poseNet initialised...!!!!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}