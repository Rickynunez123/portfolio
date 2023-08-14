<script setup>
import { ref, onMounted } from "vue";
import { animateText } from "../utils/TextAnimation"; // Update the path according to your folder structure
import Scroller from "../components/ScrollerComponent2.vue";
import photos from "../data/images.json";

const text = ref(null);
// The text is extracted and store it
const strText = ref(null);
//Create an array of each individual letter
let splitText = ref([]);

onMounted(() => {
  text.value = document.querySelector(".fancy");
  //String contents
  strText.value = text.value.textContent;
  // Array of chacarters
  splitText.value = strText.value.split("");
  // reset the text
  text.value.textContent = "";

  animateText(text.value, strText.value, splitText.value);
});
</script>

<template>
  <div>
    <section class="block block--dark">
      <header class="container grid grid">
        <div class="block__header hero__content">
          <h1 class="fancy block__heading">Hello Again.</h1>
        </div>
        <div class="hero__tagline">
          <p
            data-aos="fade-right"
            data-aos-delay="3000"
            data-aos-duration="1000"
          >
            Here you will get to know me better.
          </p>
          <br />
          <p
            data-aos="fade-right"
            data-aos-delay="3000"
            data-aos-duration="1000"
          >
            I began my journey in tennis at the young age of 6. By the time I
            turned 12, I was already diving into international tournaments.
            Balancing these commitments with frequent travels made traditional
            schooling challenging, leading me to embark on homeschooling at the
            same age. These experiences blessed me with the chance to explore
            numerous countries and cities, making lifelong friendships across
            the globe. Eventually, I had the opportunity to join Michigan Tech's
            college tennis team. Over the past 3 years, I've proudly represented
            the team.
          </p>
        </div>
      </header>
      <header class="block__header">
        <h2>Hobbies</h2>
      </header>
      <div data-aos-duration="600" class="media-scroller2 snaps-inline-2">
        <Scroller
          v-for="photo in photos.hobbies"
          :key="photo.id"
          :photos="photo.path"
          :text="photo.text"
        ></Scroller>
      </div>
      <header class="block__header">
        <h2>Places</h2>
      </header>
      <div
        style="padding-bottom: 80px"
        data-aos-duration="600"
        class="media-scroller2 snaps-inline-2"
      >
        <Scroller
          v-for="photo in photos.places"
          :key="photo.id"
          :photos="photo.path"
          :text="photo.text"
        ></Scroller>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/scroller";
@import "../assets/scss/hero";
@import "../assets/scss/block";

@media screen and (min-width: 768px) {
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 5rem;
  }
  p {
    font-size: 1.5rem;
  }
  .hero__tagline {
    display: flex;
    flex-direction: column; /* Align paragraphs in a single column */
    align-items: center; /* Center content horizontally */
    text-align: center; /* Center text within paragraphs */
  }
}
.container {
  max-width: 1140px;
  margin: 0 auto;
  margin-bottom: 100px;
  margin-top: 100px;
}

.my-image {
  object-position: bottom -450px right 1px;
}
</style>
