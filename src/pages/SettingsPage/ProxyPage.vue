<template>
  <div class="proxy">
    <div class="proxy__inputBlock">
      <input
        v-model.trim="proxyInputValue"
        placeholder="ENTER PROXY"
        type="text"
        class="proxy__input"
      />
      <input
        v-model.trim="proxyInputValue"
        placeholder="EDIT BOX"
        type="text"
        class="proxy__input"
      />
      <input
        v-model.trim="proxyInputValue"
        placeholder="TEXTEDIT"
        type="text"
        class="proxy__input"
      />
      <button class="leftBlock__button proxy-button">
        установка правил фильтрации
      </button>
    </div>

    <ul class="proxy__list">
      <h3 class="proxy__title">Правила фильтрации</h3>
      <li class="proxy__item">item 1</li>
      <li class="proxy__item">item 2</li>
      <li class="proxy__item">item 3</li>
      <li class="proxy__item">item 4</li>
      <li class="proxy__item">item 5</li>
      <li class="proxy__item">item 6</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  data() {
    return {
      proxyInputValue: '',
    };
  },
};
</script>
