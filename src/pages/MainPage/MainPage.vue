<template>
  <div class="mainBlock">
    <Navigation />
    <div class="content">
      <Sidebar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navigation from '../../components/Navigation.vue';
import Sidebar from '../../components/Sidebar.vue';

export default {
  name: 'MainPage',
  components: {
    Navigation,
    Sidebar
  }
};
</script>
