var canvas;
var music;
var rect1,rect2,rect3,rect4;
var square;
var edge1,edge2,edge3;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1500,800);

    //create 4 different surfaces
rect1 = createSprite(100,725,400,20);
rect1.shapeColor = rgb(255, 162, 0);
rect2 = createSprite(480,725,350,20);
rect2.shapeColor = rgb(255, 66, 66);
rect3 = createSprite(835,725,350,20);
rect3.shapeColor = rgb(94, 129, 255);
rect4 = createSprite(1215,725,400,20);
rect4.shapeColor = rgb(42,157,143);
square = createSprite(600,400,30,30);
square.shapeColor = rgb(255,255,255);
square.velocityX = -4;
square.velocityY = 4;
edge1 = createSprite(10,10,1,1500);
edge2 = createSprite(1400,10,1,1500);
edge3 = createSprite(10,10,3000,1);

    //create box sprite and give velocity

}

function draw() {
    background(rgb(0,0,0));
    //create edgeSprite
square.bounceOff(rect1);
square.bounceOff(rect2);
square.bounceOff(rect3);
square.bounceOff(rect4);
square.bounceOff(edge1);
square.bounceOff(edge2);
square.bounceOff(edge3);
changeColor();
rectangle2();
rectangle3();
rectangle4();



    //add condition to check if box touching surface and make it box

    drawSprites();
}
function changeColor(){
    if(square.isTouching(rect1)){
        square.shapeColor = rgb(255, 162, 0);
    }
    else{
        square.shapeColor = "white";

}
}
function rectangle2(){
    if(square.isTouching(rect2)){
    square.shapeColor =  rgb(255, 66, 66);
}
else{
    square.shapeColor = "white";
}
}
function rectangle3(){
    if(square.isTouching(rect3)){
    square.shapeColor = rgb(94, 129, 255);
}
else{
    square.shapeColor = "white";
}}
function rectangle4(){
    if(square.isTouching(rect4)){
    square.shapeColor = rgb(255,255,255);
}
else{
    square.shapeColor = "white";
}}
