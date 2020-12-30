const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ballImg,ball;
var ground1,ground2;
var ground3;


function preLoad(){
ballImg=loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    
    world = engine.world;
    Engine.run(engine);
    ground1=new Ground(390,310,270,10);
    ground2=new Ground(800,225,210,10);
    ground3=new Ground(0,400,5000,10);
ball=Bodies.circle(50,200,20);
World.add(world,ball);
slingshot=new SlingShot(this.ball,{x:100,y:200});
    block1=new Block(300,275,30,40);
    block2=new Block(330,275,30,40);
    block3=new Block(360,275,30,40);
    block4=new Block(390,275,30,40);
    block5=new Block(420,275,30,40);
    block6=new Block(450,275,30,40);
    block7=new Block(480,275,30,40);
    block8=new Block(330,235,30,40);
    block9=new Block(360,235,30,40);
    block10=new Block(390,235,30,40);
    block11=new Block(420,235,30,40);
    block12=new Block(450,235,30,40);
    block13=new Block(360,195,30,40);
    block14=new Block(390,195,30,40);
    block15=new Block(420,195,30,40);
    block16=new Block(390,155,30,40);
    block17=new Block(740,205,30,40);
    block18=new Block(770,205,30,40);
    block19=new Block(790,205,30,40);
    block20=new Block(820,205,30,40);
    block21=new Block(850,205,30,40);
    block22=new Block(770,170,30,40);
    block23=new Block(800,170,30,40);
    block24=new Block(830,170,30,40);
    block25=new Block(800,130,30,40);
}

function draw(){
    background(50,40,40);
    Engine.update(engine);
    
    fill("brown");
    ground1.display();
    ground3.display();
    
    fill("blue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("pink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("blue");
    block13.display();
    block14.display();
    block15.display();
    fill("pink");
    block16.display();
    fill("brown");
    ground2.display();
    fill("blue");
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    fill("pink");
    block22.display();
    block23.display();
    block24.display();
    fill("pink");
    block25.display();
    fill("gold");
    imageMode(CENTER);
    image(ballImg,ball.position.x,ball.position.y,40,40);
    slingshot.display();
}

function mouseDragged(){
Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}