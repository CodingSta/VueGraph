<template>
  <div id="line" style="width: 100%;height:400px;"></div>
</template>

<script>
import * as echarts from "echarts";
// import axios from "axios";

export default {
  data() {
    return {
      chart: undefined,
      xAxisData: [],
      yAxisTempData: [],
      yAxisHumiData: [],
    };
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  async created() {
    // 데이터 받아오는 로직 적는 곳
    // 필요한 데이터: 시간(x축), 온도(y축), 습도(y축)
    // const { data } = await axios.post("url", {});
    this.xAxisData = [
      "14:00",
      "14:01",
      "14:02",
      "14:03",
      "14:04",
      "14:05",
      "14:06",
      "14:07",
      "14:08",
      "14:09",
      "14:10",
      "14:11",
    ];
    this.yAxisTempData = [
      24.5,
      26.4,
      25.8,
      23.2,
      24.3,
      25.4,
      21.6,
      22.7,
      26.8,
      27.5,
      28.4,
      29.2,
    ];
    this.yAxisHumiData = [
      52.6,
      52.9,
      52.0,
      54.4,
      53.7,
      51.7,
      55.6,
      54.2,
      52.7,
      57.8,
      54.0,
      55.3,
    ];
  },
  mounted() {
    this.chart = echarts.init(document.getElementById("line"));

    const option = {
      xAxis: [
        // Note: x축
        {
          type: "category",
          data: this.xAxisData,
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        // Note: y축

        // temp
        {
          name: "temp",
          type: "line",
          data: this.yAxisTempData,
        },

        // humi
        {
          name: "humi",
          type: "line",
          data: this.yAxisHumiData,
        },
      ],
    };

    this.chart.setOption(option);
  },
};
</script>
