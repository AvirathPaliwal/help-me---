class Slingshot{
    constructor(b1, p2){
        var options = {
            bodyA: b1,
            pointB: p2,
            stiffness: 0.10,
            length: 12
        }
        this.mysling = Matter.Constraint.create(options)
        this.p=p2
        World.add(world, this.mysling);
        
    }
    fly(){
        this.mysling.bodyA=null

    }
    display(){
        if(this.mysling.bodyA){
            var posA = this.mysling.bodyA.position;
            var posB = this.p;
            strokeWeight(4);
            line(posA.x, posA.y, posB.x, posB.y);
        }
    
    }
}