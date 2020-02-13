d3.json("data.json").then(data => {
  makeMap(data);
});

function makeMap(data) {
  console.log(data);

  const width = window.innerWidth;
  const height = window.innerHeight;

  const myProjection = d3
    // .geoAlbersUsa()
    .geoGingery()
    .lobes(6);
  //.scale([width * 1.4])
  //.translate([width / 2, height / 2]); //also zoom, rotate

  const geoPath = d3.geoPath().projection(myProjection);

  //   const geoPath = d3.geoPath();

  const svg = d3
    .select(".myMap")
    .append("svg")
    .attr("viewBox", [0, 0, width, height]);

  const mainGroup = svg.append("g").attr("id", "main-group");

  mainGroup
    .selectAll(".state")
    .data(topojson.feature(data, data.objects.states).features) //equivalent of .data-> we are saying we are using topojson
    .enter()
    .append("path")
    .attr("d", geoPath)
    .attr("class", "state");

  mainGroup
    .append("path")
    .datum(topojson.mesh(data, data.objects.states, (a, b) => a !== b))
    .attr("class", "state-borders")
    .attr("d", geoPath);
}
