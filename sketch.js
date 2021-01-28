// Add matter.js first
// give the physics engines
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var raindrops = [];

var img;


function setup(){
  // create canvas
var canvas = createCanvas(displayWidth - 20,displayHeight - 30);
  // crate engine + world
    engine = Engine.create();
    world = engine.world;
  
    img = new Umbrella(displayWidth/2,500);
}

function draw(){
  
    background(backgroundImg);
    Engine.update(engine);
  
    if(frameCount % 1 === 0){
      var raindrop = new Drop(random(0, windowWidth), -100,10);
      raindrops.push(raindrop);
    }

    img.display();

    for(var i = 0; i < raindrops.length; i++){
      raindrops[i].fall(20);
      raindrops[i].display();
    } 

  
      
  
    drawSprites();
}   

