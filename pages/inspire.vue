<template>
  <v-row>
    <v-col class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <v-card width="100%" class="mb-4">
        <v-card-text
          :style="{
            height: elementHeight + 'px'
          }"
          class="pt-5"
        >
          <v-chart
            v-resize="onChartResize"
            ref="chart"
            :theme="this.$vuetify.theme.dark ? 'dark' : 'light'"
            autoresize
            :option="chartOptions"
            @dataZoom="eventChartZoom"
          />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart } from 'echarts/charts';

import {
  AxisPointerComponent,
  CalendarComponent,
  DatasetComponent,
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  MarkAreaComponent,
  TimelineComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent
} from 'echarts/components';

import ECharts from 'vue-echarts';

// import * as echarts from 'echarts/core';
use([
  CanvasRenderer,
  LineChart,
  AxisPointerComponent,
  CalendarComponent,
  DatasetComponent,
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  MarkAreaComponent,
  TimelineComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent
]);

export default {
  components: {
    'v-chart': ECharts
  },
  data() {
    return {
      data: {
        chart: [
          [
            '2012-01-15 14:03',
            74.5817,
            22.0422,
            0.4358,
            null,
            1.713,
            0.6648,
            0.1592,
            0.2093,
            0.0697,
            0.0526,
            0.0407,
            0.0221,
            0.0089,
            null
          ],
          [
            '2012-01-17 13:29',
            16.2196,
            76.9528,
            0.7895,
            null,
            3.757,
            1.3032,
            0.3218,
            0.4109,
            0.1214,
            0.0789,
            0.0331,
            0.0075,
            0.0043,
            null
          ],
          [
            '2012-01-18 14:07',
            7.9198,
            81.536,
            0.7322,
            null,
            5.2264,
            2.54,
            0.5129,
            0.7362,
            0.2433,
            0.1904,
            0.167,
            0.1287,
            0.0613,
            0.0058
          ],
          [
            '2012-01-25 16:46',
            16.083,
            74.273,
            1.1121,
            null,
            4.8753,
            2.1049,
            0.4685,
            0.5693,
            0.1871,
            0.1357,
            0.1062,
            0.0627,
            0.0222,
            null
          ],
          [
            '2012-04-26 19:30',
            0.7221,
            87.0367,
            1.7826,
            null,
            5.8911,
            2.6076,
            0.559,
            0.6687,
            0.2373,
            0.1757,
            0.1518,
            0.1079,
            0.0549,
            0.0046
          ],
          [
            '2013-04-10 20:26',
            0.4025,
            86.9189,
            1.9587,
            null,
            5.9687,
            2.6289,
            0.5692,
            0.6868,
            0.2547,
            0.1921,
            0.1851,
            0.1476,
            0.0803,
            0.0065
          ],
          [
            '2014-04-02 21:03',
            0.2725,
            86.312,
            2.4146,
            null,
            6.1341,
            2.6508,
            0.6021,
            0.6764,
            0.2518,
            0.1896,
            0.2058,
            0.1808,
            0.0864,
            0.0231
          ],
          [
            '2015-03-12 20:27',
            0.2936,
            86.6887,
            2.2766,
            null,
            6.1002,
            2.6643,
            0.5782,
            0.6736,
            0.2474,
            0.1814,
            0.1483,
            0.1009,
            0.0468,
            null
          ],
          [
            '2016-03-15 15:18',
            0.2822,
            87.5528,
            1.6532,
            null,
            6.1673,
            2.5562,
            0.5326,
            0.655,
            0.2245,
            0.1664,
            0.1225,
            0.0669,
            0.0191,
            0.0013
          ],
          [
            '2017-04-12 17:58',
            0.2373,
            86.1541,
            2.6471,
            null,
            6.1754,
            2.7047,
            0.5851,
            0.6617,
            0.2431,
            0.1816,
            0.1734,
            0.1403,
            0.0842,
            0.012
          ],
          [
            '2018-06-23 19:26',
            0.2091,
            86.8789,
            2.1336,
            null,
            5.9723,
            2.6266,
            0.585,
            0.6781,
            0.26,
            0.1955,
            0.1916,
            0.1575,
            0.0873,
            0.0245
          ],
          [
            '2019-07-22 18:36',
            0.2087,
            86.0383,
            2.6488,
            null,
            6.283,
            2.6799,
            0.6046,
            0.6649,
            0.2571,
            0.1916,
            0.1862,
            0.1481,
            0.0783,
            0.0105
          ],
          [
            '2020-07-20 15:15',
            0.2128,
            86.2629,
            2.617,
            null,
            6.062,
            2.6604,
            0.6,
            0.6721,
            0.261,
            0.1925,
            0.1927,
            0.1591,
            0.0922,
            0.0153
          ]
        ],
        table: [
          {
            actual_btu: 291.1529,
            carbon_dioxide: 0.4358,
            compressibility: 0.9993,
            flow_temp: 21,
            hydrogen_sulfide_ppm: null,
            methane: 22.0422,
            nitrogen: 74.5817,
            real_specific_gravit: 0.891,
            timestamp: '2012-01-15 14:03'
          },
          {
            actual_btu: 914.576,
            carbon_dioxide: 0.7895,
            compressibility: 0.998,
            flow_temp: 74,
            hydrogen_sulfide_ppm: null,
            methane: 76.9528,
            nitrogen: 16.2196,
            real_specific_gravit: 0.6761,
            timestamp: '2012-01-17 13:29'
          },
          {
            actual_btu: 1062.4238,
            carbon_dioxide: 0.7322,
            compressibility: 0.9974,
            flow_temp: 91,
            hydrogen_sulfide_ppm: null,
            methane: 81.536,
            nitrogen: 7.9198,
            real_specific_gravit: 0.6817,
            timestamp: '2012-01-18 14:07'
          },
          {
            actual_btu: 950.3125,
            carbon_dioxide: 1.1121,
            compressibility: 0.9978,
            flow_temp: 84,
            hydrogen_sulfide_ppm: null,
            methane: 74.273,
            nitrogen: 16.083,
            real_specific_gravit: 0.7029,
            timestamp: '2012-01-25 16:46'
          },
          {
            actual_btu: 1128.171,
            carbon_dioxide: 1.7826,
            compressibility: 0.9972,
            flow_temp: 80,
            hydrogen_sulfide_ppm: null,
            methane: 87.0367,
            nitrogen: 0.7221,
            real_specific_gravit: 0.6642,
            timestamp: '2012-04-26 19:30'
          },
          {
            actual_btu: 1136.7735,
            carbon_dioxide: 1.9587,
            compressibility: 0.9971,
            flow_temp: 88,
            hydrogen_sulfide_ppm: null,
            methane: 86.9189,
            nitrogen: 0.4025,
            real_specific_gravit: 0.6692,
            timestamp: '2013-04-10 20:26'
          },
          {
            actual_btu: 1139.0693,
            carbon_dioxide: 2.4146,
            compressibility: 0.997,
            flow_temp: 68,
            hydrogen_sulfide_ppm: null,
            methane: 86.312,
            nitrogen: 0.2725,
            real_specific_gravit: 0.6766,
            timestamp: '2014-04-02 21:03'
          },
          {
            actual_btu: 1129.8764,
            carbon_dioxide: 2.2766,
            compressibility: 0.9971,
            flow_temp: 76,
            hydrogen_sulfide_ppm: null,
            methane: 86.6887,
            nitrogen: 0.2936,
            real_specific_gravit: 0.6687,
            timestamp: '2015-03-12 20:27'
          },
          {
            actual_btu: 1128.6386,
            carbon_dioxide: 1.6532,
            compressibility: 0.9972,
            flow_temp: 80,
            hydrogen_sulfide_ppm: null,
            methane: 87.5528,
            nitrogen: 0.2822,
            real_specific_gravit: 0.6577,
            timestamp: '2016-03-15 15:18'
          },
          {
            actual_btu: 1133.1216,
            carbon_dioxide: 2.6471,
            compressibility: 0.9971,
            flow_temp: 82,
            hydrogen_sulfide_ppm: null,
            methane: 86.1541,
            nitrogen: 0.2373,
            real_specific_gravit: 0.6762,
            timestamp: '2017-04-12 17:58'
          },
          {
            actual_btu: 1139.554,
            carbon_dioxide: 2.1336,
            compressibility: 0.9971,
            flow_temp: 70,
            hydrogen_sulfide_ppm: null,
            methane: 86.8789,
            nitrogen: 0.2091,
            real_specific_gravit: 0.6717,
            timestamp: '2018-06-23 19:26'
          },
          {
            actual_btu: 1135.5255,
            carbon_dioxide: 2.6488,
            compressibility: 0.997,
            flow_temp: 74,
            hydrogen_sulfide_ppm: null,
            methane: 86.0383,
            nitrogen: 0.2087,
            real_specific_gravit: 0.6775,
            timestamp: '2019-07-22 18:36'
          },
          {
            actual_btu: 1135.791,
            carbon_dioxide: 2.617,
            compressibility: 0.997,
            flow_temp: 83,
            hydrogen_sulfide_ppm: null,
            methane: 86.2629,
            nitrogen: 0.2128,
            real_specific_gravit: 0.6772,
            timestamp: '2020-07-20 15:15'
          }
        ]
      },
      elementHeight: 600
    };
  },
  computed: {
    chartOptions() {
      return {
        axisPointer: {
          link: { xAxisIndex: 'all' }
        },
        backgroundColor: 'transparent',
        dataZoom: [
          {
            end: 100,
            endValue: null,
            rangeMode: ['value', 'percent'],
            realtime: true,
            type: 'slider',
            show: true,
            start: 0,
            startValue: null,
            xAxisIndex: 0
          },
          {
            end: 100,
            endValue: null,
            rangeMode: ['value', 'percent'],
            realtime: true,
            type: 'slider',
            show: true,
            start: 0,
            startValue: null,
            type: 'slider',
            yAxisIndex: 0
          }
        ],
        dataset: {
          dimensions: [
            { name: 'timestamp' },
            { name: 'nitrogen' },
            { name: 'methane' },
            { name: 'carbon_dioxide' },
            { name: 'hydrogen_sulfide' },
            { name: 'ethane' },
            { name: 'propane' },
            { name: 'i_butane' },
            { name: 'n_butane' },
            { name: 'i_pentane' },
            { name: 'n_pentane' },
            { name: 'hexanes' },
            { name: 'heptanes' },
            { name: 'octanes' },
            { name: 'nonanes' }
          ],
          // source: []
          source: this.data.chart
        },
        getOption: {},
        grid: [
          {
            bottom: 80,
            left: 160,
            right: 50,
            top: '80'
          }
        ],
        legend: {
          data: [
            // 'timestamp',
            'nitrogen',
            'methane',
            'carbon_dioxide',
            'hydrogen_sulfide',
            'ethane',
            'propane',
            'i_butane',
            'n_butane',
            'i_pentane',
            'n_pentane',
            'hexanes',
            'heptanes',
            'octanes',
            'nonanes'
          ],
          left: 10,
          orient: 'vertical',
          top: 'middle'
        },
        series: [
          {
            areaStyle: {},
            color: '#9E9E9E',
            encode: { x: 'timestamp', y: 'methane' },
            name: 'methane',
            // symbol: "none",
            type: 'line'
          },
          {
            areaStyle: {},
            color: '#E91E63',
            encode: { x: 'timestamp', y: 'nitrogen' },
            name: 'nitrogen',
            // symbol: "none",
            type: 'line'
          },
          {
            areaStyle: {},
            color: '#FF9800',
            encode: { x: 'timestamp', y: 'carbon_dioxide' },
            name: 'carbon_dioxide',
            // symbol: "none",
            type: 'line'
          },
          {
            areaStyle: {},
            color: '#4CAF50',
            encode: { x: 'timestamp', y: 'hydrogen_sulfide' },
            name: 'hydrogen_sulfide',
            // symbol: "none",
            type: 'line'
          },
          {
            areaStyle: {},
            color: '#F44336',
            encode: { x: 'timestamp', y: 'ethane' },
            name: 'ethane',
            // symbol: "none",
            type: 'line'
          },
          {
            areaStyle: {},
            color: '#673AB7',
            encode: { x: 'timestamp', y: 'propane' },
            name: 'propane',
            // symbol: "none",
            type: 'line'
          },
          {
            areaStyle: {},
            color: '#FFEE58',
            encode: { x: 'timestamp', y: 'i_butane' },
            name: 'i_butane',
            // symbol: "none",
            type: 'line'
          },
          {
            areaStyle: {},
            color: '#2196F3',
            encode: { x: 'timestamp', y: 'n_butane' },
            name: 'n_butane',
            // symbol: "none",
            type: 'line'
          },
          {
            areaStyle: {},
            color: '#009688',
            encode: { x: 'timestamp', y: 'i_pentane' },
            name: 'i_pentane',
            // symbol: "none",
            type: 'line'
          },
          {
            areaStyle: {},
            color: '#9C27B0',
            encode: { x: 'timestamp', y: 'n_pentane' },
            name: 'n_pentane',
            // symbol: "none",
            type: 'line'
          },
          {
            areaStyle: {},
            color: '#CDDC39',
            encode: { x: 'timestamp', y: 'hexanes' },
            name: 'hexanes',
            // symbol: "none",
            type: 'line'
          },
          {
            areaStyle: {},
            color: '#00BCD4',
            encode: { x: 'timestamp', y: 'heptanes' },
            name: 'heptanes',
            // symbol: "none",
            type: 'line'
          },
          {
            areaStyle: {},
            color: '#795548',
            encode: { x: 'timestamp', y: 'octanes' },
            name: 'octanes',
            // symbol: "none",
            type: 'line'
          },
          {
            areaStyle: {},
            color: '#546E7A',
            encode: { x: 'timestamp', y: 'nonanes' },
            name: 'nonanes',
            // symbol: "none",
            type: 'line'
          }
        ],
        title: {
          left: 'center',
          show: true,
          subtext: 'SubTitle',
          text: 'Gas Composition'
        },
        toolbox: [
          {
            feature: {
              dataZoom: {
                title: {
                  back: 'restore area zoom',
                  zoom: 'area zoom'
                },
                yAxisIndex: 'none'
              },
              restore: {
                title: 'reset'
              },
              saveAsImage: {
                backgroundColor: 'gray',
                excludeComponents: ['toolbox', 'dataZoom'],
                title: 'save as image'
              }
            }
            // show: true
          }
        ],
        tooltip: {
          axisPointer: {
            animation: false
          },
          trigger: 'axis'
        },
        xAxis: [
          {
            // type: "category",
            type: 'time'
          }
        ],
        yAxis: [
          {
            splitNumber: 5,
            type: 'value'
          }
        ]
      };
    }
  },
  mounted() {
    this.init();
    this.onChartResize();
  },
  watch: {},
  methods: {
    init() {
      let x = 0;
      for (x in this.data.chart) {
        this.data.chart[x][0] = new Date(this.data.chart[x][0]);
      }
      this.chartOptions.dataset.source = this.data.chart;
    },
    eventChartZoom() {
      const data = this.$refs.chart;
      const startDate = data.getOption().dataZoom[0].startValue;
      const endDate = data.getOption().dataZoom[0].endValue;
      console.log(startDate, endDate);
    },
    onChartResize() {
      this.elementHeight = (window.outerHeight * 0.6).toFixed(0);
    }
  }
};
</script>

<style scoped>
.echarts {
  height: 100%;
  width: 100%;
}
</style>
