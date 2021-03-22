<template>
  <canvas id="barChart" width="90%" height="90%"></canvas>
</template>

<script>
import Chart from 'chart.js';
import ChartData from './Bardata.js';

export default {
  name: 'BarGraph',
  data() {
    return {
      ChartData: ChartData
    };
  },
  mounted() {
    const ctx = document.getElementById('barChart');
    new Chart(ctx, this.ChartData, {
      responsive: true,
      maintainAspectRatio: false
    });
  }
};
</script>

<style>
#BarChart {
  height: 90%;
}
</style>
