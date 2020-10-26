class Paper
{
    constructor (x,y,diameter)
    {
        var options = 
        {
            isStatic : false,
            'restitution' : 1.0,
            'friction' : 1.0,
            'density' : 1.2
        }
     this.x = x;
     this.y = y;
     this.diameter = diameter;
     this.body = Bodies.circle(this.x,this.y,this.diameter,options);
     this.width = width;
     this.height = height;
     World.add(world,this.body);
    }
    display(){
        var paperPosition = this.body.position;
        push ();
        fill ("green");
        translate(paperPosition.x,paperPosition.y);
        ellipseMode(CENTER);
        ellipse(0,0,this.diameter);
        pop ();
}
}