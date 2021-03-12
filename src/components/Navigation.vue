<template>
  <nav class="navigation">
    <div class="navigation__logo-block">
      <img src="../assets/MiniLogo.svg" alt="logo" class="logo" />
    </div>
    <ul class="navigation__list">
      <li
        v-bind:key="item.text"
        v-for="item in navItems"
        class="navigation__item"
        :class="{ closed: item.closed }"
      >
        {{ item.text }}
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      navItems: [
        {
          text: "Network Security",
          closed: false,
        },
        {
          text: "Neural Network",
          closed: false,
        },
        {
          text: "Sandbox",
          closed: true,
        },
        {
          text: "Search Vulnerabilities",
          closed: true,
        },
        {
          text: "Access Control",
          closed: true,
        },
      ],
    };
  },
};
</script>
