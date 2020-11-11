var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1, box2, box3

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-45, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 



	boxPosition = width/2-100;
	boxY = 600;

	box1Sprite = createSprite(boxPosition+100,boxY+40,200,20);
	box1Sprite.shapeColor = "red";

	box1 = Bodies.rectangle(boxPosition+100,boxY+45-20,200,20, {isStatic:true});
	World.add(world,box1);

	box2Sprite = createSprite(boxPosition, boxY,20,100);
	box2Sprite.shapeColor = "red";

	box2 = Bodies.rectangle(boxPosition+20, boxY,20,100, {isStatic:true});
	World.add(world,box2);

	box3Sprite = createSprite(boxPosition+200,boxY,20,100);
	box3Sprite.shapeColor = "red";

	box3 = Bodies.rectangle(boxPosition+200-20,boxY,20,100, {isStatic:true});
	World.add(world,box3);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 


  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody, false);
  }
}



