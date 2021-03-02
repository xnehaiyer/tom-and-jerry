var background, backgroundImg;
var cat, catAni, catImg;
var mouse,mouseImg;
function preload() {
    //load the images here
    backgroundImg = loadImage("images/garden.png");
    catImg = loadAnimation("images/cat1.png");
    catAni = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg = loadAnimation("images/mouse2.png","images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse = createSprite(300,500,10,10);
    mouse.addAnimation("jerry",mouseImg);
    cat = createSprite(700,500,10,10);
    cat.addAnimation("tom",catImg);
}

function draw() {
    background(255);
    keyPressed();
    //Write condition here to evalute if tom and jerry collide
    if(cat.isTouching(mouse)){
        mouse.destroy();
        cat.destroy();
    }
    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
       cat.velocityX = -5;
       cat.changeAnimation("running",catAni);
    }
}
