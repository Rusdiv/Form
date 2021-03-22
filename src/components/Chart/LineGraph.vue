<template>
  <canvas id="lineChart" width="90%" height="90%"></canvas>
</template>

<script>
import Chart from 'chart.js';
import ChartData from './Linedata.js';

export default {
  name: 'LineGraph',
  data() {
    return {
      ChartData: ChartData
    };
  },
  mounted() {
    const ctx = document.getElementById('lineChart');
    new Chart(ctx, this.ChartData, {
      responsive: true,
      maintainAspectRatio: false
    });
  }
};
</script>

<style>
#lineChart {
  height: 90%;
}
</style>
