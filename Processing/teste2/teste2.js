var Bird;
var pipes = [];

function setup() {
  createCanvas(650, 600);
  Bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(0);
  
  for (var i = pipes.length-1; i >= 0;i--){
    pipes[i].show();
    pipes[i].update();
    
    if(pipes[i].hit(Bird)){
      console.log("HIT!!!!");
    }
    
    if (pipes[i].offscreen()){
      pipes.splice(i, 1)
    }
  }
  
  Bird.update();
  Bird.show();
  
  if( frameCount % 100 == 0){
    pipes.push(new Pipe());
  }
  
}

function keyPressed(){
  if(key == ' '){
    Bird.up();
  }
}