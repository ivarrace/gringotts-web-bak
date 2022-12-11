import { Component, ViewChild, Input, OnInit } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexStroke,
  ApexDataLabels
} from 'ng-apexcharts';
import { Accountancy } from 'src/app/data/types/accountancy';
import { AnnualSummary } from 'src/app/data/types/annualSummary';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  title: ApexTitleSubtitle;
  labels: string[];
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-accountancy-chart',
  templateUrl: './accountancy-chart.component.html',
  styleUrls: ['./accountancy-chart.component.css']
})
export class AccountancyChartComponent implements OnInit {
  @Input()
  annualSummary!: AnnualSummary;
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<any>;

  constructor() {
    this.chartOptions = {
      series: [],
      labels: [],
      chart: {
        height: 350,
        type: 'line',
        stacked: true
      },
      stroke: {
        width: [0, 0]
      },
      title: {
        text: 'Accountancy summary'
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [2],
        labels: {
          formatter: function (value: number) {
            return value + ' €';
          }
        }
      },
      yaxis: {
        labels: {
          formatter: function (value: number) {
            return value + ' €';
          }
        }
      }
    };
  }

  ngOnInit(): void {
    this.chartOptions['labels'] = this.annualSummary.monthly.map(
      (monthSummary) => monthSummary.month
    );
    this.chartOptions['series'] = [
      {
        name: 'Incomes',
        type: 'column',
        data: this.annualSummary.monthly.map(
          (monthSummary) => monthSummary.incomes
        )
        //data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
      },
      {
        name: 'Expenses',
        type: 'column',
        data: this.annualSummary.monthly.map(
          (monthSummary) => monthSummary.expenses * -1
        )
        /*data: [
          -440, -505, -414, -671, -227, -413, -201, -352, -752, -320, -257, -160
        ]*/
      },
      {
        name: 'Total',
        type: 'line',
        data: this.annualSummary.monthly.map(
          (monthSummary) => monthSummary.total
        )
        //data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
      }
    ];
  }
}
