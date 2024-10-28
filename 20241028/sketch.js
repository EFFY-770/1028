let angle = 0
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0); //原本的顏色
  rectMode(CENTER) //以中心點為座標點
  noFill() //方形內沒有填滿顏色
  angleMode(DEGREES) //設定角度的單位為0~360
  //frameRate(10)
}

function draw() {
  background(0); //後來蓋上去的顏色(黑)
  for(let y=0;y<height;y = y+120){
   for(let x=0;x<width;x = x+120){
     push()
     translate(x,y)
      stroke(255) //線條顏色
     for(let i=0;i<10;i = i+1){
       let r =map(sin(frameCount),-1,1,50,mouseX*5)
       let g =map(cos(frameCount/2),-1,1,50,75)
       let b =map(sin(frameCount/4),-1,1,30,255)
        stroke(r,g,b)
        rotate(angle)
        rect(0,0,100-i*3,100-i*3/3,20)
        angle = sin(frameCount)*20
      }
     pop()   
     }
 }
}