"use client";
import React from "react"
import { useEffect, useRef } from "react";
import { CircularProgress } from "./styles/css-utility.styled";
import * as d3 from "d3";
import { percentToDeg, percentToRad, radToDeg } from "@/utility/utils";


export function CircleChart(){
    const svgRef:any = useRef(null);

    const score = 60;

    
   
    useEffect(()=>{
        const svgElement= d3.select(svgRef.current);
      
        const dimensions= svgRef.current.getBoundingClientRect();
        const {width, height} = dimensions;

        const group = svgElement.append("g")
                      .attr("transform", `translate(${width/2} ${height/2})`);

        const outerradius = 100;
        const innerradius = 90;

        const arcOne:any = d3.arc()
            .innerRadius(innerradius)
            .outerRadius(outerradius)
            .startAngle(-Math.PI * 3/4)
            .endAngle(Math.PI * 3/4)
            .cornerRadius(4)

        const arcTwo:any = d3.arc()
            .innerRadius(innerradius)
            .outerRadius(outerradius)
            .startAngle(-Math.PI * 3/4)
            .endAngle(percentToRad(score))
            .cornerRadius(4)

        console.log(percentToRad(score));

        group.append('path')
            .attr('d', arcOne)
            .attr('class', "fill-accent-blue")

        
        group.append('path')
            .attr('d', arcTwo)
            .attr('class', "fill-primary-blue")

        const lineAxis = d3.scaleLinear()
            .range([0, 270])
            .domain([0, 50])

        
        const space = 5;
        const lineAxisStart = innerradius - space;
        const lineAxisLength = -5;

        const tickGroup = group.append('g')
            .attr('transform', `rotate(45)`)


        tickGroup.selectAll(".second-tick")
            .data(d3.range(0, 50))
            .enter()
            .append("line")
            .attr("stroke", "rgb(var(--clr-accent-gray))")
            .attr("stroke-width", 1)
            .attr("x1", 0)
            .attr("x2", 0)
            .attr("y1", lineAxisStart)
            .attr("y2", lineAxisStart + lineAxisLength)
            .attr("transform", d => `rotate(${lineAxis(d)})`);

        const circleradius = 10
        const strokewidth = 5
        const min = radToDeg(-(Math.PI * 3/4));
        const max = radToDeg(2 * (Math.PI * 3/4));
      

        const needleGroup = group.append('g')
            .style('position', 'relative')
            .attr('transform', `translate(0, ${outerradius - (2*circleradius+strokewidth) - (outerradius - innerradius) - 20}) rotate(${percentToDeg(score, [min, max]) - 23})`)
           

        const needleBase = needleGroup.append('circle')
            .attr('cx', 0)
            .attr('cy', 0)
            .attr('r', circleradius)
            .attr('fill', 'white')
            .attr('stroke-width', strokewidth)
            .attr('stroke', 'rgb(var(--clr-accent-blue))')
           
           
        const needleWidth = 80;
        const needlestrokewidth = 8;

        needleGroup.append('line')
            .attr("x1", 0)
            .attr('y1', -(circleradius))
            .attr('x2', 0)
            .attr('y2', -needleWidth)
            .attr('stroke', 'rgb(var(--clr-accent-blue))')
            .attr('stroke-width', needlestrokewidth)
            .attr('stroke-linecap', 'round')
        
        needleBase.raise()
      
    }, [])

    return (
        <CircularProgress>
            <svg className="svg" ref={svgRef}>
                <path d="M3,3 h0" stroke="black" />
            </svg>

            {/* <svg >
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="100%">
                    <stop offset="0%" stopColor="#56c4fb" />
                    <stop offset="100%" stopColor="#0baeff" />
                </linearGradient>
                <path className="grey" d="M30,90 A40,40 0 1,1 80,90" fill='none' />
                <path id="blue" fill='none'  className="blue" d="M30,90 A40,40 0 1,1 80,90" />
    
                <text x="50%" y="70%" dominantBaseline="middle" textAnchor="middle" style={{fontSize:"18px"}}>1/2</text>

            </svg> */}
            
        </CircularProgress>
    )
}