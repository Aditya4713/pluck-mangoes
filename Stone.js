class Stone{
    constructor(x,y,width,height){
       this.image = loadImage("stone.png");
     var options={
        isStatic:false , 
        friction:1,
        restitution:0,
        density:1.2 
     }   
     this.body=Bodies.rectangle(x,y,200,195,options);   
     this.width=200;
     this.height=195;
     World.add(world,this.body);
  }
     display(){
        var pos=this.body.position ;
        imageMode(CENTER);
        image(this.image,pos.x, pos.y, 100,50);
    }  
  }