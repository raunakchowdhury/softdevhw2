// Raunak Chowdhury
// SoftDev2 pd8
// K01 -- ...and I want to Paint It Better
// 2019-01-31

var canvas = document.getElementById("slate");
var clear = document.getElementById("clear");
var toggle = document.getElementById("toggle");

// instantiate a canvas
var ctx = canvas.getContext("2d");

// state var that determines if box (0) or if circle (1)
var state = false;

var clear_canvas = function(e){
  ctx.clearRect(0,0,600,600);
}

var add_shape = function(e){
  e.preventDefault();
  if (state){
    fill_rectangle(e.offsetX, e.offsetY);
  }
  else{
    fill_ellipse(e.offsetX, e.offsetY);
  }
}

var fill_rectangle = (x,y) => {
  ctx.fillStyle = "#00FF00";
  ctx.fillRect(x,y,50,50);
}

var fill_ellipse = (x,y) => {
  ctx.fillStyle = "#FF0000";
  // need this to prevent fill() from causing wonky shapes to appear on the screen
  ctx.beginPath();
  ctx.ellipse(x,y,50, 50, 0, 0, 2 * Math.PI);
  // ellipse is invisible until you fill it!
  ctx.fill();
}

var change_toggle = function(e){
  state = !state;
}

clear.addEventListener('click', clear_canvas);
toggle.addEventListener('click', change_toggle);
canvas.addEventListener('click', add_shape);

/*
 * Explanations:
 * ctx.beginPath(): resets a "pen" used to draw shapes
 * e.preventDefault(): prevents the function from executing
 * e.offsetX: x-coordinate of mouse pointer when an event is triggered
 * e.offsetY: y-coordinate of mouse pointer when an event is triggered
 */
