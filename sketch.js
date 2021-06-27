var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

particles = []

function preload()
{
   snow3 = loadImage("snow3.jpg")
}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(snow3);  
  Engine.update(engine);

  if (frameCount % 10 === 0)
  {
      snow.push(new Snow(random(width - 20, width - 20)))
  }

  for (var m = 0; m < snow.length; m++)
  {
     snow[m].display();
  }


  drawSprites();


}