<template>
  <form class="form" @submit="checkForm">
    <input
      class="form__input"
      :class="{ 'form-error': errorLogin }"
      v-model.trim="loginValue"
      placeholder="Логин"
    />
    <input
      class="form__input"
      :class="{ 'form-error': errorPassword }"
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
      if (this.errorPassword === false && this.errorLogin === false) {
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
      }

      e.preventDefault();
    },
  },
};
</script>

