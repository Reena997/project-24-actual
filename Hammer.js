class Hammer {
    constructor(x, y) {
      var options = {
          'restitution':2,
          'friction':1.0,
          'density':0.5
      }
      this.body = Bodies.rectangle(x, y, 50, 100, options);
      this.width = 50;
      this.height = 100;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
    
      strokeWeight(3);
      stroke("black");
      rectMode(CENTER);
      fill("yellow");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };