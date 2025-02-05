import * as d3 from 'd3';

export default function BarChart() {
    return (
        <div id="barChart" className="w-3/5 h-3/5 bg-white p-4 rounded shadow-lg">
            <svg
                ref={(node: SVGSVGElement) => {
                    if (node) {
                        const data: number[] = [30, 45, 60, 35]; // Reduced to 4 values
                        const labels = ['Python', 'JavaScript', 'TypeScript', 'Java']; // Labels for bars

                        // Get current dimensions
                        const svgElement = d3.select(node);
                        const width = svgElement.node()?.parentElement?.clientWidth || 400;
                        const height = svgElement.node()?.parentElement?.clientHeight || 250;
                        const margin = { top: 20, right: 20, bottom: 40, left: 20 }; // Increased bottom margin
                        const chartWidth = width - margin.left - margin.right;
                        const chartHeight = height - margin.top - margin.bottom;

                        // Clear any existing elements
                        svgElement.selectAll("*").remove();

                        // Remove any existing tooltips first
                        d3.select("#barChart").selectAll(".tooltip").remove();

                        // Create tooltip div
                        const tooltip = d3.select("#barChart")
                            .append("div")
                            .attr("class", "tooltip absolute hidden bg-black text-white p-2 rounded")
                            .style("pointer-events", "none");

                        // Create scales
                        const xScale = d3.scaleBand()
                            .domain(data.map((_, i) => i.toString()))
                            .range([0, chartWidth])
                            .padding(0.2);

                        const yScale = d3.scaleLinear()
                            .domain([0, d3.max(data) || 0])
                            .range([chartHeight, 0]);

                        // Add scroll handler to hide tooltip
                        const container = document.querySelector('.overflow-auto');
                        if (container) {
                            container.addEventListener('scroll', () => {
                                tooltip.classed("hidden", true);
                            });
                        }

                        // Create bars with initial 80% height
                        const bars = svgElement
                            .selectAll("rect")
                            .data(data)
                            .join("rect")
                            .attr("x", (_: unknown, i: number) => xScale(i.toString()) || 0)
                            .attr("y", (d: number) => yScale(d) + (chartHeight - yScale(d)) * 0.2)
                            .attr("width", xScale.bandwidth())
                            .attr("height", (d: number) => (chartHeight - yScale(d)) * 0.8)
                            .attr("fill", "#16a34a")
                            .on("mouseover", (event: MouseEvent, d: number) => {
                                // Animate to full height on hover
                                d3.select(event.currentTarget as Element)
                                    .transition()
                                    .duration(300)
                                    .attr("y", yScale(d))
                                    .attr("height", chartHeight - yScale(d))
                                    .attr("fill", "#15803d");
                                tooltip.classed("hidden", false);
                            })
                            .on("mousemove", (event: MouseEvent, d: number) => {
                                tooltip
                                    .style("left", (event.pageX + 10) + "px")
                                    .style("top", (event.pageY - 10) + "px")
                                    .html(`Value: ${d}`);
                            })
                            .on("mouseout", (event: MouseEvent, d: number) => {
                                d3.select(event.currentTarget as Element)
                                    .transition()
                                    .duration(300)
                                    .attr("y", yScale(d) + (chartHeight - yScale(d)) * 0.2)
                                    .attr("height", (chartHeight - yScale(d)) * 0.8)
                                    .attr("fill", "#16a34a");
                                tooltip.classed("hidden", true);
                            });

                        // Add labels under bars
                        svgElement
                            .selectAll("text")
                            .data(labels)
                            .join("text")
                            .text((d: string) => d)
                            .attr("x", (_: unknown, i: number) => (xScale(i.toString()) || 0) + xScale.bandwidth() / 2)
                            .attr("y", chartHeight + 20)
                            .attr("text-anchor", "middle")
                            .attr("fill", "black")
                            .attr("font-size", "12px");

                        // Add resize handler
                        const handleResize = () => {
                            const newWidth = svgElement.node()?.parentElement?.clientWidth || width;
                            const newHeight = svgElement.node()?.parentElement?.clientHeight || height;

                            svgElement
                                .attr("width", newWidth)
                                .attr("height", newHeight);

                            // Update scales
                            xScale.range([0, newWidth - margin.left - margin.right]);
                            yScale.range([newHeight - margin.top - margin.bottom, 0]);

                            // Update bars
                            bars
                                .attr("x", (_: unknown, i: number) => xScale(i.toString()) || 0)
                                .attr("y", (d: number) => yScale(d) + (newHeight - margin.top - margin.bottom - yScale(d)) * 0.2)
                                .attr("width", xScale.bandwidth())
                                .attr("height", (d: number) => (newHeight - margin.top - margin.bottom - yScale(d)) * 0.8);

                            // Update labels
                            svgElement
                                .selectAll("text")
                                .attr("x", (_, i) => (xScale(i.toString()) || 0) + xScale.bandwidth() / 2)
                                .attr("y", newHeight - margin.top - margin.bottom + 20);
                        };

                        window.addEventListener("resize", handleResize);
                    }
                }}
                className="w-full h-full"
            ></svg>
        </div>
    )
}