
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ground;
var top_wall;
var top_wall1;
var top_wall2;
var top_wall3;

function setup() {
  createCanvas(400,400);
engine=Engine.create();
world=engine.world;
ground=new Ground(200,390,400,20);
top_wall=new Ground(50,200,30,20);
top_wall1=new Ground(150,200,30,20);
top_wall2=new Ground(250,200,30,20);
top_wall3=new Ground(350,200,30,20);

}
function draw() 
{
  background(51);
  
  ground.show();
  top_wall.show();
  top_wall1.show();
  top_wall2.show();
  top_wall3.show();
  Engine.update(engine);
  
}


