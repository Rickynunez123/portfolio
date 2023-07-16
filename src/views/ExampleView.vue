<script setup>
import { ref, onMounted } from "vue";
import Laptop from "../components/ScreenLaptopContainer.vue";
import { animateText } from "../utils/TextAnimation";
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

function formatDescription(description) {
  return description.replace(/\n/g, "<br>");
}

const videos = ref([
  {
    id: 1,
    title: "File Converter and Presentation Manager",
    link: "manipulator.mp4?t=2023-05-27T19%3A19%3A24.604Z",
    web: "https://github.com/Rickynunez123/FileConverterAndPresentation-FrontEnd",
    description:
      "The software converts .PPT and .PPTX files into downloadable PNG or PDF files. Additionally, you can choose to make a presentation immediately after uploading your files. All your uploaded files are stored in folders, providing a preview of the slides you're about to present.<br> <br>" +
      "● Front-end (JavaScript, VUE.JS, AXIOS, CSS, HTML)<br>" +
      "● Back-end (Express.js, JavaScript)",
  },
  {
    id: 2,
    title: "HealthHub: Your Personal Health Assistant",
    link: "hospitalWeb.mp4?t=2023-05-27T19%3A36%3A19.922Z",
    web: "https://github.com/Rickynunez123/HealthHub",
    description:
      "Allows you to conveniently store and manage all your personal health information, including insurance details, blood type, weight, height, and more. When you visit a hospital, your information is readily accessible, saving time and ensuring accurate care. Explore the map feature to locate nearby hospitals, browse doctor profiles, and sort by specialization. View available appointment slots, make bookings, and have them seamlessly integrated into your calendar. <br> <br> " +
      "● Front-end (JavaScript, VUE.JS, AXIOS, CSS, HTML)<br>" +
      "● Back-end (PostgresSQL, AWS S3, GoogleMaps API, Express.js, JavaScript)",
  },
  {
    id: 3,
    title: "Smartments",
    link: "airbnb.mp4?t=2023-05-27T19%3A35%3A33.569Z",
    documentation:
      "https://vwwbxanexhmfobvhltut.supabase.co/storage/v1/object/public/documents/documentation.pdf",
    web: "https://github.com/Rickynunez123/CS3141-R01-team5",
    description:
      "A portal system designed to streamline communication and transactions between landlords and tenants. Landlords can effortlessly set rent prices, efficiently manage maintenance requests, and stay updated on any overdue apartments. Tenants enjoy the convenience of paying their bills online, easily submitting maintenance requests, browsing available apartments, and even requesting specific units. With Smartments, landlords and tenants can enjoy a seamless, efficient, and transparent rental experience. <br> <br>" +
      "● Front-end (JavaScrips, CSS, HTML)<br>" +
      "● Back-end (MySQL, PHP, Javascript)",
  },
  {
    id: 4,
    title: "Video Game",
    link: "videogame.mp4?t=2023-05-27T19%3A36%3A46.243Z",
    web: 1,
    description:
      "● Technologies (Unity 'Game Engine', Blender '3D modeling', Bolt 'Visual Scripting')<br>",
  },
]);
</script>

<template>
  <div>
    <section class="block block--dark">
      <header class="container grid grid">
        <div class="block__header hero__content">
          <h1 class="fancy block__heading">Examples</h1>
        </div>
      </header>
      <div
        class="media-scroller media-element--1x2"
        v-for="video in videos"
        :key="video.id"
      >
        <Laptop :video="video.link" />
        <div class="info-container">
          <h2>{{ video.title }}</h2>
          <h3 v-html="formatDescription(video.description)"></h3>
          <IconComponent
            v-if="video.web !== 1"
            class="icon"
            :link="video.web"
            icon="github-icon.svg"
          />

          <a
            v-if="video.documentation"
            :href="video.documentation"
            target="_blank"
            >Click to see in a new tab</a
          >
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/scroller";
@import "../assets/scss/hero";
@import "../assets/scss/block";

.icon {
  position: absolute;
  left: 20px;
  top: 20px;
}

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
  color: #222222ba;
  font-size: 21px;
  font-weight: 600;
}
.block--dark h2 {
  color: #000000c4;
  margin-bottom: 20px;
  font-weight: 600;
}

.my-image {
  object-position: bottom -450px right 1px;
}
</style>
