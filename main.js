
noseX=0;
noseY=0;

function preload() {
Banana_cat_Hat = loadImage ('https://i.postimg.cc/V6W8pGBh/banana-cat-banana-cat-running.gif')
}

function setup() {
  canvas = createCanvas(600, 600);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300,300);
  video.hide();
  
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose',gotPoses);
}

function modelLoaded() {
console.log('PoseNet esta inicializado');
}

function gotPoses(results)
{
 if(results.length > 0)
 {
  console.log(results);
  noseX = results[0].pose.nose.x+90;
  noseY = results[0].pose.nose.y-140;
  console.log("nose x = " +  results[0].pose.nose.x);
  console.log("nose y = " +  results[0].pose.nose.y);
 }
}

function draw() {
  image(video, 0, 0, 600, 600);
  //circle(noseX, noseY, 20)
  image(Banana_cat_Hat, noseX, noseY, 150, 150)
}

function take_snapshot(){    
save('myFilterImage.png')
}
