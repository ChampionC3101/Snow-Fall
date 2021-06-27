class Snow
{
    constructor(x,y,width, height)
    {   
        var options = 
        {
            'restitution': 1.051,
            'friction': 0.004,
            'isStatic':false
        }
        this.r = 7.5;
        this.body = Bodies.circle(x, y, this.r, options);
        this.width = 50;
        this.height = 50;
    
     this.image = loadImage('snow4.jpg');
     World.add(world, this.body)
    }

    
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;

        push()
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}