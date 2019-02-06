
var objects;



function preload()
{

	objects = loadModel('model/sphereShape.obj');

}


function setup() 
{
  // put setup code here
  createCanvas(320,317,WEBGL);
}

function draw() 
{
  // put drawing code here
  background(174);
  model(objects);
  line(132,144,87,92);
}