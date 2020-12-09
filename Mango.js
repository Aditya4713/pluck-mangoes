class Mango{
    constructor(x,y,r){
      this.image = loadImage("mango.png");
     var options={
        isStatic:false,
        restitution:0.3,
        friction:110.5,
        density:1.2  
     }   
     this.x=x;
     this.y=y;
     this.r=r
     this.body=Bodies.circle(this.x, this.y,this.r/2, options)
     World.add(world,this.body);
  }
     display(){
        var mangopos=this.body.position ;
        push()
        translate(mangopos.x,mangopos.y)
        imageMode(CENTER);
        image(this.image, 0, 0, 80, 80);
        pop();
    }  
  }