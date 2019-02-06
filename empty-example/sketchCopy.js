
var objectThing;

function setup() {
  // create canvas
  
 createCanvas(255,279,WEBGL);
 
 }


function preload()
{
	objectThing = loadModel('model/ringCircle.obj');
}


function draw() 
{

 background(13);
 model(objectThing);
 directionalLight(255,255,255,0,0,1);
 ambientLight(140);
 	

}
