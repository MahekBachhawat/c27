class  Chain {
    constructor(bodyA,bodyB){
     var options ={
         bodyA:bodyA,
         bodyB:bodyB,
         stiffness:0.5,
         length:10,

     }
       this.body = Constraint.create(options);
       World.add(world,this.body)


    }
    display(){
     var pointA = this.body.bodyA.position;
     var pointB = this.body.bodyB.position;
       
       push();

        strokeWeight(2);
       line (pointA.x,pointA.y,pointB.x,pointB.y);
       pop();
       

    }
}