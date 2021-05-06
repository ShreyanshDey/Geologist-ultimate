    class Iron{
	constructor(x,y)
	{
	// assign options to the iron ball
	var options={
    
		restitution:0.8,
		friction:3.0,
		density:30
		 }
		 this.x=x;
		 this.y=y;
	
		//this.body= Bodies.rect(this.x,this.y,80,80,options);
        this.body = Bodies.rectangle(x, y, 50, 50, options);
		this.width = 100;
        this.height = 100;
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("brown");
			fill("purple");
			//draw the rect here to display the iron ball
            rect(0, 0, this.width, this.height);
			pop()
	}

}