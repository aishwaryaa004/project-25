const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin,dustbinIMG;
var paper,paperIMG;

var engine, world;

function preload(){
  dustbinIMG=loadImage("dustbingreen.png")
  
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100, 600, 10,10);

  ground = new Ground(400, 680, 800, 20);
  
  dustbin = createSprite(610,600,20,20);
  dustbin.addImage(dustbinIMG);
  dustbin.scale = 0.45;
  dustbin1 = new Dustbin(560, 620, 20, 100);
  dustbin2 = new Dustbin(610, 660, 100, 20);
  dustbin3 = new Dustbin(660, 620, 20, 100);
 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);
  
  Engine.update(engine);

  paper.display();

  ground.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:15, y: -15})
  }
}