const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand 
var box
var slingShot
var polygonImage

function preload() {
    
  polygonImage =loadImage("polygon.png")
  
}

function setup() {
    engine = Engine.create();
    world = engine.world;
    createCanvas(900,400);
 

    ground= new Ground(450,390,900,20)
    stand1=new Stand(390,300,250,10)
    stand2=new Stand(700,200,200,10)
    
    box1 = new Box(330,235,30,40)
    box2 = new Box(360,235,30,40)
    box3 = new Box(390,235,30,40)
    box4 = new Box(420,235,30,40)
    box5 = new Box(450,235,30,40)
    box6 = new Box(360,235,30,40)
    box7 = new Box(390,235,30,40)
    box8 = new Box(420,235,30,40)
    box9 = new Box(390,235,30,40)

    

polygon=  Bodies.circle(50,200,20)
World.add(world,polygon)
slingShot=new SlingShot (this.polygon,{x:100,y:200})
}


function draw() {

background(56,44,44)

Engine.update(engine)
imageMode (CENTER)

image (polygonImage,polygon.position.x,polygon.position.y,40,40)

ground.display()
stand1.display()
stand2.display()

box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()


}




function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}
    
function mouseReleased(){
    slingShot.fly();

}
function keyPressed (){
    if (keyCode===32 ){
    slingShot.attach(polygon.body)
    }
}    
    