import { useState, useEffect } from 'react'
import axios from 'axios'
import * as d3 from 'd3'

const MoodChart = ({ id }) => {
  const [moodData, setMoodData] = useState([])

  // Hard code that server! Yeah!
  const server = "http://localhost:8888"

  useEffect(() => {
    return () => {
      // Get student mood data, one day of data, today's date
      const date = new Date()
      // Format date as YYYY/MM/DD, should I make this a function somewhere?
      const today = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
      axios.get(`${server}/responses/moods/${today}`)
        .then(function (response) {
          console.log(response)
          setMoodData(response.data)
          // If data
          if (response.data.length > 0) {
            // Run d3 drawChart function
          drawChart(response.data)
          }
          else {
            // Show something else, like no Data
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }, [])

  const drawChart = (data) => {
    // Temp data
    // const data = moodData.length > 0 ? moodData : [
    //   { name: "1", value: 1 },
    //   { name: "2", value: 4 },
    //   { name: "3", value: 2 },
    //   { name: "4", value: 5 },
    //   { name: "5", value: 3 },
    //   { name: "6", value: 3 },
    //   { name: "7", value: 1 },
    //   // { name: "8", value: 0 },
    //   { name: "9", value: 1 },
    // ]

    // Specify the chart’s dimensions.
    const width = 928;
    const height = Math.min(width, 500);

    // Create the color scale.
    const color = d3.scaleOrdinal()
      .domain(data.map(d => d.name))
      .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse())

    // Create the pie layout and arc generator.
    const pie = d3.pie()
      .sort(null)
      .value(d => d.value);

    const arc = d3.arc()
      .innerRadius(0)
      .outerRadius(Math.min(width, height) / 2 - 1);

    const labelRadius = arc.outerRadius()() * 0.8;

    // A separate arc generator for labels.
    const arcLabel = d3.arc()
      .innerRadius(labelRadius)
      .outerRadius(labelRadius);

    const arcs = pie(data);

    // Create the SVG container.
    // const svg = d3.create("svg")
    const svg = d3.select("#mood-chart").append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-width / 2, -height / 2, width, height])
      .attr("style", "max-width: 100%; height: auto; font: 14px sans-serif;");

    // Add a sector path for each value.
    svg.append("g")
      .attr("stroke", "white")
      .selectAll()
      .data(arcs)
      .join("path")
      .attr("fill", d => color(d.data.name))
      .attr("d", arc)
      .append("title")
      .text(d => `${d.data.name}: ${d.data.value.toLocaleString("en-US")}`);

    // Create a new arc generator to place a label close to the edge.
    // The label shows the value if there is enough room.
    svg.append("g")
      .attr("text-anchor", "middle")
      .selectAll()
      .data(arcs)
      .join("text")
      .attr("transform", d => `translate(${arcLabel.centroid(d)})`)
      .call(text => text.append("tspan")
        .attr("y", "-0.4em")
        .attr("font-weight", "bold")
        .text(d => d.data.name))
      .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
        .attr("x", 0)
        .attr("y", "0.7em")
        .attr("fill-opacity", 0.7)
        .text(d => d.data.value.toLocaleString("en-US")));
      
    return svg.node();
  }

  return (
    <div id="mood-chart"></div>
  )
}
export default MoodChart