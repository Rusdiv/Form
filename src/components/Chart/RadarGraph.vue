<template>
  <canvas id="RadarGraph" width="90%" height="90%"></canvas>
</template>

<script>
import Chart from 'chart.js';
import ChartData from './Radardata.js';

export default {
  name: 'RadarGraph',
  data() {
    return {
      ChartData: ChartData
    };
  },
  mounted() {
    const ctx = document.getElementById('RadarGraph');
    new Chart(ctx, this.ChartData, {
      responsive: true,
      maintainAspectRatio: false
    });
  }
};
</script>

<style>
#RadarGraph {
  height: 90%;
}
</style>
