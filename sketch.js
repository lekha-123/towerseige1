const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var box1,box2,box3,box4,box5,box6,box7,box8, stand,ball1
var polygon,sling;
function setup() {
  createCanvas(1600,400);
  engine = Engine.create();
	world = engine.world;
  stand= new ground(1000,400,200,25);
  box1=new box(1050,375,25,25);
  box2=new box(1025,375,25,25);
  box3=new box(1000,375,25,25);
  box4=new box(1075,375,25,25);
  box5=new box(975,375,25,25);
  box6=new box(925,375,25,25);
  box7=new box(950,375,25,25);
  box8=new box(975,350,25,25);
  box9=new box(1000,350,25,25);
  box10=new box(1050,350,25,25);
  box11=new box(950,350,25,25);
  box12=new box(1025,350,25,25);
  box13=new box(975,325,25,25);
  box14=new box(1000,325,25,25);
  box15=new box(1025,325,25,25);
  box16=new box(1000,300,25,25);
  ball1= Bodies.circle(50,200,20)
  World.add(world,ball1)
  sling=new slingshot(this.ball1,{x:200,y:100});

Engine.run(engine);
}
function preload()
{
polygon=loadImage("polygon.png")
}

function draw() {
  background(150,215,255); 
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
  stand.display();
  fill ("brown")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill ("red")
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  fill ("orange")
  box13.display();
  box14.display();
  box15.display();
  fill ("pink")
   box16.display();
   sling.display();

imageMode(CENTER);
image(polygon,ball1.position.x,ball1.position.y,40,40);
drawSprites();
}
function mouseReleased()
{
  sling.fly();
}
function mouseDragged()
{
  Matter.Body.setPosition(this.ball1,{x:mouseX,y:mouseY});
}