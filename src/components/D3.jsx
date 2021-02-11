import React, { useState, useRef, useEffect } from "react";
import { select } from "d3";
import "../styles/_d3.scss";


function D3() {
    const [data, setData] = useState([25, 30, 45, 60, 20])
    const svgRef = useRef();

    useEffect(() => {
        const svg = select(svgRef.current);
        svg
        .selectAll("circle")
        .data(data)
        .join("circle")
        .attr("r", value => value)
        .attr("cx", value => value * 2)
        .attr("cy", value => value * 2)
        .attr("stroke", "red");
    }, [data]);

    return (
    <svg ref={svgRef}>
        <circle />
    </svg>
        
    );
}

export default D3;
