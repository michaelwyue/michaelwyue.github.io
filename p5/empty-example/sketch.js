
var objects;



function preload()
{

	objects = loadModel('model/sphereShape.obj');

}


function setup() 
{
  // put setup code here
  createCanvas(420,517);
}

function draw() 
{
  // put drawing code here
  
  ellipse(232,225,60,60);
  line(132,144,87,92);
}