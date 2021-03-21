<template>
  <MainPage v-if="true"/>
  <template v-if="false">
    <AuthPage />
  </template>
</template>

<script>
import AuthPage from "./pages/AuthPage.vue";
import MainPage from "./pages/MainPage/MainPage.vue";

export default {
  name: "App",
  components: { AuthPage, MainPage },
};
</script>

<style></style>
