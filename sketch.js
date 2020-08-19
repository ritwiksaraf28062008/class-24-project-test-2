
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(100,200,15);
	dustbin = new Dustbin(700,365,50,85);

	ground = Bodies.rectangle(600,390,1200,20,{isStatic : true});

	World.add(world,ground)

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(20,30,40);

  rect(600,390,1200,20);
	
  
  paper.display();
  dustbin.display();
  
  console.log(paper.body.position);

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body , paper.body.position , {x : 40 , y : -30})
	}
}


