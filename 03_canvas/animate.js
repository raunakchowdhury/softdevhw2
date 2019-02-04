// Raunak Chowdhury
// SoftDev2 pd8
// K01 -- ...and I want to Paint It Better
// 2019-01-31

var canvas = document.getElementById("playground");
var clear = document.getElementById("clear");
var dotButton = document.getElementById('circle');
var stopButton = document.getElementById('stop');
var ctx = canvas.getContext("2d");

var growing = 0;
var requestID;
var radius = 10;

ctx.fillStyle = "#00ffff";


var clear_canvas = function(){
  ctx.clearRect(0,0,500,500);
}


var drawDot = function(){
  // if the circle is set to grow mode and the radius exceeds 200
  if (growing == 10 && radius >= 200){
    growing = -10;
  }
  else if (growing == -10 && radius <= 0){
    growing = 10;
  }
  radius += growing;

  clear_canvas();
  ctx.beginPath();
  ctx.arc( canvas.width / 2, canvas.height/2, radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  requestID = window.requestAnimationFrame(drawDot);
};

var stopIt = function(){
  window.cancelAnimationFrame(requestID);
  growing = 0;
};

dotButton.addEventListener('click', function(e){
  if(growing == 0){
    growing = 10;
    drawDot();
  }
});

stopButton.addEventListener('click', stopIt);
