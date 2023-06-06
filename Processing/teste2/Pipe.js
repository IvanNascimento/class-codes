
function Pipe(){
  this.w = 50;
  this.x = width;
  this.speed = 3;
  
  this.top = random(height/2);
  this.bottom = random(height/2);
  
  this.show = function(){
    fill(255);
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
  }
  
  this.update = function(){
    this.x -= this.speed;
  }
  
  this.offscreen = function(){
    if(this.x < -this.w){
      return true;
    }else{
      return false;
    }
  }
  
  this.hit = function(bird){
    if(bird.y < this.top + bird.r || bird.y > height - this.bottom - bird.r){
      if(bird.x > this.x && bird.x < this.x + this.w){
        return true;
      }
    }
  }
  
}