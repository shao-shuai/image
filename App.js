import "./App.css";
import * as d3 from "d3";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    // this.dataset = [
    //   25, 7, 5, 26, 11, 8, 25, 14, 23, 19, 14, 11, 22, 29, 11, 13, 12, 17, 18,
    //   10, 24, 18, 25, 9, 3,
    // ];
    //generate an array of random numbers
    this.dataset = [];
    for (var i = 0; i < 25; i++) {
      var newNumber = Math.random() * 30;
      this.dataset.push(newNumber);
    }
  }
  componentDidMount() {
    let svg = d3
      .select(this.myRef.current)
      .selectAll("div")
      .data(this.dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("height", function (d) {
        return d * 10 + "px";
      });
    // let svg = d3
    //   .select(this.myRef.current)
    //   .selectAll("p")
    //   .data(this.dataset)
    //   .enter()
    //   .append("p")
    //   .text(function (d) {
    //     return "I can count up to " + d;
    //   })
    //   .style("color", function (d) {
    //     if (d > 250) {
    //       return "black";
    //     } else {
    //       return "teal";
    //     }
    //   });

    // let size = 500;
    // let svg = d3
    //   .select(this.myRef.current)
    //   .append("svg")
    //   .attr("width", size)
    //   .attr("height", size)
    //   .attr("align", "center");

    // let rect_width = 95;
    // svg
    //   .selectAll("rect")
    //   .data(this.dataset)
    //   .enter()
    //   .append("rect")
    //   .attr("x", (d, i) => 5 + i * (rect_width + 5))
    //   .attr("y", (d) => size - d)
    //   .attr("width", rect_width)
    //   .attr("height", (d) => d)
    //   .attr("fill", "teal");
  }

  render() {
    return <div ref={this.myRef}></div>;
  }
}
export default App;
