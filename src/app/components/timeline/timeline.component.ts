import { Component, ViewEncapsulation, OnInit, AfterViewInit } from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import * as d3TimeFormat from 'd3-time-format';
import * as d3Timelines from 'd3-timelines';
import { ViewChild } from '@angular/core';


@Component({
    selector: 'app-timeline',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements AfterViewInit {

    title = 'Time Line';
    
    ngAfterViewInit() {    
       this.timelineCircle();
    }
    
    
      timelineCircle() {
        let width = 500; 
        var testData = [
            {class: "pA", name: "person a", times: [
              {"starting_time": 1355752800000, "ending_time": 1355759900000},
              {"starting_time": 1355767900000, "ending_time": 1355774400000}]},
            {class: "pB", name: "person b", times: [
                {"starting_time": 1355759910000, "ending_time": 1355761900000}]},
            {class: "pC", name: "person c", times: [
                {"starting_time": 1355761910000, "ending_time": 1355763910000}]},
            {class: "pD", name: "person d", times: [
              {"starting_time": 1355761910000, "ending_time": 1355773300000}]}
        ];

        var tooltip = d3.select("body")
                      .append("div")

                      
                      
                      
                      
                      
                      
                      .style("position", "absolute")
                      .style("z-index", "10")
                      .style("background-color", "#e3e3e3")
                      .style("padding", "10px")
                      .style("visibility", "hidden");

          var chart = d3Timelines.timelines().stack().background('#d3d3d3');

          var svg = d3.select("#timeline1").append("svg").attr("width", width)
                    .datum(testData).call(chart);

          chart.hover((d, i, datum) => {
            // d is the current rendering object
            // i is the index during d3 rendering
            // datum is the data object
            console.log(d);
            console.log(i);
            console.log(datum);

            tooltip.text(datum.name);

          });

          svg.on("mouseover", function(){return tooltip.style("visibility", "visible");})
          svg.on("mousemove", function(){return tooltip.style("top",(d3.event.pageY-15)+"px").style("left",(d3.event.pageX+15)+"px");})
          svg.on("mouseout", function(){return tooltip.style("visibility", "hidden");});

      }

}