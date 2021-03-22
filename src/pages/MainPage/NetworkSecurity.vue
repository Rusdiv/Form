<template>
  <div class="leftBlock">
    <div class="leftBlock__inputBlock">
      <input placeholder="ENTER IP" type="text" class="leftBlock__input" />
      <button class="leftBlock__button">Check Talos</button>
    </div>
    <div class="leftBlock__content"></div>
  </div>
  <div class="rightBlock">
    <div class="rightBlock__window">
      <div class="rightBlock__title">
        <div class="rightBlock__select">За 7 дней</div>
        <div class="rightBlock__name">IDS/IPS</div>
        <button class="rightBlock__settings"></button>
      </div>
      <div class="rightBlock__graph">
        <chart-line></chart-line>
      </div>
    </div>
    <div class="rightBlock__window">
      <div class="rightBlock__title">
        <div class="rightBlock__select">За 7 дней</div>
        <div class="rightBlock__name">Firewall</div>
        <button class="rightBlock__settings"></button>
      </div>
      <div class="rightBlock__graph">
        <chart-bar></chart-bar>
      </div>
    </div>
  </div>
</template>

<script>
import ChartLine from '../../components/Chart/LineGraph.vue';
import ChartBar from '../../components/Chart/BarGraph.vue';

export default {
  name: 'NetworkSecurity',
  components: { ChartLine, ChartBar }
};
</script>

<style scoped>
.rightBlock__graph {
  height: calc(100% - 50px);
}
</style>
