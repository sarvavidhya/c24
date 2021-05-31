//creating a blueprint: creating a class
//Class is created to create many objects: object (properties and functions)

class Ground{

    //properties: this keyword
    constructor(x,y,width, height){
        var options = {isStatic:true}
      
        this. ground  = Bodies.rectangle(x,y,width, height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.ground);
      
    }
    display(){
        
        fill("brown");
        rectMode(CENTER);
        rect(this.ground.position.x, this.ground.position.y, this.width,this.height);
    }


}
