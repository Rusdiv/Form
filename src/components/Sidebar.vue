<template>
  <button @click="openSidebar" class="sidebar-openButton"></button>
  <div class="sidebar" :class="{ show: showSidebar, hide: !showSidebar }">
    <router-link to="/">
      <button class="sidebar__home-button sidebar-button"></button>
    </router-link>
    <ul class="sidebar__list">
      <li class="sidebar__item ">
        <button class="sidebar__button sidebar-button sidebar-graph"></button>
      </li>
      <li class="sidebar__item ">
        <button class="sidebar__button sidebar-button sidebar-man"></button>
      </li>
      <li class="sidebar__item ">
        <button class="sidebar__button sidebar-button sidebar-setting"></button>
      </li>
      <li class="sidebar__item ">
        <button class="sidebar__button sidebar-button sidebar-exit"></button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      showSidebar: false
    };
  },
  methods: {
    openSidebar() {
      this.showSidebar ? (this.showSidebar = false) : (this.showSidebar = true);
    }
  }
};
</script>
