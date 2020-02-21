const width = 250;
const height = 250;

var maxSize = Math.min(width, height) / 2,
  drawDuration = 20;

function plotSpiroGraph() {
  //Function adjusted from: https://github.com/alpha2k/HTML5Demos/blob/master/Canvas/spiroGraph.html

  var R = maxSize;
  var r = getRandomNumber(40, R * 0.75);
  var alpha = getRandomNumber(25, r);
  var l = alpha / r;
  var k = r / R;

  // var lines = 1000;
  // var linethickness = 0.1;
  // var circumference = Math.PI * 20;
  // var space = circumference/lines;

  //Create the x and y coordinates for the spirograph and put these in a variable
  var lineData = [];
  for (var theta = 1; theta <= 20000; theta += 1) {
    var t = (Math.PI / 180) * theta;
    var ang = ((l - k) / k) * t;
    var x = R * ((1 - k) * Math.cos(t) + l * k * Math.cos(ang));
    var y = R * ((1 - k) * Math.sin(t) - l * k * Math.sin(ang));

    lineData.push({ x: x, y: y });
  }

  //Output the variables of this spiro
  //console.log(
  //   "R: " + R + ", r: " + r + ", alpha: " + alpha + ", l: " + l + ", k: " + k
  // );

  console.log(lineData);

  return lineData;
}

function getRandomNumber(start, end) {
  return Math.floor(Math.random() * (end - start)) + start;
}
//plotSpiroGraph();

$(".spiral").each((i, elem) => {
  var svg = d3
    .select(elem)
    .append("svg")
    // .attr("width", width + margin.left + margin.right)
    // .attr("height", height + margin.top + margin.bottom)
    .attr("viewBox", [0, 0, width, height])

    .append("g")
    .attr("class", "wrapper")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  var curves = d3.svg
    .line()
    .x(function(d) {
      return d.x;
    })
    .y(function(d) {
      return d.y;
    });

  var colors = ["#f200ae", "#3402fa", "#00c271", "#e85d00", "#e80000"];
  var numColors = 5;
  var startColor = getRandomNumber(0, numColors); //Loop through the colors, but the starting color is random

  function addSpiro() {
    var path = svg
      .append("path")
      .attr("class", "spirograph")
      .attr("d", curves(plotSpiroGraph())) //convert into d element using line function
      .style("stroke-width", 1)
      .style("stroke", colors[startColor]);

    //var totalLength = path.node().getTotalLength();

    // if (doDash) {
    //   //Adjusted from http://stackoverflow.com/questions/24021971/animate-the-drawing-of-a-dashed-svg-line
    //   //The first number specifies the length of the visible part, the dash, the second number specifies the length of the white part
    //   var dashing = getRandomNumber(1, 30) + ", " + getRandomNumber(1, 10); //Something such as "6,6" could happen
    //   //console.log("Dash pattern is: " + dashing);
    //   //This returns the length of adding all of the numbers in dashing (the length of one pattern in essense)
    //   //So for "6,6", for example, that would return 6+6 = 12
    //   var dashLength = dashing
    //     .split(/[\s,]/)
    //     .map(function(a) {
    //       return parseFloat(a) || 0;
    //     })
    //     .reduce(function(a, b) {
    //       return a + b;
    //     });
    //   //How many of these dash patterns will fit inside the entire path?
    //   var dashCount = Math.ceil(500 / dashLength);
    //   //Create an array that holds the pattern as often so it will fill the entire path
    //   var newDashes = new Array(dashCount).join(dashing + " ");
    //   //Then add one more dash pattern, namely with a visible part of length 0 (so nothing) and a white part
    //   //that is the same length as the entire path
    //   var dashArray = newDashes + " 0, " + 500;
    //   console.log(dashArray);
    // } else {
    //   //For a solid looking line, create a dash pattern with a visible part and a white part
    //   //that are the same length as the entire path
    //   var dashArray = 500 + " " + 500;
    // }

    //Animate the path by offsetting the path so all you see is the white last bit of dashArray
    //(which has a length that is the same length as the entire path), and then slowly move this
    //out of the way so the rest of the path becomes visible (the stuff at the start of dashArray)
    path
      .attr("stroke-dasharray", `${500} ${100}`)
      .attr("stroke-dashoffset", 500)
      .transition()
      .duration(drawDuration * 1000)
      .ease("linear")
      .attr("stroke-dashoffset", 0);
  }
  addSpiro(false);
});
