function Bird(){
  this.y = height/2;
  this.x = 64;
  this.r = 25;
  
  this.gravity = 0.5;
  this.velocity = 0;
  this.upForce = -10;
  
  this.show = function(){
    fill(255,0,0);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }
  
  this.update = function(){
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;
    
    if( this.y > height){
      this.y = height;
      this.velocity = 0;
    }else if (this.y < 0){
      this.y = 0;
      this.velovity = 0;
    }
  }
  
  this.up = function(){
    this.velocity += this.upForce;
  }
}