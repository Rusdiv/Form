<template>
  <div class="settings">
    <ul class="settings__list">
      <li class="settings__item">Лицензия</li>
      <li class="settings__item">Общие настройки</li>
      <router-link to="/settings/proxy">
        <li class="settings__item">Прокси сервер</li>
      </router-link>
      <li class="settings__item">Самозащита</li>
    </ul>
    <div class="settings__about">О программе</div>
  </div>
</template>

<script>
export default {
  name: 'SettingsPage',
};
</script>
