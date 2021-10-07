<template>
  <div>
    <Form @submit="onSubmit" class="login-form">
      <Field
        name="email"
        type="email"
        rules="required|email"
        class="login-form-element"
        placeholder="example@example.com"
      />
      <ErrorMessage name="email" class="login-form-element-error" />
      <Field
        name="password"
        type="password"
        rules="required"
        class="login-form-element"
        placeholder="Password"
      />
      <ErrorMessage name="password" class="login-form-element-error" />
      <button class="login-form-btn">Login</button>
    </Form>
    <!-- <span>{{ responseBack }}</span> -->
  </div>
</template>
<script>
import { ref } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import { useStore } from "vuex";
export default {
  components: { Form, Field, ErrorMessage },
  emits: ["onClose"],
  setup(_, { emit }) {
    const responseBack = ref("");
    const store = useStore();
    const URL_API_LOGIN = ref("http://localhost:5000/api/auth/login");
    const onSubmit = async (values) => {
      const loginData = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values, null, 2),
      };
      const response = await fetch(URL_API_LOGIN.value, loginData);
      const data = await response.json();
      store.dispatch("setUser", data);
      emit("onClose");
    };
    return {
      onSubmit,
      responseBack,
    };
  },
};
</script>
<style>
.login-form {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: left;
}
.login-form-element {
  margin: 5px 0 5px 0;
  box-shadow: 0px 0px 5px gray;
  border: none;
  height: 25px;
  margin-right: 5px;
  border-radius: 5px;
}
.login-form-btn {
  margin: 10px 0 10px 0;
  border: none;
  height: 30px;
  border-radius: 10px;
  background-color: aquamarine;
}
.login-form-btn__content {
  display: flex;
  justify-content: center;
}
.login-form-btn:hover {
  box-shadow: 0px 0px 10px aquamarine;
  color: white;
}
.login-form-element-error {
  color: red;
  margin: 5px 0 5px 0;
  font-size: 12px;
}
</style>
