<template>
    <Navigation />
    <Sidebar />
</template>

<script>
import Navigation from "../components/Navigation.vue";
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "MainPage",
  components: {
    Navigation,
    Sidebar,
  },
};
</script>
