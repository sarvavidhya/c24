/*
PHYSICS ENGINE

angry bird. 
ball -- circle. bounciness of the ball will be different for tennis ball, plastic ball.
Hence, we are going to use the predefine shapes(rect, ellipse)
Matter.World, Matter.Bodies, Matter.Engine
STEP:
you have to do only once
1. Create a physics engine
2. Add engine to the physics world
3. Engine.update(eng);

4. Bodies.rectangle(x,y,width, height)
5. Add that body to the world

var -- will vary from time to time.
const -- will not change at any cost.
namespacing -- nickname to the biggest name using const
*/
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//var x: declaring 

//var x = 0:initializing the variable
var ground;

function setup() {

  //creating all the things should be done in setup
  createCanvas(1200,550);

  eng = Engine.create();
  world = eng.world;


  box1=new Box(900,400,70,70);
  box2=new Box(700,400,70,70);
  pig1=new Pig(800,400);
  //pig2=new Pig()
  ground = new Ground(600,530,1200,20);
}

function draw() {
  background("pink");  
 
  Engine.update(eng);
  box2.display();
  box1.display();
  pig1.display();
  ground.display();
  
}