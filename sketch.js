
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var boy,boyimage
var tree
var stone 
var mango,mango2,mango3,mango4
var sling
function preload()
{
boyimage=loadImage("boy.png")
}

function setup() {
	createCanvas(1350, 650);
    rectMode(CENTER)
	boy=createSprite(200, 530, 10,10);
	boy.addImage(boyimage)
	boy.scale=0.1
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground=new Ground(650,600,1400,30);
	stone=new Stone(235,420,30,30);
	tree=new Tree (1300,600,50,50)	
	mango=new Mango(200,200,50,50);
	mango2 = new Mango (300,300,50,50);
	mango3 = new Mango(400,300,50,50);
    sling = new Slingshot(stone.body,{x:235,y:470});
	}


function draw() {
  rectMode(CENTER);
  background(155);
  
  ground.display();
  tree.display();
  stone.display();
  
  mango.display();
  mango2.display();
  sling.display();
  drawSprites();
  detectctollisios(Lmango,Lstone)
}
  
  
function mouseDragged(){
	Matter.Body.setPosition(stone.body ,{x:mouseX , y: mouseY})
  }
  function mouseReleased(){
	sling.fly()
  
  }
  function detectctollisios(Lmango,Lstone){
	 mango.body.position = Lmango.body.position
	 stone.body.position = Lstone.body.position

		 var distance = dist(stone.body.position.x , stone.body.position.y , mango.body.position.x , mango.body.position.y)
		 if(distance<-Lmango.r+Lstone.r)
		 {
			 Matter.Body.setStatic(Lmango.body,false);
		 }

  }
   

