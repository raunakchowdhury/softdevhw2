var data = [3, 8, 15, 16, 23, 42];

var width = 420,
    barHeight = 20;

var x = d3.scaleLinear()
          .domain([0, d3.max(data)])
          .range([0, width]);

var chart = d3.select('chart')
    .attr('width', width) //setAttr
    .attr('height', barHeight * data.length);

var bar = chart.selectAll('g') //collection of svg elements
      .data(data)
    .enter().append('g')
      .attr('transform', function(d,i){ return "translate(0," + i + barHeight + ")"; });

bar.append("rect")
    .attr('width', x)
    .attr('height', barHeight - 1);
