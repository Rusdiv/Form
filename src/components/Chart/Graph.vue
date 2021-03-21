<template>
  <canvas id="planet-chart" width="400" height="100"></canvas>
</template>

<script>
import Chart from 'chart.js';
import planetChartData from './planet-data.js';

export default {
  name: 'PlanetChart',
  data() {
    return {
      planetChartData: planetChartData
    };
  },
  mounted() {
    const ctx = document.getElementById('planet-chart');
    new Chart(ctx, this.planetChartData, {
      responsive: true,
      maintainAspectRatio: true
    });
  }
};
</script>

<style>
#planet-chart {
  height: 100%;
}
</style>
