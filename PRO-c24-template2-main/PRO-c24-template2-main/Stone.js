class stone{
	constructor(x,y)
	{
	// assign options to the stone ball
	var options={
    
		restitution:0.8,
		friction:0.9,
		density:12
		 }
		 this.x=x;
		 this.y=y;
	
		//this.body= Bodies.rect(this.x,this.y,80,80,options);
        this.body = Bodies.rectangle(x, y, 50, 50, options);
		this.width = 40;
        this.height = 40;
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("lime");
			fill("red");
			//draw the rect here to display the stone ball
            rect(0, 0, this.width, this.height);
			pop()
	}

}