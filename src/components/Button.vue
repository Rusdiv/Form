<template>
  <button class="button">Войти</button>
</template>

<script>
export default {
  name: "Button",
};
</script>

<style scoped>
.button {
  max-width: 100%;
  width: 100%;
  outline: none;
  border: none;
  background: #212121;
  border-radius: 10px;
  color: #fff;
  padding: 20px;
}

.button:hover {
  background: #1d1d1d;
  color: rgb(184, 184, 184);
}
</style>
