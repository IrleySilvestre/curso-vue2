import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.filter("somar", function(value) {
    if (!value) return "";

    for (let i = 0; i < value.length; i++) {
        return value
            .split(" ")
            .map((p) => `${p}(${p.length})`)
            .join(" ");
    }

    return value.toUpperCase();
});

new Vue({
    render: (h) => h(App),
}).$mount("#app");