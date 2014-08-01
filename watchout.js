// start slingin' some d3 here.
d3.select('.current').select('span').text('number')

var dataArray = d3.range(30)
var width = window.innerWidth;
var height = window.innerHeight;


var color = d3.scale.linear()
			.domain([10,50])
			.range(["red","blue"])



var canvas = d3.select('body')
			.append('svg')
			.attr('width',width)
			.attr('height',height)
			.append('g')
			.attr("transform", "translate(40,40)")


var bars = canvas.selectAll('circle')
			.data(dataArray)
			.enter()
			.append('circle')
			.attr('cx',function(val){return Math.random()*width})
			.attr('r', 10)
			.attr('fill', function(val){return color(val)})
			.attr('cy', function(val){return Math.random()*height});

// var bubbles = canvas.selectAll('circle')
// .data(array)
// .enter()
// .append('circle')
// .attr('cx',250)
// .attr('cy',250)
// .attr('fill','green')
// .attr('r', function(val){return vall})






