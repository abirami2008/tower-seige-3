const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;
var ground1,ground2;
var polygon1;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,
block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;
var chain;
var score = 0;
var bg= "bg.png";
var backgroundImg;
function preload(){
    getBackgroundImage();
}
function setup(){
    var canvas=createCanvas(1200,400);
    engine=Engine.create();
    world=engine.world;
    polygon1 = new Pentagon(150,250);
    ground1= new Ground(570,370,260,10);
    ground2= new Ground(982,200,185,10);
    //1 ground level 1
    block1 = new Block(480,348);
    block2 = new Block(510,348);
    block3 = new Block(540,348);
    block4 = new Block(570,348);
    block5 = new Block(600,348);
    block6 = new Block(630,348);
    block7 = new Block(660,348);
    //1 ground level 2
    block8 = new Block(510,300);
    block9 = new Block(540,300);
    block10 = new Block(570,300);
    block11 = new Block(600,300);
    block12 = new Block(630,300);
    //1 ground level 3
    block13 = new Block(540,252);
    block14 = new Block(570,252);
    block15 = new Block(600,252);
    //1 ground level 4
    block16 = new Block(570,210);
    //2 ground level 1
    block17 = new Block(920,178);
    block18 = new Block(950,178);
    block19 = new Block(980,178);
    block20 = new Block(1010,178);
    block21 = new Block(1040,178);
    //2 ground level 2
    block22 = new Block(950,130);
    block23 = new Block(980,130);
    block24 = new Block(1010,130);
    //2 ground level 3
    block25 = new Block(980,82);

    chain= new Chain(polygon1.body,{x:200,y:205});
    Engine.run(engine);
}
function draw(){
    if (backgroundImg)
    background(backgroundImg);
    Engine.update(engine);
    
    textSize(35);
    fill("white");
    text("Score :"+score,750,40);
    ground1.display();
    ground2.display();
    fill(63,224,208);
    block1.display();
    fill(63,224,208);
    block2.display();
    fill(63,224,208);
    block3.display();
    fill(63,224,208);
    block4.display();
    fill(63,224,208);
    block5.display();
    fill(63,224,208);
    block6.display();
    fill(63,224,208);
    block7.display();
    fill("pink");
    block8.display();
    fill("pink");
    block9.display();
    fill("pink");
    block10.display();
    fill("pink");
    block11.display();
    fill("pink");
    block12.display();
    fill(0,255,255);
    block13.display();
    fill(0,255,255);
    block14.display();
    fill(0,255,255);
    block15.display();
    fill(128,128,128);
    block16.display();
    fill(0,255,255);
    block17.display();
    fill(0,255,255);
    block18.display();
    fill(0,255,255);
    block19.display();
    fill(0,255,255);
    block20.display();
    fill(0,255,255);
    block21.display();
    fill(63,224,208);
    block22.display();
    fill(63,224,208);
    block23.display();
    fill(63,224,208);
    block24.display();
    fill("pink");
    block25.display();
    polygon1.display();
    chain.display();
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();

    drawSprites();
    fill(206,202,181);
    textSize(25);
    text("Drag The Hexagonal Stone And Release It, to launch it towards the blocks",200,30);
    
}
function mouseDragged(){
Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
chain.fly();
}
function keyPressed(){
if (keyCode===32){
    chain.attach(polygon1.body);
}
}
async function getBackgroundImage(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responsejson = await response.json();
    console.log(responsejson);
    var datetime = responsejson.datetime;
    var hour=datetime.slice(12,13); 
    if (hour>=06 && hour<=19){
        bg = "bg.png";
    }
    else {
        bg = "bg2.png";
    }
    backgroundImg=loadImage(bg);
}