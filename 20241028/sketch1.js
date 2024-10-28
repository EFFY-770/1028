let angle = 0
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0) //原本的顏色
  rectMode(CENTER) //以中心點為座標點
  noFill() //方形內沒有填滿顏色
  angleMode(DEGREES) //設定角度的單位為0~360
  //frameRate(10)
}

function draw() {
  background(0); //後來蓋上去的顏色(黑)
  translate(mouseX,mouseY)
  stroke(255) //線條顏色
  rotate(angle)
  //rect(width/2,height/2,600,600) //原本的中心點為左上角，寬和高皆為600
  //rect(0,0,600,600,100)
  // angle = sin(frameCount)* 100
  //
  for(let i=0;i<10;i = i+1){
    rotate(angle)
    rect(0,0,100-i*3-mouseY/2,100-i*3-mouseY/2,100)
    angle = sin(frameCount)*10
    let r =map(sin(frameCount),-1,1,50,mouseX*5)
    let g =map(cos(frameCount/2),-1,1,50,75)
    let b =map(sin(frameCount/4),-1,1,30,255)
    stroke(r,g,b)
  
}
}