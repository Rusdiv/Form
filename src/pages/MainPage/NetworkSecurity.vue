<template>
  <div class="leftBlock">
    <div class="leftBlock__inputBlock">
      <input placeholder="ENTER IP" type="text" class="leftBlock__input" />
      <button class="leftBlock__button">Check Talos</button>
    </div>
    <div class="leftBlock__content"></div>
  </div>
  <div class="rightBlock">
    <div class="rightBlock__window">
      <div class="rightBlock__title">
        <div class="rightBlock__select">За 7 дней</div>
        <div class="rightBlock__name">IDS/IPS</div>
        <button class="rightBlock__settings"></button>
      </div>
    </div>
    <div class="rightBlock__window">
      <div class="rightBlock__title">
        <div class="rightBlock__select">За 7 дней</div>
        <div class="rightBlock__name">Firewall</div>
        <button class="rightBlock__settings"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NetworkSecurity",
};
</script>
