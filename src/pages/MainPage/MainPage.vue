<template>
  <div class="mainBlock">
    <Navigation />
    <div class="content">
      <Sidebar />
      <NetworkSecurity />
    </div>
  </div>
</template>

<script>
import Navigation from "../../components/Navigation.vue";
import Sidebar from "../../components/Sidebar.vue";
import NetworkSecurity from "./NetworkSecurity.vue";

export default {
  name: "MainPage",
  components: {
    Navigation,
    Sidebar,
    NetworkSecurity,
  },
};
</script>
