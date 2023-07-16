<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { animateText } from "../utils/TextAnimation"; // Update the path according to your folder structure
import IconComponent from "@/components/IconComponent.vue";

const text = ref(null);
// The text is extracted and store it
const strText = ref(null);
//Create an array of each individual letter
let splitText = ref([]);
const windowWidth = ref(window.innerWidth);

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  text.value = document.querySelector(".fancy");
  //String contents
  strText.value = text.value.textContent;
  // Array of chacarters
  splitText.value = strText.value.split("");
  // reset the text
  text.value.textContent = "";

  animateText(text.value, strText.value, splitText.value);
  window.addEventListener("resize", updateWindowWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWindowWidth);
});
</script>

<template>
  <div>
    <section class="block block--dark blocks">
      <header class="container grid grid grid--1x2">
        <div class="block__header hero__content">
          <!-- <h1 class="block__heading">{{ titleTyped }}</h1> -->
          <h1 class="fancy">Hello.I am Ricardo</h1>
          <br />
          <div
            v-if="windowWidth >= 768"
            data-aos="fade-right"
            data-aos-delay="3000"
            data-aos-duration="2000"
          >
            <IconComponent
              link="https://github.com/Rickynunez123"
              icon="github-icon.svg"
            />
            <IconComponent
              link="https://www.linkedin.com/in/ricardo-nunez-cuesta/"
              icon="linkedin.svg"
            />
            <IconComponent link="mailto:rnunezcu@mtu.edu" icon="email.svg" />
          </div>
        </div>
        <div class="portrait-container">
          <div class="portrait">
            <img class="hero__image" src="../assets/images/me.png" />
          </div>
          <div
            v-if="windowWidth <= 768"
            data-aos="fade-right"
            data-aos-delay="3000"
            data-aos-duration="2000"
          >
            <IconComponent
              link="https://github.com/Rickynunez123"
              icon="github-icon.svg"
            />
            <IconComponent
              link="https://www.linkedin.com/in/ricardo-nunez-cuesta/"
              icon="linkedin.svg"
            />
            <IconComponent link="mailto:rnunezcu@mtu.edu" icon="email.svg" />
          </div>
          <br />

          <p class="hero__tagline">
            Born in 2001 in Campeche, Mexico. I am currently a fourth year
            student athlete persuing a computer science degree at Michigan Tech.
            <br />
            <br />
            I am full-stack developer with two years of professional experience.
          </p>
        </div>
      </header>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/block";
@import "../assets/scss/icon";
@import "../assets/scss/grid";
@import "../assets/scss/hero";
@import "../assets/scss/nav";

.portrait {
  background-color: #000000e6;
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.124); /* add border property */
  outline: 5px solid rgb(22, 22, 24);
  outline-offset: -10px;
  width: 300px;
}
.portrait-container {
  flex-direction: column;
  display: flex;
  align-items: center;
}

@media screen and (min-width: 768px) {
  .block__header {
    text-align: left;
    margin-bottom: 4rem;
  }
}

@media screen and (max-width: 768px) {
  .hero__content {
    align-self: center;
  }

  .block__header {
    margin-bottom: 4rem;
  }
}

.container {
  max-width: 1140px;
  margin: 0 auto;
}
</style>
