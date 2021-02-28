class Sand {
    constructor(x, y, r) {
      

      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1
          
      }
      this.r = r;
      this.x = x;
      this.y = y;
      this.body = Bodies.circle(this.x,this.y,this.r,options);
      
    
      
      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill("white");
      ellipse(0,0,this.r);
      pop();
    }
  };
  