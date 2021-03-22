<template>
  <div class="homeContainer">
    <div class="home__blockContainer">
      <HomeItem :type="'line'" :title="'Firewall'" />
      <HomeItem :type="'bar'" :title="'Neural Network'" />
    </div>
    <div class="home__blockContainer">
      <HomeItem :type="'pie'" :title="'Sandbox'" />
      <HomeItem :type="'radar'" :title="'Search Vulnerabilities '" />
      <HomeItem :title="'Access Control'" />
    </div>
  </div>
</template>

<script>
import HomeItem from '../../components/HomeItem.vue';
export default {
  name: 'Home',
  components: { HomeItem }
};
</script>

<style scoped>
.rightBlock__graph {
  height: calc(100% - 50px);
}
</style>
