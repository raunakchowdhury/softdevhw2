// demo 4
// JS event propagation

// Name the collections of TDs, TRs, and overall table
var tds = document.getElementsByTagName('td');
var trs = document.getElementsByTagName('tr');
var table = document.getElementsByTagName('table')[0];


var clicky = function(e) {
  alert( this.innerHTML );
  //Q: What will happen when next line is uncommented?
  //the first EventListener to fire will block all other EventListeners triggered by the Event from firing
  e.stopPropagation();
};


//Q: Does the order in which the event listeners are attached matter?
// useCapture-activated EventListeners fire, in descending order (parent, then child)
// all other EventListeners fire, in ascending order (child, then parent)
for (var x=0; x < tds.length; x++) {
  tds[x].addEventListener('click', clicky);
}

table.addEventListener('click', clicky);

for (x=0; x < trs.length; x++) {
  trs[x].addEventListener('click', clicky, true);
}
