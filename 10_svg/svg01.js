// Raunak Chowdhury
// SoftDev2 pd8
// K10 -- Ask Circles [Change || Die]
// 2019-03-10

var pic = document.getElementById('vimage');
pic.innerHTML = '';
var clear_button = document.getElementById('but_clear');

var draw = (e) => {
  var c = createChild(e.offsetX, e.offsetY);
  pic.appendChild(c);
  // console.log('done!', e.offsetX, e.offsetY, pic);
};

var createChild = (x,y) => {
  var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("r", 15);
  c.setAttribute("fill", "red");
  c.setAttribute("stroke", "black");
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
    var randchild = createChild(Math.random() * 500, Math.random() * 500);
    pic.appendChild(randchild);
    c.remove();
    e.stopPropagation(); //needed to prevent pic's EventListener from acting
    // perm = true;
  }
}

var removeChild = (c) =>{
  console.log(c.getAttribute('fill'));
}
var clear = (e) => {
  pic.innerHTML='';
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

pic.addEventListener('click', pic_function);
clear_button.addEventListener('click', clear);
