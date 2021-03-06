const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gameState = "onSling";


function setup() {
  createCanvas(1500,800);
  engine=Engine.create();
  world=engine.world
  base = new Ground(750, 790, 1500, 20);
  ground1 = new Ground(650,700,500,10);
  ground2 = new Ground(950,400,500,10);
  box1 = new Box(650,690,40,40);
  box2 = new Box(620,690,40,40);
  box3 = new Box(590,690,40,40);
  box4 = new Box(680,690,40,40);
  box5 = new Box(710,690,40,40);
  box6 = new Box(560,690,40,40);
  box7 = new Box(577,655,40,40);
  box8 = new Box(617,660,40,40);
  box9 = new Box(657,660,40,40);
  box10= new Box(682,660,40,40);
  box11= new Box(617,620,40,40);
  box12= new Box(657,620,40,40);
  box13= new Box(637,580,40,40);

  box14 = new Box(950,390,40,40);
  box15 = new Box(910,390,40,40);
  box16 = new Box(990,390,40,40);
  box17 = new Box(870,390,40,40);
  box18 = new Box(1030,390,40,40);
  box19 = new Box(830,390,40,40);
  box20 = new Box(870,350,40,40);
  box21 = new Box(910,350,40,40);
  box22 = new Box(950,350,40,40);
  box23 = new Box(990,350,40,40);
  box24 = new Box(910,310,40,40);
  box25 = new Box(950,310,40,40);
  box26 = new Box(930,270,40,40);

  polygon = new Polygon();
  slingshot = new SlingShot(polygon.body,{x:170, y:350})

 
}

function draw() {
  Engine.update(engine)
  background("pink");  
  base.display();
  ground1.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  polygon.display();
  slingshot.display();
  drawSprites();
}
function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}