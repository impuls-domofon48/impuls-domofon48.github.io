<template>
  <div class="answer_list-wrapper">
    {{ adminCheck }}
    <div v-if="isAdmin">
      <textarea name="" id="" cols="30" rows="5" v-model="answer"></textarea>
      <textarea name="" id="" cols="30" rows="5" v-model="question"></textarea>
      <button @click="addNewAnswer">Add</button>
    </div>
    <ul class="answers_list" v-for="(item, idx) in answers" :key="idx">
      <li class="answers_list-element">
        <div class="answer_list-element-text">
          <strong>В:</strong>{{ item.question }}
        </div>
        <div class="answer_list-element-text">
          <strong>О:</strong>{{ item.answer }}
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const API_LINK = ref("http://localhost:5000/api/answers/");
    const answers = ref([]);
    const answer = ref("");
    const question = ref("");
    const store = useStore();
    const isAdmin = ref(false);
    onMounted(async () => {
      await fetch(API_LINK.value)
        .then((response) => response.json())
        .then((data) => (answers.value = data));
    });
    const updateAnswerArray = async () => {
      await fetch(API_LINK.value)
        .then((response) => response.json())
        .then((data) => (answers.value = data));
    };
    const adminCheck = computed(() => {
      if (
        store.getters.getUser != 0 &&
        store.getters.getUser.user.adminLevel == 5
      ) {
        isAdmin.value = true;
      }
    });
    const addNewAnswer = async () => {
      await fetch(API_LINK.value + "/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          { answer: answer.value, question: question.value },
          null,
          2
        ),
      });
      updateAnswerArray();
    };
    return {
      answers,
      adminCheck,
      isAdmin,
      answer,
      question,
      addNewAnswer,
    };
  },
};
</script>
<style>
.answers_list {
  text-align: left;
  margin: 25px;
  list-style: none;
}
.answers_list-element {
  border: none;
  padding: 5px;
  /* margin: 20px; */
  background-color: azure;
  border-radius: 10px;
}
.answer_list-element-text {
  margin: 10px;
}
</style>
