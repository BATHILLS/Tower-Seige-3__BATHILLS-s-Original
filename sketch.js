const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var score = 0;
function preload(){
  polygon_img=loadImage("Hexagon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //set 2 for second stand
  //level one
  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  //level two
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  //top
  blocks9 = new Block(700,95,30,40);

  //ball holder with slings
  var imag1 = loadImage("Hexagon.png");
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  getTime();
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("orange");
  stroke("black")
  text("Drag the shape to hit the blocks! Try pressing the 'space' key to reload the ball",100,30);

  textSize(20);
 // fill("orange");
  stroke("black")
  text("Score"+score,150,900);

  
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill(random(25, 200), random(25,200), random(200, 255));
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill(random(50, 100), random(100, 225), random(100,150));
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill(random(0,250), random(0, 75), random(100,150));
  block13.display();
  block14.display();
  block15.display();
  fill(random(50, 75), random(0,57), random(70,140));
  block16.display();
  fill(random(25, 200), random(25,200), random(200, 255));
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill(random(50, 100), random(100, 225), random(100,150));
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill(random(0,250), random(0, 75), random(100,150));
  blocks9.display();
  fill(random(50, 75), random(0,57), random(70,140));
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
if (keyCode===32){
  slingShot.attach(this.ball);
}
}

async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responsejson = await response.json();
  var dt = responsejson.datetime
  var hour = await dt.slice(11,13)
  console.log(hour);

  //this helps us to maintain the colour of the screen by day and night. 
  //If it is day, the colour is green.
  //If it is night, the colour is brown.
  //All time is taken from Kolkata
  //API functions are supercool bro!
  //Why aren't you reading the code? 
  //Scroll down bro!




















































































































































































































































































































































  //thank you so much you scrolled up till this!
  // Now you deserve to see the code. Just scroll some more 100 lines...
  
  
































































































































































  // Huh! I came here at laaaaast!
  //I know you were wondering thissss....
  //I can read minds!!!!
  //Why were you here?
  //To read these comments?
  //Go and read that code below. 
  //You fool!
  //Hahahahahahaha
  if(hour>= 06 && hour<= 19){
      background("green");
  }
  else{
      background("brown");
  }
}