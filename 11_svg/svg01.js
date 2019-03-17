// Raunak Chowdhury
// SoftDev2 pd8
// K11 -- Ask Circles [Change || Die] …While On The Go
// 2019-03-15

var pic = document.getElementById('vimage');
pic.innerHTML = '';
var clear_button = document.getElementById('but_clear');
var move_button = document.getElementById('but_move');
var requestID;
var moving = false;

var draw = (e) => {
  var c = createChild(e.offsetX, e.offsetY, 'red');
  pic.appendChild(c);
  // console.log('done!', e.offsetX, e.offsetY, pic);
};

var createChild = (x,y, color) => {
  var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("r", 15);
  c.setAttribute("fill", color);
  c.setAttribute("stroke", "black");
  // c.setAttribute('moving', false);
  c.setAttribute('xVel', 1);
  c.setAttribute('yVel', 1);
  // add change color and delete functions
  c.addEventListener('click', function(e) {
    changeColor(e, c);
  });
  return c;
  // c.addEventListener('click', killChild);
}

var changeColor = (e, c) => {
  // console.log(e);
  if (c.getAttribute('fill') == 'red'){
    c.setAttribute('fill', 'green');
  }
  else if (c.getAttribute('fill') == 'green'){
    var randchild = createChild(Math.random() * 500, Math.random() * 500, 'red');
    pic.appendChild(randchild);
    c.remove();
    e.stopPropagation(); //needed to prevent pic's EventListener from acting
    // perm = true;
  }
}

var swapColor = (c) =>{
  //swaps a circle's color
  if (c.getAttribute('fill') == 'green'){
    c.setAttribute('fill', 'red');
  } else{
    c.setAttribute('fill', 'green');
  };

}

var removeChild = (c) =>{
  console.log(c.getAttribute('fill'));
}
var clear = (e) => {
  pic.innerHTML='';
  moving = false;
  window.cancelAnimationFrame( requestID );
};

var pic_function = (e) => {
  var children = pic.childNodes;
  var index;
  var make_circle = true;
  if (children.length != 0) {
    for (index = 0; index < children.length; index++ ){
      var child = children[index];
      // check all nodes if it's ok to add a new node
      // console.log(Math.sqrt(Math.pow(e.offsetX - children[index].getAttribute("cx"), 2) + Math.pow(e.offsetY - children[index].getAttribute("cy"), 2)))
      if (Math.sqrt(Math.pow(e.offsetX - child.getAttribute("cx"), 2) + Math.pow(e.offsetY - child.getAttribute("cy"), 2)) < 10){
        return;
      }
    }
    draw(e);
  }
  else{
    draw(e);
  }
}

var set_move = () => {
  var children = pic.childNodes;
  if (children.length == 0){
    return;
  }
  window.cancelAnimationFrame( requestID );
  // set individual vels here
  // children.forEach( (child) => {
  //   child.setAttribute('xVel', 1);
  //   child.setAttribute('yVel', 1);
  //   child.setAttribute('moving', true);
  // });
  var height = parseInt(pic.getAttribute('height')) - 10;
  var width = parseInt(pic.getAttribute('width')) - 10;
  moving = true;

  var move = () =>{
    window.cancelAnimationFrame( requestID );
    children.forEach( (child) => {
      // if (child.getAttribute('moving') == 'true'){
        var x = parseInt(child.getAttribute('cx'));
        var y = parseInt(child.getAttribute('cy'));
        var xVel = parseInt(child.getAttribute('xVel'));
        var yVel = parseInt(child.getAttribute('yVel'));
        var xChange = false;
        var yChange = false;
        if (x >= width || x <= 10){
           xVel *= -1;
           xChange = true;
           swapColor(child);
         };
        if (y >= height || y <= 10){
           yVel *= -1;
           yChange = true;
           swapColor(child);
        };
        // change colors halfway through the screen
        if (width / 2 == x || height / 2 == y){
          swapColor(child);
        }
        // // 1% chance to change colors
        if (Math.random() < 0.0001){
          swapColor(child);
        };
        child.setAttribute('cx', x + xVel);
        child.setAttribute('cy', y + yVel);

        if (xChange){
          child.setAttribute('xVel', xVel);
        };
        if (yChange){
          child.setAttribute('yVel', yVel);
        };
      // };
    });
    requestID = window.requestAnimationFrame( move );
  };
  move();
};

pic.addEventListener('click', pic_function);
clear_button.addEventListener('click', clear);
move_button.addEventListener('click', function(){
  if (!moving){
    set_move();
  };
});
