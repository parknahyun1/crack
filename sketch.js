let capture;

function setup() { 
  createCanvas(800,600);
  capture = createCapture(VIDEO);
  capture.size(160,120);
}

function draw() {
     for (let i=0 ; i<10 ;i++){
       noStroke();
       fill(255,10);
    rect(random(width,0), random(0,height), width,random(20,-20));
  }
  //image(capture, 0, 0, width, height)
  capture.loadPixels();
  noStroke();
  //strokeWeight(random(0,1));
  for (let y=0; y<capture.height; y=y+2) {
    for (let x=0; x<capture.width; x=x+2) {
      let idx = x + y * capture.width;
      let r = capture.pixels[idx*4];
      let g = capture.pixels[idx*4 + 1];
      let b = capture.pixels[idx*4 + 2];
      let gr = (r + g + b)/3.0; 
      if(mouseX<x*5+5*4 && mouseX>x*5 && mouseY<y*5+5*4 && mouseY>y*5){
        
      }
       if(getItem(x+":"+y)==true){
    
         fill(mouseX+r,mouseX+g,mouseX+b,120); 
         rect(x*5,y*5,random(-50,50),10);
      }          
  }
}
}

function mouseDragged(){
    capture.loadPixels();
  
  //clear();
  //noStroke();
  for (let y=0; y<capture.height; y=y+2) {
    for (let x=0; x<capture.width; x=x+2) {
      let idx = x + y * capture.width;
      let r = capture.pixels[idx*4];
      let g = capture.pixels[idx*4 + 1];
      let b = capture.pixels[idx*4 + 2];
      let gr = (r + g + b)/3.0; 
      if(mouseX<x*5+5*4 && mouseX>x*5 && mouseY<y*5+5*4 && mouseY>y*5){  
       storeItem(x+":"+y,true)
   
      }   
      }
    }


}

function keyTyped() {
  if (key === 'a') {
    clearStorage();
}
}
        