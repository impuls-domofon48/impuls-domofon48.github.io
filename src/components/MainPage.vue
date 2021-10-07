<template>
  <div>
    <div class="main">
      <div class="menu_wrapper">
        <div>
          <img
            src="@/assets/img/logo.png"
            width="70"
            height="50"
            alt="logo"
            class="main_logo"
            @click="changeValue('')"
          />
        </div>
        <div class="menu_list">
          <div v-for="item in menuList" :key="item.name" class="menu_list-item">
            <span
              class="menu_list-item-text"
              @click="changeValue(item.value)"
              >{{ item.name }}</span
            >
          </div>
          <div class="menu_login">
            <button class="menu_login-btn" @click="handleModalShow">
              Войти
            </button>
          </div>
        </div>
      </div>
    </div>
    <Modal v-if="showModal" @onClose="handleModalShow">
      <Login @onClose="handleModalShow" />
    </Modal>
    <div class="component_block">
      <div v-if="selectedValue == ''">
        <Main />
      </div>
      <div v-if="selectedValue == 'about'">
        <About />
      </div>
      <div v-if="selectedValue == 'service'">
        <Services />
      </div>
      <div v-if="selectedValue == 'contract'">
        <Contract />
      </div>
      <div v-if="selectedValue == 'maintenance'">
        <Maintenance />
      </div>
      <div v-if="selectedValue == 'keys'">
        <Keys />
      </div>
      <div v-if="selectedValue == 'answers'">
        <Answers />
      </div>
    </div>
    <div class="main_footer">
      <div class="main_footer-wrapper">
        <div class="main_footer-item">
          <p class="main_footer-item-text">Контакты</p>
          <p class="main_footer-item-text">
            8(47467) 2-02-16, 2-25-86, 8-915-856-07-23,
          </p>
          <p class="main_footer-item-text">impuls-zayavka@yandex.ru</p>
          <p class="main_footer-item-text">ул. Пушкина, д. 115а</p>
        </div>
        <div class="main_footer-item">
          <p class="main_footer-item-text">График работы диспетчера</p>
          <p class="main_footer-item-text">Пн-Сб: 8:00 – 18:00</p>
          <p class="main_footer-item-text">Вс: выходной</p>
          <p class="main_footer-item-text">Перерыв: 12:00 – 13:00</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Main from "@/components/UI/Main";
import About from "@/components/UI/About";
import Services from "@/components/UI/Services";
import Maintenance from "@/components/UI/Maintenance";
import Keys from "@/components/UI/Keys";
import Contract from "@/components/UI/Contract";
import Answers from "@/components/UI/Answers";
import Modal from "@/components/UI/Modal";
import Login from "@/components/UI/Login";
import { ref } from "vue";
export default {
  components: {
    About,
    Services,
    Maintenance,
    Main,
    Keys,
    Contract,
    Answers,
    Modal,
    Login,
  },
  setup() {
    const menuList = ref([
      { name: "О нас", value: "about" },
      { name: "Услуги", value: "service" },
      { name: "Заключение договора", value: "contract" },
      { name: "Обслуживание домофонного оборудования", value: "maintenance" },
      { name: "Заказать ключи для домофона", value: "keys" },
      { name: "Ответы на вопросы", value: "answers" },
    ]);
    const selectedValue = ref("");
    const showModal = ref(false);
    const handleModalShow = () => {
      showModal.value = !showModal.value;
    };
    const changeValue = (value) => {
      selectedValue.value = value;
    };
    return {
      menuList,
      selectedValue,
      changeValue,
      showModal,
      handleModalShow,
    };
  },
};
</script>
<style>
.main_logo {
  box-shadow: 1px 1px 7px gray;
  border-radius: 5px;
  margin-top: 3px;
  margin-left: 3px;
  background-color: aquamarine;
  cursor: pointer;
}
.menu_list {
  display: flex;
  width: 100%;

  justify-content: space-between;
  align-items: center;
}
.main {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}
.menu_wrapper {
  top: 0;
  display: flex;
  /* margin-top: 10px; */
  background-color: rgba(80, 221, 186, 0.568);
}
.menu_list-item {
  color: rgb(4, 87, 90);
  margin-left: 20px;
  margin-right: 20px;
}
.menu_list-item-text:hover {
  color: rgb(255, 255, 255);
  text-shadow: 1px 1px 10px rgb(0, 0, 0);
  cursor: pointer;
}
.component_block {
  position: relative;
  margin: 70px 0 200px 0;
  height: 100%;
  z-index: 1;
}
.main_footer {
  z-index: -1;
  position: fixed;
  width: 100%;
  height: 80px;
  bottom: 0;
  left: 0;
}
.main_footer-wrapper {
  display: flex;
  width: 100%;
  background-color: rgba(80, 221, 186, 0.568);
  justify-content: flex-end;
  text-align: justify;
  font-size: 13px;
}
.main_footer-item-text {
  margin: 0;
}
.main_footer-item {
  margin: 10px 10px 10px 0;
}
.menu_login {
  margin-right: 10px;
}
.menu_login-btn {
  font-family: JetBrainsMono;
  border: none;
  width: 70px;
  height: 25px;
  background-color: rgba(0, 160, 172, 0.671);
  color: aliceblue;
  cursor: pointer;
  border-radius: 5px;
}
.menu_login-btn:hover {
  color: rgba(255, 255, 255, 0.781);
  background-color: rgba(0, 224, 150, 0.87);
  text-shadow: 1px 1px 7px white;
  box-shadow: 0px 0px 7px rgb(0, 255, 191);
}
</style>
