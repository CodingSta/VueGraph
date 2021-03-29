<template>
  <div id="app">
    <BarChart></BarChart>
    <LineChart></LineChart>
  </div>
</template>

<script>
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';

export default {
  name: 'App',
  components: {
    BarChart,
    LineChart
  }
}
</script>