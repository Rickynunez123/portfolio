<script setup>
import { defineProps } from "vue";

const props = defineProps(["photos", "text"]);
</script>

<template>
  <div>
    <div class="media-element2">
      <img
        class="hero__image"
        :src="require(`../assets/images/${props.photos}`)"
      />
    </div>
    <h3 style="text-align: center">{{ props.text }}</h3>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/scroller";
@import "../assets/scss/hero";
@import "../assets/scss/block";
</style>
