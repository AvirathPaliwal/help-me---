class Mango{
    constructor(x,y,radius){
   var position = {
     isStatic:true,
     restitution:0,
     friction:1,
   }
  
  this.image=loadImage("mango.png")
  this.body=Bodies.circle(x,y,radius/2,position)
  this.r=radius
  World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        ellipseMode(RADIUS)
         push()
          
        translate(pos.x, pos.y);
        rotate(5);
        imageMode(CENTER)   
             //ellipse(1050,350,10,10);
             //ellipse(1150,400,10,10);
             // ellipse(1250,250,10,10);
             image(this.image,0,0,50,50);
             image(this.image,0,0,50,50);
             image(this.image,0,0,50,50);
         pop()
    }
}