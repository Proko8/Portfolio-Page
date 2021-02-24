import React, { useState, useRef, useEffect } from "react";
import { axisBottom, select, scaleLinear, axisRight, scaleBand } from "d3";
import "../styles/_d3.scss";


function D3() {
    const [data, setData] = useState([20, 16, 10, 5, 8, 12])
    const svgRef = useRef();
    const [languages, setLanguages ] = useState(["Javascript", "Python", "Java", "C#", "PHP", "Other"])
console.log(data)

    const graphIncrease = (data, index) => {
        let newData = data;
        newData[index] = newData[index] + 1
        setData(newData)
    }
    
    useEffect(() => {
        const svg = select(svgRef.current).attr("width", "500").attr("height", "200"); //creates svg for the graph
        const xScale = scaleBand()
        .domain(languages.map((value, index) => languages[index]))
        .range([0, 475])  
        .padding(0.5)
        
        const yScale = scaleLinear()
        .domain([0, 36])
        .range([180, 0]);

        const colorScale = scaleLinear()
        .domain([20, 5])
        .range(["green", "yellow"])
        .clamp(true);

        const xAxis = axisBottom(xScale).ticks(languages)
        svg.select(".x-axis").style("transform", "translateY(180px)").call(xAxis)

        const yAxis = axisRight(yScale)
        svg.select(".y-axis").style("transform", "translateX(475px)").call(yAxis)

        svg
        .selectAll(".bar")
        .data(data)
        .join("rect")
        .attr("class", "bar")
        .style("transform", "scale(1, -1)")
        .style("color", "green")
        .attr("x", (value, index) => xScale(languages[index]))
        .attr("y", -180)
        .attr("width", xScale.bandwidth())
        .on("mouseenter", (event, value) => {
            const index = svg.selectAll(".bar").nodes().indexOf(event.target);
            svg
              .selectAll(".tooltip")
              .data([value])
              .join((enter) => enter.append("text").attr("y", yScale(value) - 4))
              .attr("class", "tooltip")
              .text(value)
              .attr("x", xScale(languages[index]) + xScale.bandwidth() / 2)
              .attr("text-anchor", "middle")
              .transition()
              .attr("y", yScale(value) - 8)
              .attr("opacity", 1);
          })
        .on("mouseleave", () => svg.select(".tooltip").remove())
        .transition()
        .attr("fill", colorScale)
        .attr("height", value => 180 - yScale(value))
    }, [data]);

    return (
        <React.Fragment>
            <div className="d3">
                <div className="d3__flexContainer">
                    <p className="d3__text">What is Your Favorite Programming Language?</p>
                    <svg className="d3__svg" ref={svgRef}>
                        <g className="x-axis" />
                        <g className="y-axis" />
                    </svg>
                    <br /><br /><br />
                    <div className="d3__button_flexContainer">
                        <button className="d3__button" onClick={() => graphIncrease(data, 0) }>Javascript</button>
                        <button className="d3__button" onClick={() => setData(data.map(value => value < 35))}>Python</button>
                        <button className="d3__button" onClick={() => setData(data.map(value => value + 5))}>Java</button>
                        <button className="d3__button" onClick={() => setData(data.map(value => value < 35))}>C#</button>
                        <button className="d3__button" onClick={() => setData(data.map(value => value + 5))}>PHP</button>
                        <button className="d3__button" onClick={() => setData(data.map(value => value < 35))}>Other</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default D3;
