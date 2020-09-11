const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,box1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper1 = new paper(400,150);
    box1 = new box(400,681,100,10);
    box2 = new box(450,640,10,100);
    box3 = new box(350,640,10,100);

  Engine.run(engine);
  ground = new Ground(600,height,1200,20);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  Matter.Body.setStatic(box1,true);
  Matter.Body.setStatic(box2,true);
  Matter.Body.setStatic(box3,true);
 keyPressed(); 
  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){

    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});

  }
}

