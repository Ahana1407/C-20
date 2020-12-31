var fbox,mbox



function setup() {
  createCanvas(800,400);
 fbox= createSprite(400, 10, 50, 50);
mbox = createSprite(400,200,50,50)

mbox.shapeColor = "red"
fbox.shapeColor = "yellow"

mbox.velocityY=-2
fbox.velocityY=2
}

function draw() {
 /* mbox.x = mouseX
  mbox.y = mouseY


if(mbox.x- fbox.x<mbox.width/2+fbox.width/2
  && fbox.x- mbox.x<mbox.width/2+fbox.width/2
  && mbox.y - fbox.y<mbox.height/2+fbox.height/2
  && fbox.y - mbox.y<fbox.height/2+mbox.height/2
  ){

  mbox.shapeColor = "green"
  fbox.shapeColor = "orange"}


  else{
    mbox.shapeColor = "red"
fbox.shapeColor = "yellow"
  }*/

  if(mbox.x- fbox.x<mbox.width/2+fbox.width/2
    && fbox.x- mbox.x<mbox.width/2+fbox.width/2){
fbox.velocityX= fbox.velocityX*(-1)
mbox.velocityX= mbox.velocityX*(-1)
    }



   if(mbox.y - fbox.y<mbox.height/2+fbox.height/2
    && fbox.y - mbox.y<fbox.height/2+mbox.height/2){
      fbox.velocityY= fbox.velocityY*(-1)
      mbox.velocityY= mbox.velocityY*(-1)
      
    }
    


  background(0);  
  drawSprites();
}