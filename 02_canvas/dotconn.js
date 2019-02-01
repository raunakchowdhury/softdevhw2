// Raunak Chowdhury
// SoftDev2 pd8
// K01 -- ...and I want to Paint It Better
// 2019-01-31

var canvas = document.getElementById("playground");
var clear = document.getElementById("clear");

// instantiate a canvas
var ctx = canvas.getContext("2d");

var clear_canvas = function(e){
  ctx.beginPath();
  ctx.clearRect(0,0,600,600);
}

var add_ellipse = function(e){
  fill_ellipse(e.offsetX, e.offsetY);
}

var fill_ellipse = (x,y) => {
  ctx.fillStyle = "#FF0000";
  ctx.ellipse(x,y,2, 2, 0, 0, 2 * Math.PI);
  // fill in and outside of path
  ctx.stroke();
  // move to that pos
  ctx.moveTo(x,y);
  // fill both
  ctx.fill();
}

clear.addEventListener('click', clear_canvas);
canvas.addEventListener('click', add_ellipse);

/*
 * Explanations:
 * ctx.beginPath(): resets a "pen" used to draw shapes
 * e.preventDefault(): prevents the function from executing
 * e.offsetX: x-coordinate of mouse pointer when an event is triggered
 * e.offsetY: y-coordinate of mouse pointer when an event is triggered
 */
