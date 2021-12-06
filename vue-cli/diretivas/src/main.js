import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.directive("destaque", {
  bind(el) {
    el.style.backgroundColor = "lightgreen";
  },
});

Vue.directive("destaque-param", {
  bind(el, binding) {
    el.style.backgroundColor = binding.value;
    el.style.color = "white";
    el.style.fontWeight = "bold";
    el.style.padding = "5px";
  },
});

Vue.directive("destaque-arg", {
  bind(el, binding) {
    if (binding.arg === "fundo") {
      el.style.backgroundColor = binding.value;
      el.style.color = "white";
      el.style.fontWeight = "bold";
    } else {
      el.style.backgroundColor = binding.value;
      el.style.fontWeight = "bold";
      el.style.color = "black";
    }
  },
});
Vue.directive("destaque-mod", {
  bind(el, binding) {
    let atrasar = 0;
    if (binding.modifiers["atrasar"]) atrasar = 3000;

    setTimeout(() => {
      el.style.backgroundColor = binding.value;
      el.style.fontWeight = "bold";
      el.style.color = "black";
    }, atrasar);
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
