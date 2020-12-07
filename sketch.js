const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, world,pig1,pig2 , box5 , Log3 , bird;
var box1 , box2, box3,box4,Log2,ground , Log1;


function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  box1 = new Box(900,350,70,70);
  box2 = new Box(700,350,70,70);
  ground = new Ground(600,height,1200,20);
  pig1 = new Pig(800,350);
  Log1 = new Log(800,300,280,PI/2);


  box3 = new Box(900,250,70,70);
  box4 = new Box(700,250,70,70);
  pig2 = new Pig(800,250);
  Log2 = new Log(800,200,280,PI/2);

  box5 = new Box(800,150,70,70);
  Log3 = new Log(750,100,150,PI/6);
  Log4 = new Log(850,100,150,-PI/6);

  bird = new Bird(100,200);

}

function draw() {
  background(0);  
  Engine.update(engine);

  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  Log1.display();
  Log2.display();
  pig2.display();
  box3.display();
  box4.display();
  box5.display();
  Log3.display();
  Log4.display(); 
  bird.display();
}