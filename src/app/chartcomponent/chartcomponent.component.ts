import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import type { EChartsOption, SeriesOption } from 'echarts';
import { NgxEchartsDirective,provideEcharts } from 'ngx-echarts';
import { graphic } from 'echarts';


@Component({
  selector: 'app-chartcomponent',
  standalone: true,
  imports: [NgxEchartsDirective],
  changeDetection: ChangeDetectionStrategy.Default,
  providers:[
    provideEcharts(),
  ],
  template: `
    @defer () {

<div echarts [options]="options" class="demo-chart"></div>
}
  `,
  styleUrl: './chartcomponent.component.css'
})
export class ChartcomponentComponent implements AfterViewInit{



  
  selectedColumnIndex: number | null = null;  // Initialize here

  options : EChartsOption = {};
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}


  ngAfterViewInit(): void {  
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
    this.options = this.generateSpecificData()
  })
};
    
  
};

    
generateSpecificData(): EChartsOption {
  const data = [
    { name: "Jan", value: 6000 },
    { name: "Feb", value: 15000 },
    { name: "Mar", value: 3000 },
    { name: "Apr", value: 28000 },
    { name: "May", value: 9000 },
    { name: "Jun", value: 42000 },
    { name: "Jul", value: 9000 },
    { name: "Aug", value: 23000 },
    { name: "Sep", value: 33000 },
    { name: "Oct", value: 8000 },
    { name: "Nov", value: 30000 },
    { name: "Dec", value: 25000 },
  ];

  const xAxisData = data.map(item => item.name);
  const dataValues = data.map(item => item.value);

  const series: SeriesOption[] = [
    {
      name: 'Sales',
      type: 'bar',
      barWidth: '50%',
      data: dataValues,
      itemStyle: {
        color: (params: any) => {
          const colorStops = [
            { offset: 0, color: 'rgba(52, 203, 165, 0.8)' },
            { offset: 1, color: 'rgba(52, 203, 165, 0.2)' },
          ];
          return new graphic.LinearGradient(0, 0, 0, 1, colorStops);
        },
        borderRadius: [100,100,0,0],
      
      },
      emphasis: {
        itemStyle: {
          color: (params: any) => {
            const colorStops = [
              { offset: 0, color: 'rgba(52, 203, 165, 1)' },
              { offset: 1, color: 'rgba(52, 203, 165, 0.2)' },
            ];
            return new graphic.LinearGradient(0, 0, 0, 1, colorStops);
          },
        }
      },
    }
  ];

  return {
    animation:true,
    legend: {
      show: false,
      right: 70,
      bottom: 70,
      orient: 'vertical',
      align: 'right'
    },
    color: ['#3398DB'],
    tooltip: {
      
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        label: {
          show: true,
          precision: 'auto',
        },
      },
    },
    toolbox: {
      show: true,
      itemSize: 30,
      feature: {
        saveAsImage: {
          title: 'Save As Image',
          pixelRatio: 2,
        },
        
        
      },

    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: xAxisData,
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: series,
  };
}

}
