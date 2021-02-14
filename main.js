song="";
leftwristX = 0
leftwristY = 0
rightwristX = 0
rightwristY = 0
leftwristscore = 0
rightwristscore = 0
function preload(){
   song=loadSound("maintitles.mp3")
}
function setup(){
  canvas = createCanvas(400,400)
  canvas.center()

  video = createCapture(VIDEO)
  video.hide()

  posenet = ml5.poseNet(video , modelloaded)
  posenet.on("pose", gotPoses)
}
function draw(){
 image(video ,0,0,400,400)
}
function play(){
    song.play()
    song.rate(1)
    song.setVolume(0.8)
}
function stop(){
    song.stop()
}
function modelloaded(){
  console.log("ok")
}
function gotPoses(results){
      if(results.length>0){
        console.log(results)
        leftwristX = floor(results[0].pose.leftWrist.x)
        leftwristY = floor(results[0].pose.leftWrist.y)
        rightwristX = floor(results[0].pose.rightWrist.x)
        rightwristY = floor(results[0].pose.rightWrist.y)
        leftwristscore = results[0].pose.keypoints[9].score
        rightwristscore = results[0].pose.keypoints[10].score
        console.log("leftWristx = "+leftwristX)
        console.log("leftWristy = "+leftwristY)
        console.log("rightWristx = "+rightwristX)
        console.log("rightWristy = "+rightwristY)
        console.log("leftwristscore = "+leftwristscore)
        console.log("rightwristscore = "+rightwristscore)
      }
}
