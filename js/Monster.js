class Monster{

    constructor(x,y,r){
    
        var options={
            density: 1,
            frictionAir:1
        }
        
    this.x= x ;
    this.y= y;
    this.r= r;
    this.image = loadImage("Sprites/Monster-01.png");
      this.body=Bodies.circle(this.x, this.y,(this.r)/2,options);
        World.add(world,this.body);
    }

display()
 {
     var paperpos=this.body.position;
     var angle = this.body.angle;
     push()
     translate(paperpos.x,paperpos.y);
     rotate(angle);
    
     strokeWeight(3);
     fill(255,0,255);  
    imageMode(CENTER);
    image(this.image,0,0,this.r*2,this.r*2);
    pop()
     }
    



}


