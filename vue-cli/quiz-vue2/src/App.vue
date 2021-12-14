<template>
  <div id="app">
    <h1>Quiz</h1>
    <transition name="flip" mode="out-in">
      <Questions
        v-if="!answerSelected"
        :question="question"
        @answerSelected="selectAnswer"
      ></Questions>
      <Result
        @retorneToQuestion="sortQuestion"
        v-else
        :msg="msg"
        :bgColor="bgColor"
      ></Result>
    </transition>
  </div>
</template>

<script>
import Questions from "./components/Questions.vue";
import Result from "./components/Result.vue";
import questions from "./util/questions";
export default {
  name: "App",
  components: { Questions, Result },
  data() {
    return {
      questions: questions,
      question: {},
      bgColor: "green",
      answerSelected: false,
      msg: "",
    };
  },
  methods: {
    sortQuestion() {
      this.question = this.questions[Math.floor(Math.random() * 6)];
      this.answerSelected = false;
      return this.question;
    },
    selectAnswer(i) {
      if (this.question.answers[i].correct) {
        this.answerSelected = true;
        this.bgColor = "green";
        this.msg = "Parabéns você acertou ...";
      } else {
        this.answerSelected = true;
        this.bgColor = "red";
        this.msg = "Você Errou ...";
      }
    },
  },
  created() {
    this.sortQuestion();
  },
};
</script>

<style>
body {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 16, 121, 1) 16%,
    rgba(32, 55, 173, 1) 97%
  );
  font-family: "Roboto", sans-serif;
  color: #ffffff;
  height: 100vh;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#app h1 {
  font-weight: bold;
  font-size: 4rem;
}

@keyframes flip-in {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(90deg);
  }
}
@keyframes flip-out {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}

.flip-enter-active {
  animation: flip-in 0.3s ease;
}

.flip-leave-active {
  animation: flip-out 0.3s ease;
}
</style>
