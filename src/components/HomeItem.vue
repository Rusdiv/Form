<template>
  <div class="home__block">
    <div class="home__title">
      <div class="home__select">За 7 дней</div>
      <div class="home__name">{{ title }}</div>
      <button class="home__settings"></button>
    </div>
    <template v-if="type === 'line'">
      <div class="rightBlock__graph">
        <chart-line></chart-line>
      </div>
    </template>
    <template v-if="type === 'bar'">
      <div class="rightBlock__graph">
        <chart-bar></chart-bar>
      </div>
    </template>
    <template v-if="type === 'pie'">
      <div class="rightBlock__graph">
        <chart-pie></chart-pie>
      </div>
    </template>
    <template v-if="type === 'radar'">
      <div class="rightBlock__graph">
        <chart-radar></chart-radar>
      </div>
    </template>
  </div>
</template>

<script>
import ChartLine from './Chart/LineGraph.vue';
import ChartBar from './Chart/BarGraph.vue';
import ChartPie from './Chart/PieGraph.vue';
import ChartRadar from './Chart/RadarGraph.vue';

export default {
  name: 'HomeItem',
  components: { ChartLine, ChartBar, ChartPie, ChartRadar },
  props: {
    title: String,
    type: String
  }
};
</script>

<style scoped>
.rightBlock__graph {
  height: calc(100% - 50px);
}
</style>
