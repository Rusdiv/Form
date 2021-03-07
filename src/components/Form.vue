<template>
  <form class="form" @submit="checkForm">
    <input
      class="input"
      :class="{ error: errorLogin }"
      v-model.trim="loginValue"
      placeholder="Логин"
    />
    <input
      class="input"
      :class="{ error: errorPassword }"
      v-model.trim="passwordValue"
      placeholder="Пароль"
    />
    <span v-if="error"> {{ error }} </span>
    <Button />
  </form>
</template>

<script>
import Button from "./Button.vue";
import axios from "axios";

export default {
  name: "Form",
  components: { Button },
  data() {
    return {
      loginValue: "",
      passwordValue: "",
      errorLogin: false,
      errorPassword: false,
      error: null,
    };
  },
  methods: {
    checkForm(e) {
      if (this.loginValue === "") {
        this.errorLogin = true;
      } else {
        this.errorLogin = false;
      }

      if (this.passwordValue === "") {
        this.errorPassword = true;
      } else {
        this.errorPassword = false;
      }
      axios({
        method: "post",
        url: "/API",
        data: {
          login: this.loginValue,
          password: this.passwordValue,
        },
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => {
          response.data.status === "Неправильный логин или пароль";
          this.error = "Неправильный логин или пароль";
        })
        .catch(function(error) {
          console.log(error);
        });

      e.preventDefault();
    },
  },
};
</script>

<style scoped>
.input {
  max-width: 100%;
  width: calc(100% - 20px);
  background: #efeded;
  border-radius: 10px;
  border: none;
  padding: 20px 0 20px 20px;
  outline: none;
  margin-bottom: 32px;
}

.error {
  background: #f8d1d1;
}
</style>
