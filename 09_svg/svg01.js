var pic = document.getElementById('vimage');
var clear_button = document.getElementById('but_clear');

var previous_x = NaN;
var previous_y = NaN;

var draw = (e) => {
  var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  c.setAttribute("cx", e.offsetX);
  c.setAttribute("cy", e.offsetY);
  c.setAttribute("r", 15);
  c.setAttribute("fill", "red");
  c.setAttribute("stroke", "black");

  // console.log(pic.childNodes.length, pic)
  if (pic.childNodes.length > 0){
    draw_line(e.offsetX, e.offsetY);
  }
  pic.appendChild(c);
  previous_x = e.offsetX;
  previous_y = e.offsetY;
  // console.log('done!', e.offsetX, e.offsetY, pic);
};

var draw_line = (x,y) => {
  if (isNaN(previous_x) && isNaN(previous_y)){
    console.log('yeeting function');
    return;
  }
  var children = pic.childNodes;
  // console.log('creating line!');
  var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('x1', previous_x);
  line.setAttribute('x2', x);
  line.setAttribute('y1', previous_y);
  line.setAttribute('y2', y);
  line.setAttribute('stroke', 'black');
  pic.appendChild(line);
}

var clear = (e) => {
  pic.innerHTML='';
  previous_x = NaN;
  previous_y = NaN;
};

pic.addEventListener('click', draw);
clear_button.addEventListener('click', clear);
