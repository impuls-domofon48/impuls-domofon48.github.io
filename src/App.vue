<template>
  <MainPage />
</template>

<script>
import MainPage from "@/components/MainPage";

export default {
  name: "App",
  components: {
    MainPage,
  },
};
</script>

<style>
#app {
  font-family: JetBrainsMono;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 15px;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  text-shadow: 2px 2px 7px rgba(128, 128, 128, 0.384);
}
</style>
