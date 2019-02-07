


function setup() 
{
  // put setup code here
  createCanvas(455,487);
}

function draw() 
{
  
	for(var i = 0; i <= width; i+=50)
	{
		for(var j = 0; j <= height; j+=50)
		{
			ellipse(i,j,40,42);
		}
	}


}