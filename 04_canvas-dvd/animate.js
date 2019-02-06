// Clyde "Thluffy" Sinclair
// SoftDev pd0
// K03 -- canvas-based, JS-driven animation basics
// 2019-02-06w
// --------------------------------------------------

//model for HTML5 canvas-based animation

//access canvas and buttons via DOM
var c = document.getElementById("playground");
var dotButton = document.getElementById( "circle" );
var stopButton = document.getElementById( "stop" );
var dvdButton = document.getElementById( "dvd" );

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

//set fill color to celine
ctx.fillStyle = "#00ffff";


var requestID;
var radius = 0;
var growing = true;


var drawDot = function() {
    window.cancelAnimationFrame( requestID );

    ctx.clearRect( 0, 0, c.width, c.height );

    if ( growing ) {
	radius += 1;
    }
    else {
	radius -= 1;
    }

    if ( radius == (c.width / 2) )
	growing = false;
    else if ( radius == 0 ) {
	growing = true;
    }

    //draw the dot
    ctx.beginPath();
    ctx.arc( c.width / 2, c.height / 2, radius, 0, 2 * Math.PI );
    ctx.stroke();
    ctx.fill();

    requestID = window.requestAnimationFrame( drawDot );
};

var clear_canvas = function(){
  ctx.clearRect(0,0,500,500);
}

var stopIt = function() {
    console.log( requestID );
    window.cancelAnimationFrame( requestID );
};

var dvdLogoSetup = function(){
  clear_canvas();
  window.cancelAnimationFrame( requestID );

  var rectWidth = 100;
  var rectHeight = 50;

  var rectX = Math.floor( Math.random() * c.width - rectWidth);
  var rectY = Math.floor( Math.random() * c.height - rectHeight);

  var xVel = 1;
  var yVel = 1;

  var logo = new Image();
  logo.src = "logo_dvd.jpg";

  var dvdLogo = function(){
    window.cancelAnimationFrame( requestID );

    if (rectX >= c.width - rectWidth){
      xVel *= -1;
    }
    if (rectY >= c.height - rectHeight){
      yVel *= -1;
    }
    rectX += xVel;
    rectY += yVel;

    ctx.drawImage( logo, rectX, rectY, rectWidth, rectHeight );
    requestID = window.requestAnimationFrame( dvdLogo );
  };
  dvdLogo();
};

var dvdLogo = function(){
  dvdLogoSetup();

};

dotButton.addEventListener( "click", drawDot );
stopButton.addEventListener( "click",  stopIt );
dvdButton.addEventListener( "click", dvdLogoSetup );

// c.addEventListener( "click", drawDot );
//drawDot();
//dvdLogo();
