class Sand {
	constructor(x,y,r)
	{
	  var options={
		restituition:0.3,
		friction:5,
		density:1
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display(){
	
			var sandpos=this.body.position;		
			push()
			translate(sandpos.x, sandpos.y);
			rectMode(CENTER)
			strokeWeight(2);
			stroke("black");
			fill("tan");
			ellipse(0,0,this.r,this.r);

			pop()
	}

}