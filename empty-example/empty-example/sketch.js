
function setup() {
  // create canvas
  
 createCanvas(600,600);
  
  
}

function draw() 
{
	background(255);
	strokeWeight(4);
	stroke(132,100,13);

	for(var i = 0; i < width; i+=50)
	{
		for(var j = 0; j < height; j+=50)
		{
			//fill(142,133,104);
			ellipse(i,j,31,31);
			rect(i,j,30,30);
			rect(i+1,j-1,13,13);
		}
	}
 
 	

}
