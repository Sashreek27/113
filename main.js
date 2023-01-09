

function setup() {
  canvas = createCanvas(640, 600);
  canvas.position(210, 250);
  video = createCapture(VIDEO);
  video.size(200,200);
  video.hide();

 
}

function draw() {
  image(video, 120, 100, 400, 400);
  fill("aqua");
  stroke("black");
  strokeWeight(13);
  circle(50,50,80);
  circle(590,50,80);
   circle(50,550,80);
   circle(590,550,80);
   fill("Gold");
   stroke("black");
   rect(90,40,460,20);
   rect(580,93,20,410);
   rect(35,92,20,410);
   rect(90,540,460,20);
}

function take_snapshot(){    
  save('picture.png');
}

