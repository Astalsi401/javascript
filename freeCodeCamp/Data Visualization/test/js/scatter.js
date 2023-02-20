const h = 600;
const padding = 50;
const parseYear = d3.timeParse("%Y");
const parseMin = d3.timeParse("%M:%S");
const formatYear = d3.timeFormat("%Y");
const formatMin = d3.timeFormat("%M:%S");
const dotColor = {
  nodoping: "navy",
  doping: "brown",
};

fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json")
  .then((res) => res.json())
  .then((data) => {
    const graph = d3.select("#graph");
    const svg = graph.append("svg").attr("height", h);
    const tooltip = graph.append("div").attr("id", "tooltip");
    const xScale = d3.scaleTime().domain([d3.min(data, (d) => parseYear(d.Year - 1)), d3.max(data, (d) => parseYear(d.Year + 1))]);
    const yScale = d3
      .scaleTime()
      .domain([d3.max(data, (d) => parseMin(d.Time)), d3.min(data, (d) => parseMin(d.Time))])
      .range([h - padding, padding]);
    const xAxis = svg
      .append("g")
      .attr("id", "x-axis")
      .attr("transform", `translate(0, ${h - padding})`);
    const yAxis = svg.append("g").attr("id", "y-axis").attr("transform", `translate(${padding}, 0)`);
    const circles = svg
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "dot")
      .attr("r", 6)
      .attr("data-xvalue", (d) => d.Year)
      .attr("data-yvalue", (d) => parseMin(d.Time))
      .attr("fill", (d) => (d.Doping === "" ? dotColor.nodoping : dotColor.doping));
    const legend = svg.append("g").attr("id", "legend");

    const labels = legend
      .selectAll("g")
      .data(data.map((d) => (d.Doping === "" ? "No doping allegations" : "Riders with doping allegations")).filter((e, i, a) => a.indexOf(e) === i))
      .enter()
      .append("g");

    labels
      .append("rect")
      .attr("width", 20)
      .attr("height", 20)
      .attr("fill", (d) => (d === "No doping allegations" ? dotColor.nodoping : dotColor.doping));

    labels
      .append("text")
      .text((d) => d)
      .attr("font-size", 10)
      .attr("height", 20)
      .attr("dy", 15)
      .attr("dx", -150);

    function drawChart() {
      const w = parseInt(d3.select("#graph").style("width"), 10);
      xScale.range([padding, w - padding]);
      svg.attr("width", w);
      labels.attr("transform", (d, i) => `translate(${w - padding}, ${h / 2 - i * 20})`);

      xAxis.call(d3.axisBottom(xScale)).selectAll("g");
      yAxis.call(d3.axisLeft(yScale).tickFormat((d) => formatMin(d))).selectAll("g");
      circles
        .attr("cx", (d) => xScale(parseYear(d.Year)))
        .attr("cy", (d) => yScale(parseMin(d.Time)))
        .on("mouseover", (event, d) => {
          let x = event.layerX;
          let y = event.layerY;
          tooltip
            .html(`${d.Name}: ${d.Nationality}<br>Year: ${d.Year}, Time: ${d.Time}${d.Doping === "" ? "" : "<br>" + d.Doping}`)
            .classed("active", true)
            .attr("style", `left: ${x < w / 2 ? x + 30 : x - 250}px; top: ${y}px;`)
            .attr("data-year", d.Year);
        })
        .on("mouseout", () => {
          tooltip.classed("active", false);
        });
    }
    drawChart();
    window.addEventListener("resize", drawChart);
  });
