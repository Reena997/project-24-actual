
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer1 = new Hammer(200,200);
	plane = new Plane(600,height,1200,50);
	stone1 = new Stone(800,400);
	rub1 = new Rubber(900,450,70);
	sand1 = new Sand(300,100,15);
	sand2 = new Sand(400,100,15);
	sand3 = new Sand(700,100,15);
	sand4 = new Sand(800,100,15);
	sand5 = new Sand(100,100,15);
	iron1 = new Iron(500,300,100,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background(0);

  hammer1.display();
  rub1.display();
  plane.display();
  stone1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  iron1.display();

  drawSprites();
 
}



