<template>
	<canvas id="planet-chart" width="100%" height="100%"></canvas>
</template>

<script>
import Chart from 'chart.js';
import planetChartData from './planet-data.js';

export default {
	name: 'PlanetChart',
	data() {
		return {
			planetChartData: planetChartData,
		};
	},
	mounted() {
		const ctx = document.getElementById('planet-chart');
		const parentHeight = ctx.parentNode.parentElement.clientHeight;
		ctx.style.height = `${parentHeight}px`;
		console.log(parentHeight);
		new Chart(ctx, this.planetChartData, {
			responsive: true,
			maintainAspectRatio: false,
		});
	},
};
</script>

<style>
	#planet-chart {
		height: 100%;
	}
</style>
