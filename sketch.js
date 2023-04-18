const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var piso, piso2, piso3, piso4;

var bola;

var right;
var up;
var down;
var left;

var bola2;
var bola3;
var bola4;

function setup() {
  createCanvas(500, 600);

  engine = Engine.create();
  world = engine.world;

  var piso_options = {
    isStatic: true,
  };

  piso = Bodies.rectangle(250, 500, 500, 20, piso_options);
  World.add(world, piso);
  piso2 = Bodies.rectangle(250, 11, 500, 20, piso_options);
  World.add(world, piso2);
  piso3 = Bodies.rectangle(11, 250, 20, 500, piso_options);
  World.add(world, piso3);
  piso4 = Bodies.rectangle(489, 250, 20, 500, piso_options);
  World.add(world, piso4);

  var bola_options = {
    restitution: 0.9,
  };

  bola = Bodies.circle(250, 50, 20, bola_options);
  World.add(world, bola);

  console.log(bola);

  right = createImg("right.png");
  right.size(60, 50);
  right.position(420, 520);
  right.mouseClicked(moverParaDireita);

  left = createImg("left.png");
  left.size(60, 50);
  left.position(130, 520);
  left.mouseClicked(moverParaEsquerda);

  up = createImg("up.png");
  up.size(40, 50);
  up.position(20, 520);
  up.mouseClicked(moverParaCima);

  down = createImg("down.png");
  down.size(40, 50);
  down.position(300, 520);
  down.mouseClicked(moverParaBaixo);

  bola2 = new Ball(200, 50, 20, "blue");

  bola3 = new Ball(400, 50, 20, "red");

  bola4 = new Ball(350, 50, 20, "orange");
}

function draw() {
  background("black");

  Engine.update(engine);

  strokeWeight(2);
  stroke("purple");
  noFill();

  rectMode(CENTER);
  rect(piso.position.x, piso.position.y, 500, 20);
  stroke("red");
  rect(piso2.position.x, piso2.position.y, 500, 20);
  stroke("green");
  rect(piso3.position.x, piso3.position.y, 20, 520);
  stroke("yellow");
  rect(piso4.position.x, piso4.position.y, 20, 520);

  stroke("lightblue");
  ellipseMode(RADIUS);
  ellipse(bola.position.x, bola.position.y, 20);

  bola2.aparecer();
  bola3.aparecer();
  bola4.aparecer();
}
function moverParaDireita() {
  Body.applyForce(bola, { x: 0, y: 0 }, { x: 0.05, y: 0 });
}

function moverParaEsquerda() {
  Body.applyForce(bola, { x: 0, y: 0 }, { x: -0.05, y: 0 });
}

function moverParaCima() {
  Body.applyForce(bola, { x: 0, y: 0 }, { x: 0, y: -0.05 });
}

function moverParaBaixo() {
  Body.applyForce(bola, { x: 0, y: 0 }, { x: 0, y: 0.05 });
}
