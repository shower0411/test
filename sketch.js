var on=false
function setup() {
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER)
}

function draw() {
  background(0);
  fill(255,0,0,100);
  ellipse(width/2,height/2,100,30);
  ellipse(width/2,height/2,30,100);
  rect(width/2,height/2,100,100);
    if(mouseX>=width/2-50 && mouseX<=width/2+50){
      if(mouseY>=height/2-50 && mouseY<=height/2+50){
        fill(0,0,255,100)
      }
    }  
    else{
      fill(255,0,0,100)
    }
    ellipse(width/2,height/2,100,30);
    ellipse(width/2,height/2,30,100);
    rect(width/2,height/2,100,100);
  
}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}
function mousePressed(){
    
  }
  

