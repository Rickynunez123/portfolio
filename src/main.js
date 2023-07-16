import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App);

AOS.init({
  duration: 500,
  easing: "ease-in-out-sine",
});

app.use(AOS).use(router).mount("#app");
