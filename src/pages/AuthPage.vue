<template>
  <div class="container">
    <img alt="Nemezida logo" class="logo" src="../assets/logo.png" />
    <Form />
  </div>
</template>

<script>
import Form from "../components/Form.vue";

export default {
  name: "AuthPage",
  components: { Form },
};
</script>

<style scoped>
.container {
  display: block;
  margin: 0 auto;
  max-width: 450px;
}
.logo {
  width: 90%;
  display: block;
  margin: 0 auto;
  margin-top: 20%;
  margin-bottom: 90px;
}
</style>
