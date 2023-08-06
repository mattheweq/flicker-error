let textColor = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  background("#f9f4f1");
}

function draw() {
  
  let t = "Forbidden! You don't have permission to access this server. \nAdditionally, a 404 Not Found error was encountered while \ntrying to use an ErrorDocument to handle the request.";

  stroke("#202123");
  fill("#f9f4f1");
  
  var r = random(1,50);
  rect(random(200,400),random(100,400),random(r),random(r));
  rect(random(400,600),random(200,800),random(r),random(r));

  fill(0);
  stroke(textColor);
  textSize(16);
  textFont("monospace");
  textLeading(14);
  
  text(t, random(150, 155), random(280,285)); 


  if (frameCount % 120 === 0) {
    textColor = textColor === 0 ? 255 : 0; 
  }
}

