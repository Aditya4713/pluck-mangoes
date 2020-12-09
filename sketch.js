var stone,boy1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone=new Stone(100,400);
	ground = new Ground(600,height,1200,20);
    boy1=new boy (200,600);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("pink");
  
  drawSprites();
 stone.display();
 boy1.display();
 ground.display();
}



