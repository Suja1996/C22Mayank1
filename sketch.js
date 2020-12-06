const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myworld,myengine,object

function setup() {
  createCanvas(400,400);
myengine=Engine.create()
myworld=myengine.world;
option={
isStatic:true
}
object=Bodies.rectangle(200,200,50,50,option);
World.add(myworld,object);
console.log(object);

}

function draw() {
  background("yellow"); 
  Engine.update(myengine);

  rectMode(CENTER)
  rect(object.position.x,object.position.y,50,50);
  drawSprites();
}