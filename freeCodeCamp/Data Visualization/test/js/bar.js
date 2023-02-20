const h = 600;
const padding = 50;
const parseDate = d3.timeParse("%Y-%m-%d");
const format = d3.timeFormat("%Y-%m-%d");

fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json")
  .then((res) => res.json())
  .then((data) => {
    const json = data.data.map((d) => ({ date: parseDate(d[0]), gdp: d[1] })).sort((a, b) => d3.ascending(a.date, b.date));
    const graph = d3.select("#graph");
    const svg = graph.append("svg").attr("height", h);
    const tooltip = graph.append("div").attr("id", "tooltip");
    const xScale = d3.scaleTime().domain(d3.extent(json, (d) => d.date));
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(json, (d) => d.gdp)])
      .range([h - padding, padding]);
    const xAxis = svg
      .append("g")
      .attr("id", "x-axis")
      .attr("transform", `translate(0, ${h - padding})`);
    const yAxis = svg.append("g").attr("id", "y-axis").attr("transform", `translate(${padding}, 0)`);
    const bars = svg.selectAll("rect").data(json).enter().append("rect").attr("class", "bar");
    function drawChart() {
      const w = parseInt(d3.select("#graph").style("width"), 10);
      const bw = w / json.length;
      xScale.range([padding, w - padding]);
      svg.attr("width", w);
      xAxis.call(d3.axisBottom(xScale)).selectAll("g").attr("class", "tick");
      yAxis.call(d3.axisLeft(yScale)).selectAll("g").attr("class", "tick");
      bars
        .attr("x", (d) => xScale(d.date))
        .attr("y", (d) => yScale(d.gdp))
        .attr("width", bw)
        .attr("height", (d) => h - padding - yScale(d.gdp))
        .attr("data-date", (d) => format(d.date))
        .attr("data-gdp", (d) => d.gdp)
        .on("mouseover", (event, d) => {
          let x = event.layerX;
          let y = event.layerY;
          tooltip
            .classed("active", true)
            .html(`${format(d.date)}<br>$ ${d.gdp}`)
            .attr("data-date", format(d.date))
            .attr("data-gdp", d.gdp)
            .attr("style", `left: ${x < w / 2 ? x + 30 : x - 180}px;`);
        })
        .on("mouseout", () => {
          tooltip.classed("active", false);
        });
    }
    drawChart();
    window.addEventListener("resize", drawChart);
  });
