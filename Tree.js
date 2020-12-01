class Tree{
constructor(x,y,width,height){
    var position={
        isStatic:true
    }
    this.body = Bodies.rectangle(x,y,width,height,position)
    this.w=width
    this.h=height
    World.add(world,this.body);
   this.image=loadImage("tree.png")
    
}
display(){
//var pos = this.body.position
rectMode(CENTER)
imageMode(CENTER)
image(this.image,1200,400,400,400);

//rect(pos.x,pos.y,this.w,this.h)
}
}