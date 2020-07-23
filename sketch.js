const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, division1, division2,division3, division4, division5, division6, division7, division8;

var particles =[];
var plinkos=[];
var plinkos2=[];
var divisions = [];

var divisionHeight=300;

var score=0;

function setup() {
  createCanvas(600,600);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;


  ground = new Ground(0,580,1200,20);
  division1 = new Divisions(20,510,10,120);
  division2 = new Divisions(100,510,10,120);
  division3 = new Divisions(180,510,10,120);
  division4 = new Divisions(260,510,10,120);
  division5 = new Divisions(340,510,10,120);
  division6 = new Divisions(420,510,10,120);
  division7 = new Divisions(500,510,10,120);
  division8 = new Divisions(580,510,10,120);

  for (var k=0; k<=600; k=k+80){
    divisions.push(new Divisions(k,600, divisionHeight/2, 10, divisionHeight));
  }
  
  for (var i=50; i<=250; i=i+50){


  for (var h=40; h<=600; h=h+50){
    plinkos.push(new Plinko(h,i));
  }
}
  

 

}

function draw() {
  background("black");  
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);


  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();

  for (var j=0; j<particles.length; j++){
    particles[j].display();
  }
  
  if (frameCount%60===0){
    particles.push(new Particle(random(50,550),10,10));
    score++;

  }
  
  for (var k; k<divisions.length;k++){
    divisions[k].display();
  }
  for (var h=0; h<plinkos.length; h++){
    plinkos[h].display();
  }
  //for (var d=0; d<15; d++){
    //plinkos[d].display();
  //}


  drawSprites();
}


