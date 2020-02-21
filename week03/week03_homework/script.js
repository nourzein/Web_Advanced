const width = window.innerWidth;
const height = window.innerHeight;
const maxSize = Math.min(width, height) / 2;

function makeSpirals() {
  var R = getRandomNumber(60, maxSize);
  var r = getRandomNumber(40, R * 0.5);
  var alpha = getRandomNumber(25, r);
  var l = alpha / r;
  var k = r / R;

  const lineData = [];
  //math from Nadieh Bremer
  for (var theta = 1; theta <= 20000; theta += 1) {
    var t = (Math.Pi / 180) * theta;
    var ang = (1 - k / k) * t;
    var x = R * ((1 - k) * Math.cos(t) + l * k * Math.cos(ang));
    var y = R * ((1 - k) * Math.sin(t) - l * k * Math.sin(ang));
    lineData.push({ x: x, y: y });
  }

  console.log(
    "R: " + R + ", r: " + r + ", alpha: " + alpha + ", l: " + l + ", k: " + k
  );

  return lineData;
}
makeSpirals();

function getRandomNumber(start, end) {
  return Math.floor(Math.random() * (end - start)) + start;
}

const lineFunction = d3.svg
  .line()
  .x(function(d) {
    return d.x;
  })
  .y(function(d) {
    return d.y;
  })
  .curve(d3.curveStepAfter);

const svg = d3
  .select("#spirals")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var colors = ["#f200ae", "#3402fa", "#00c271", "#e85d00", "#e80000"];
var numColors = 5;
var startColor = getRandomNumber(0, numColors);

function addSpirals(doDash) {
  var path = svg
    .append("path")
    .attr("class", "spirograph")
    .attr("d", line(plotSpiroGraph()))
    .style("stroke-width", 3)
    .style("stroke", colors[startColor]);
}
