
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var rwall, lwall;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var ball_options={
		isStatic:false,
		restitution:0.3, 
		}
	var ground_options={
	isStatic:true
	
	}
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(200, 50, 15, ball_options);
	World.add(world, ball);

	ground = Bodies.rectangle(400, 700, 800, 13, ground_options);
	World.add(world, ground);

	rwall=Bodies.rectangle(700, 700, 15, 600, ground_options);
	World.add(world, rwall);

	lwall=Bodies.rectangle(550, 700, 15, 70, ground_options);
	World.add(world, lwall);

	Engine.run(engine);
	rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  
  background(0);
  
  drawSprites();

  fill("yellow");
  ellipse(ball.position.x, ball.position.y, 15, 15)

  rect(ground.position.x, ground.position.y, 800, 13)
  noStroke();
  rect(rwall.position.x, rwall.position.y, 15, 600)
  rect(lwall.position.x, lwall.position.y, 15, 70)

  if (keyDown("UP")){
		Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.005});
  }
  if (keyDown("RIGHT")){
		Matter.Body.applyForce(ball, {x:ball.position.x, y:ball.position.y}, {x:0.005, y:0 })
  }
}



