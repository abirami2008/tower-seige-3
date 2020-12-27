class Pentagon  {
    constructor(x, y) {
      var options={
        isStatic:false,
        restitution:0.8,
        friction:3,
        density:5
      }
      this.image=loadImage("polygon.png");
      this.body=Bodies.circle(x,y,20,options);
      this.radius=50;
      World.add(world,this.body);
    }
    display(){
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    fill("yellow");
    image(this.image,0,0,this.radius,this.radius);
    pop();
  }
  }