<template>
  <canvas id="PieGraph" width="90%" height="90%"></canvas>
</template>

<script>
import Chart from 'chart.js';
import ChartData from './Piedata.js';

export default {
  name: 'PieGraph',
  data() {
    return {
      ChartData: ChartData
    };
  },
  mounted() {
    const ctx = document.getElementById('PieGraph');
    new Chart(ctx, this.ChartData, {
      responsive: true,
      maintainAspectRatio: false
    });
  }
};
</script>

<style>
#PieGraph {
  height: 90%;
}
</style>
