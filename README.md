# softdevhw2

# Aim: No Aim

- Talked about `preventDefault` and how it wasn't needed for 03_canvas
- To draw an image:
```js
var logo = new Image();
logo.src = "logo_dvd.jpg";
```
- Template code:
```js
var dvdLogoSetup = function(){
  window.cancelAnimationFrame( requestID );

  var rectWidth = 100;
  var rectHeight = 50;

  var rectX = Math.floor( Math.random() * c.width - rectWidth);
  var rectY = Math.floor( Math.random() * c.height - rectHeight);

  var xVel = 1;
  var yVel = 1;

  var logo = new Image();
  logo.src = "logo_dvd.jpg";
};
```
- More template code:
``` js
var dvdLogoSetup = function(){
  window.cancelAnimationFrame( requestID );
  ...
  var logo = new Image();
  logo.src = "logo_dvd.jpg";

  var dvdLogo = function(){
    ...
    requestID = window.requestAnimationFrame(...);
  };
  dvdLogo();
};
```
