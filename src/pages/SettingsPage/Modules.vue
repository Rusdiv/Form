<template>
  <div class="modules">
    <button @submit="toggleOpen">Добавить модули</button>
    <ul>
      <li class="modules__item">
        <div>Oracle Server Log</div>
        <div>Активный</div>
        <div>Oracle</div>
        <input type="checkbox" />
      </li>
      <li class="modules__item">
        <div>SSH</div>
        <div>Активный</div>
        <div>ssh log</div>
        <input type="checkbox" />
      </li>
      <li class="modules__item">
        <div>Windows Event Log</div>
        <div>Активный</div>
        <div>Eventlog</div>
        <input type="checkbox" />
      </li>
    </ul>
    <div v-if="openAddModule" class="modules__popup">
      <input type="text" placeholder="Имя хоста" name="" id="" />
      <input
        type="text"
        placeholder="Время ожидания (вмиллисекундах)"
        name=""
        id=""
      />
      <input type="text" placeholder="Размер кванта" name="" id="" />
      <input type="text" placeholder="Фильтрующее выражение" name="" id="" />
      <input type="text" placeholder="Наименование модуля" name="" id="" />
      <input type="text" placeholder="Экспертная строка" name="" id="" />
      <select>
        <option value="">Предзаданные справочники</option>
      </select>
      <select>
        <option value="">Тип модуля</option>
      </select>
      <br />
      <label for="list">
        <input name="list" type="checkbox" />
        Application
        <input name="list" type="checkbox" />
        Security
        <input name="list" type="checkbox" />
        System
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingsPage',
  data() {
    return {
      openAddModule: true,
    };
  },
  methods: {
    toggleOpen() {
      this.openAddModule
        ? (this.openAddModule = false)
        : (this.openAddModule = true);
    },
  },
};
</script>
