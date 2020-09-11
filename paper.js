class paper{
    constructor(x,y){
    var options={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2,
    }
    this.body = Bodies.circle(x,y,20,options);
    World.add(world, this.body);
}
    display(){
        ellipseMode(RADIUS);
        ellipse(400,150,20,20);
        fill("yellow");
    }
};