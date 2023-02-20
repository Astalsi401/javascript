const counties = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json";
const education = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json";
const h = 600;
const w = 960;
const padding = {
  top: 20,
  bottom: 130,
  left: 80,
  right: 50,
};
const graph = d3.select("#graph");
const svg = graph.append("svg").attr("height", h).attr("width", w);
const tooltip = graph.append("div").attr("id", "tooltip");
const legend = svg.append("g").attr("id", "legend").attr("transform", "translate(500,40)");
const tooltip_w = 260;
const legend_w = 260;
const colors_n = 9;

const chart = (ct, edu) => {
  const match = (id) => edu.filter((e) => e.fips == id)[0];
  const eduMax = d3.max(edu.map((e) => e.bachelorsOrHigher));
  const eduMin = d3.min(edu.map((e) => e.bachelorsOrHigher));
  const xScale = d3.scaleLinear().domain([eduMin, eduMax]).rangeRound([0, legend_w]);
  const colors = d3
    .scaleThreshold()
    .domain(d3.range(eduMin, eduMax, (eduMax - eduMin) / (colors_n - 1)))
    .range(d3.schemeBlues[colors_n]);
  svg
    .append("g")
    .attr("class", "counties")
    .selectAll("path")
    .data(topojson.feature(ct, ct.objects.counties).features)
    .enter()
    .append("path")
    .attr("d", d3.geoPath())
    .attr("class", "county")
    .attr("data-fips", (d) => match(d.id).fips)
    .attr("data-education", (d) => match(d.id).bachelorsOrHigher)
    .attr("fill", (d) => colors(match(d.id).bachelorsOrHigher))
    .on("mouseover", (event, d) => {
      let x = event.layerX;
      let y = event.layerY;
      let edu_d = match(d.id);
      tooltip
        .classed("active", true)
        .attr("data-education", edu_d.bachelorsOrHigher)
        .html(`${edu_d.area_name}, ${edu_d.state}: ${edu_d.bachelorsOrHigher}%`)
        .attr("style", `width: ${tooltip_w}px; left: ${x < w / 2 ? x + 30 : x - tooltip_w - 30}px; top: ${y < h / 2 ? y + 60 : y - 101}px`);
    })
    .on("mouseout", () => tooltip.classed("active", false));
  legend
    .selectAll("rect")
    .data(colors.range().map((d) => colors.invertExtent(d).map((a, i) => (a === null ? xScale.domain()[i] : a))))
    .enter()
    .append("rect")
    .attr("height", 6)
    .attr("width", (d) => (d[0] && d[1] ? xScale(d[1]) - xScale(d[0]) : xScale(null)))
    .attr("x", (d) => xScale(d[0]))
    .attr("fill", (d) => colors(d[0]));
  legend
    .append("g")
    .call(
      d3
        .axisBottom(xScale)
        .tickFormat((d) => `${Math.round(d)}%`)
        .tickValues(colors.domain())
    )
    .select(".domain")
    .remove();
};

Promise.all([fetch(counties).then((res) => res.json()), fetch(education).then((res) => res.json())]).then((data) => chart(data[0], data[1]));
