<script setup>
import { defineProps } from "vue";

const props = defineProps(["icon", "link"]);
</script>

<template>
  <a :href="props.link" target="_blank">
    <img
      class="icon icon--primary icon-container"
      :src="require(`../assets/icons/${props.icon}`)"
    />
  </a>
</template>

<style scoped lang="scss">
@import "../assets/scss/icon";
</style>
