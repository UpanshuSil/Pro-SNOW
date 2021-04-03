const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var alien;
var alienw;
var backsound;
var maxSnow=15;
var snowarray=[];
var bg="snow3.jpg";
var bgimg;
var fd;
var fd1,fd2;
function preload(){
bgimg = loadImage("snow3.jpg");
alien = loadAnimation("img 1.png","img 2.png");

backsound=loadSound("wintersong.mp3");
//getTime();
}

function setup() {
  createCanvas(600,400);
  engine=Engine.create();
  world=engine.world;

 
  alienw = createSprite(50, 320, 50, 50);
 alienw.addAnimation("alienanimation",alien); 
  alienw.scale=1.0;


  for(var i=0; i<maxSnow; i++){
    snowarray.push(new snowfall(random(0,600), random(0,100)));
  }

  backsound.loop();
}

function draw() {
  background(bgimg);
  Engine.update(engine);

  for(var i=0; i<maxSnow; i++){
    snowarray[i].display();
    snowarray[i].update();
}

    
if(keyDown(LEFT_ARROW)) {
  alienw.x =alienw.x-2;
}

if (keyDown(RIGHT_ARROW)) {
   alienw.x = alienw.x+2;
 }
 
  drawSprites();
}
async function getTime(){
var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responseJSON=await response.json();
var dateTime=responseJSON.datetime;
var hour = dateTime.slice(11,13);
if(hour<=0600 && hour>=1900){
  bg = "snowfallnight.jpg";
}
else{
  bg = "snow3.jpg";
}
bgimg = loadImage(bg);
}