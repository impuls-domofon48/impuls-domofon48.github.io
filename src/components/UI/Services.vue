<template>
  <div class="services_wrapper">
    <h2 class="services_menu-item" @click="fizUsers">Физическим лицам</h2>
    <div v-if="fizUser">
      <div class="services_menu-nav">
        <span class="services_menu-item" @click="fizMounting = !fizMounting"
          >Монтаж и техническое обслуживание аудио/видео домофонов:</span
        >
        <div v-if="fizMounting" class="services_list">
          <ul v-for="(item, idx) in fizMountingArray" :key="idx">
            <li>{{ item }}</li>
          </ul>
        </div>
      </div>
      <div class="services_menu-nav">
        <span class="services_menu-item" @click="fizVideo = !fizVideo"
          >Видеонаблюдение:</span
        >
        <div v-if="fizVideo" class="services_list">
          <ul v-for="(item, idx) in fizVideoArray" :key="idx">
            <li>{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
    <h2 class="services_menu-item" @click="jurUsers">Юридическим лицам</h2>
    <div v-if="jurUser" class="services_list">
      <ul v-for="(item, idx) in jurMountingArray" :key="idx">
        <li>{{ item }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const fizUser = ref(false);
    const jurUser = ref(false);
    const fizMounting = ref(false);
    const fizVideo = ref(false);
    const jurMounting = ref(false);
    const fizMountingArray = ref([
      "Подбор оборудования, проектирование систем домофонизации (частное жилье и многоквартирное)",
      "Монтаж и настройка аудио/видео домофонов",
      "NEW установка IP домофонов, с функцией управления со смартфона, включая просмотр видеоизображения, и удаленное открытие двери (в июле-августе 2021 г. было проведено тестирование оборудования для оказания данной услуги, в настоящий момент идет разработка экономической составляющей проекта)",
      "Техническое обслуживание системы домофонизации",
      "Изготовление ключей для домофона (только абонентам ООО «Импульс»)",
      "Установка и замена абонентской трубки в квартире",
    ]);
    const fizVideoArray = ref([
      "Проектирование систем наблюдения с учетом особенностей объекта",
      "Монтаж и настройка оборудования",
      "Установка видеонаблюдения в частный дом или на дачу",
    ]);
    const jurMountingArray = ref([
      "Монтаж слаботочной сети: телевидение, телефония, интернет, домофонизация, системы пожарной и охранной сигнализации, автоматизированного учета энергоресурсов, локальные компьютерные сети, системы видеонаблюдения, диспетчеризация лифтового хозяйства",
      "Подбор оборудования, проектирование систем домофонизации / видеонаблюдения",
      "Монтаж и настройка аудио/видео домофонов",
      "Видеонаблюдение для офиса",
    ]);
    const fizUsers = () => {
      fizUser.value = !fizUser.value;
    };
    const jurUsers = () => {
      jurUser.value = !jurUser.value;
    };
    return {
      fizUser,
      jurUser,
      fizUsers,
      jurUsers,
      fizMounting,
      fizVideo,
      jurMounting,
      fizMountingArray,
      fizVideoArray,
      jurMountingArray,
    };
  },
};
</script>
<style>
.services_menu-item {
  color: rgb(12, 122, 141);
}
.services_list {
  text-align: justify;
  margin-top: 10px;
  margin-left: 50px;
  margin-right: 50px;
  border: 1px solid rgba(128, 128, 128, 0.349);
  border-radius: 5px;
  box-shadow: 1px 1px 10px gray;
}
.services_menu-item {
  cursor: pointer;
}
.services_menu-nav {
  margin-top: 10px;
}
</style>
