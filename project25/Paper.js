class Paper {
  constructor(x, y, radius) {
    var options = {
      isStatic: false,
      'restitution':0.3,
      'friction':0.5,
      'density':1.2
    }
    this.image= loadImage("paper.png")
    this.radius = radius
    this.body = Bodies.circle(x, y, radius, options);
    
    
    World.add(world, this.body);
    }
  display(){
   var pos= this.body.position

    translate(pos.x,pos.y)

    fill("yellow");
   imageMode(CENTER) 
   image(this.image,0,0,this.radius,this.radius) 
   
  }
  };