<script setup>
import { ref, onMounted } from "vue";
import { animateText } from "../utils/TextAnimation"; // Update the path according to your folder structure
import IconComponent from "@/components/IconComponent.vue";

const text = ref(null);
const strText = ref(null);
let splitText = ref([]);

onMounted(() => {
  text.value = document.querySelector(".fancy");
  strText.value = text.value.textContent;
  splitText.value = strText.value.split("");
  text.value.textContent = "";

  animateText(text.value, strText.value, splitText.value);
});
</script>

<template>
  <div>
    <section class="block block--dark">
      <header class="container grid grid">
        <div class="block__header hero__content">
          <h1 class="fancy block__heading">Projects</h1>
        </div>
        <div class="text-container">
          <IconComponent
            link="https://github.com/Rickynunez123/ArtificialNeuralNetwork-Bank"
            icon="github-icon.svg"
          />
          <a
            href="https://github.com/Rickynunez123/ArtificialNeuralNetwork-Bank"
            target="_blank"
            >Artificial Neural network</a
          >
        </div>
        <div class="text-container">
          <IconComponent
            link="https://github.com/Rickynunez123/ConvolutionalNN-Dogs-Cats"
            icon="github-icon.svg"
          />
          <a
            href="https://github.com/Rickynunez123/ConvolutionalNN-Dogs-Cats"
            target="_blank"
            >Convolutional Neural network</a
          >
        </div>
        <div class="text-container">
          <IconComponent
            link="https://github.com/Rickynunez123/AntipatternDetector"
            icon="github-icon.svg"
          />
          <a
            href="https://github.com/Rickynunez123/AntipatternDetector"
            target="_blank"
            >Antipatter Detector</a
          >
        </div>
        <div class="text-container">
          <IconComponent
            link="https://github.com/Rickynunez123/SchoolPortal"
            icon="github-icon.svg"
          />
          <a
            href="https://github.com/Rickynunez123/SchoolPortal"
            target="_blank"
            >School Portal -></a
          >
          <a
            style="margin-left: 10px"
            :href="`https://vwwbxanexhmfobvhltut.supabase.co/storage/v1/object/public/documents/SchoolPortal.pdf`"
            target="_blank"
            >Click to see documentation</a
          >
        </div>
        <div class="text-container">
          <IconComponent
            link="https://github.com/Rickynunez123/Web-Browser"
            icon="github-icon.svg"
          />
          <a href="https://github.com/Rickynunez123/Web-Browser" target="_blank"
            >Web Browser</a
          >
        </div>
        <div class="text-container">
          <IconComponent
            link="https://github.com/Rickynunez123/MortgageCalculator"
            icon="github-icon.svg"
          />
          <a
            href="https://github.com/Rickynunez123/MortgageCalculator"
            target="_blank"
            >Mortgage Calculator</a
          >
        </div>
      </header>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/scroller";
@import "../assets/scss/hero";
@import "../assets/scss/block";

@media screen and (min-width: 768px) {
  .block__header {
    margin-top: 90px;
    text-align: center;
    margin-bottom: 4rem;
  }

  .block__heading {
    display: flex;
    align-content: center;
    align-self: center;
    text-align: center;
    margin: 0 auto;
  }
}

.text-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1000px;
  height: 40px;
  margin: 10px;
}

@media screen and (max-width: 768px) {
  .block__header {
    margin-top: 30px;
    margin-bottom: 4rem;
  }
}
.container {
  max-width: 1140px;
  margin: 0 auto;
  margin-bottom: 100px;
  margin-top: 100px;
}

.info-container {
  height: 400px;
  width: 960px;
  text-align: left;
  align-items: center;
  align-content: center;
  display: flex;
  flex-direction: column; /* Align items in columns */
  background: #e2e2e6;
  border-radius: 20px;
  font-weight: bold;
  box-shadow: 2px 4px 12px rgba(196, 195, 195, 0.609);
  padding: 50px;
  margin-right: 30px;
  border: 5px solid black;
}

.info-container > h2 {
  text-align: center;
}

.block--dark h3 {
  color: #ded2d2ba;
  font-size: 21px;
  font-weight: 600;
}
.block--dark h2 {
  color: #000000c4;
  margin-bottom: 20px;
  font-weight: 600;
}
a {
  color: rgba(222, 210, 210, 0.7294117647);
  font-size: 21px;
  font-weight: 600;
}

a:hover {
  color: white;
  font-size: 25px;
  transition: all 0.3s linear;
}

a {
  margin-bottom: 0;
  transition: font-size 0.3s linear;
}

.my-image {
  object-position: bottom -450px right 1px;
}
</style>
