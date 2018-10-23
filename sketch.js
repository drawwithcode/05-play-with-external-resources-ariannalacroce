var mySong;
var analyzer;
var myImage;
var myImage_2;
var button;
var b = 0;

function preload(){
  mySong = loadSound('./assets/Butchers di Silent Partner.mp3');
  myImage = loadImage('./assets/florian.jpg');
  myImage_2 = loadImage('./assets/florian.png');
  myImage_3 = loadImage('./assets/floria2.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);
  mySong.loop();

  button = createButton('pause');
  button.style('padding', '23px');
  button.position(350, 30);
  button.mousePressed(songOnOff);

  button = createButton('play');
  button.style('padding', '23px');
  button.position(250, 30);
  button.mousePressed(songReplay);

  button = createButton('slow');
  button.style('padding', '23px')
  button.position(465, 30);
  button.mousePressed(songSlow);

  button = createButton('fast');
  button.style('padding', '23px')
  button.position(570, 30);
  button.mousePressed(songForward);
}

function draw() {
  background(0);
  image(myImage,0,0,1046.25,696.25);

  push();
  fill('black');
  noStroke();
  rect(254, 35, 70,60);
  rect(353, 35, 80,60);
  rect(462, 35, 70,60);
  rect(566, 35, 67,60);
  pop();

  var volume = analyzer.getLevel();
  stroke(255);
  noFill();
  if(mySong.isPlaying()){
    volume = map(volume, 0, 1, 50, width);
  var circle = ellipse(1046.25/1.921, 696.25/2, volume/2);}
  else{}

  push();
  imageMode(CENTER);
  angleMode(DEGREES);
  translate(1046.25/1.921,696.25/2.01);
  if(mySong.isPlaying() | b ==0) {
  rotate(frameCount);
  image(myImage_3,0,0,myImage_2.width/4,myImage_2.height/4);}
  if(mySong.isPlaying() && b==1) {
  rotate(frameCount/50);
  image(myImage_3,0,0,myImage_2.width/4,myImage_2.height/4);}
  if(mySong.isPlaying() && b==2) {
  rotate(frameCount*5);
  image(myImage_3,0,0,myImage_2.width/3.85,myImage_2.height/3.85);}
  pop();

  push();
  imageMode(CENTER);
  angleMode(DEGREES);
  translate(1046.25/2.89,696.25/2.01);
  if(mySong.isPlaying() || b ==0) {
  rotate(frameCount);
  image(myImage_2,0,0,myImage_2.width/4,myImage_2.height/4);}
  if(mySong.isPlaying() && b==1) {
  rotate(frameCount/50);
  image(myImage_2,0,0,myImage_2.width/4,myImage_2.height/4);}
  if(mySong.isPlaying() && b==2) {
  rotate(frameCount*5);
  image(myImage_2,0,0,myImage_2.width/3.85,myImage_2.height/3.85);}
  pop();
}

function songOnOff() {
  if(mySong.isPlaying()) {
   mySong.pause();
   b=3;}
}

function songReplay() {
  if (mySong.isPaused()){
   mySong.loop();
   mySong.rate(1);}
   else {mySong.rate(1)
     b=4;}
 }

function songSlow() {
  mySong.rate(0.5);
  b=1;}

function songForward() {
  mySong.rate(2);
  b=2;}
