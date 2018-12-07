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
          {times: [{"starting_time": 1355752800000, "ending_time": 1355759900000}, {"starting_time": 1355767900000, "ending_time": 1355774400000}]},
          {times: [{"starting_time": 1355759910000, "ending_time": 1355761900000}, ]},
          {times: [{"starting_time": 1355761910000, "ending_time": 1355763910000}]}
     ];
          var chart = d3Timelines.timelines().stack().background('lightgrey');

          var svg = d3.select("#timeline1").append("svg").attr("width", width)
                    .datum(testData).call(chart);
      }

}