<template>
  <link
    href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1"
    rel="stylesheet"
    type="text/css"
  />
  <nav class="navigation">
    <div class="navigation__logo-block" @click="openNav">
      <img src="../assets/navigation/MiniLogo.svg" alt="logo" class="logo" />
    </div>
    <ul class="navigation__list" :class="{ show: showNav }">
      <div class="navigation__select navigation__item" @click="openOption">
        Chose tehnology
        <div
          class="navigation__select-options"
          :class="{ showOption: showOption }"
        >
          <li
            v-bind:key="item.text"
            v-for="item in navItems"
            class="navigation__item"
            :class="{ closed: item.closed }"
          >
            <router-link :to="item.url">{{ item.text }}</router-link>
          </li>
        </div>
      </div>
      <button
        class="navigation__list-button"
        @click="openNav"
        :class="{ show: showNav }"
      ></button>
      <li
        v-bind:key="item.text"
        v-for="item in navItems"
        class="navigation__item disableButtons"
        :class="{ closed: item.closed }"
      >
        <router-link :to="item.url">{{ item.text }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      showOption: false,
      showNav: false,
      navItems: [
        {
          text: 'Network Security',
          closed: false,
          url: '/NetworkSecurity'
        },
        {
          text: 'Neural Network',
          closed: false,
          url: 'NeuralNetwork'
        },
        {
          text: 'Sandbox',
          closed: true,
          url: 'NetworkSecurity'
        },
        {
          text: 'Search Vulnerabilities',
          closed: true,
          url: 'SearchVulnerabilities'
        },
        {
          text: 'Access Control',
          closed: true,
          url: 'AccessControl'
        }
      ]
    };
  },
  methods: {
    openNav() {
      this.showNav ? (this.showNav = false) : (this.showNav = true);
    },
    openOption() {
      this.showOption ? (this.showOption = false) : (this.showOption = true);
    }
  }
};
</script>
