class boy{
    constructor(x,y,width,height){
       this.image = loadImage("boy.png");
     var options={
        isStatic:true , 
     }   
     this.body=Bodies.rectangle(x,y,200,195,options);   
     this.width=200;
     this.height=195;
     World.add(world,this.body);
  }
     display(){
        var pos=this.body.position ;
        imageMode(CENTER);
        image(this.image,pos.x, pos.y, 250,300);
    }  
  }