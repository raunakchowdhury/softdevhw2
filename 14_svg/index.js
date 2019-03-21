// important to note that all of these are Arrays and are this iterable
var selection = d3.select('svg');
selection.append('p');
selection.select('p').datum(42);
selection.select('p').data(42);
console.log(selection.select('p'));


var data = [4, 8, 15, 16, 23, 42];

var width = 420,
    barHeight = 20;

var x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, width]);

// d3.tsv('d3.tsv', function(){

  // x.domain([0, d3.max(data, function(d){ return d.value; })]);

  var chart = d3.select(".chart")
      .attr("width", width)
      .attr("height", barHeight * data.length);

  var bar = chart.selectAll("g")
      .data(data)
    .enter().append("g")
      .attr("transform", function(d, i) {
        // console.log(i, d);
        return "translate(0," + i * barHeight + ")"; });

  bar.append("rect")
      .attr("width", x)
      .attr("height", barHeight - 1); //graph appears here

  bar.append("text")
      .attr("x", function(d) { return x(d) - 3; })
      .attr("y", barHeight / 2)
      .attr("dy", ".35em")
      .text(function(d) { return d; });

function type(d){
  d.value = +d.value;
  return d;
};
