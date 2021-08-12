const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,world,leftSide,rightSide;

function preload()
{
	
}

function setup() {
createCanvas(1600, 700);
engine = Engine.create();
world = engine.world;

ground = new Ground(width/2,670,width,20);
leftSide = new Ground(1100,600,40,120);
rightSide = new Ground(1400,600,40,120);

 var ball_options={
 isStatic:false,
 restitution:0.3,
 friction:0,
 density:1.2
 }



//Create the Bodies Here.
 ball = Bodies.circle(100,10,20,ball_options);
 World.add(world,ball); 

Engine.run(engine);

 
 }


function draw() {
  rectMode(CENTER);
  background(0);
 Engine.update(engine)
 ellipse(ball.position.x,ball.position.y,70);
 ground.display();
 leftSide.display();
 rightSide.display();
}

function keyPressed(){
  if (keyCode === 38){
    Matter.Body.applyForce(ball, ball.position,{x:95,y:-95})
  }
}

