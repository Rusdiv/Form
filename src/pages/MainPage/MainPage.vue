<template>
  <div class="mainBlock">
    <Navigation />
    <div class="content">
      <Sidebar />
      <NetworkSecurity v-if="true" />
      <Home v-if="false" />
    </div>
  </div>
</template>

<script>
import Navigation from '../../components/Navigation.vue';
import Sidebar from '../../components/Sidebar.vue';
import NetworkSecurity from './NetworkSecurity.vue';
import Home from './Home.vue';

export default {
  name: 'MainPage',
  components: {
    Navigation,
    Sidebar,
    NetworkSecurity,
    Home
  }
};
</script>
