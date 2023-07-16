<script setup>
import { defineProps } from "vue";

const props = defineProps(["video"]);
</script>

<template>
  <div class="laptop-container">
    <img class="laptop-size" src="../assets/imgContainer/image-laptop.png" />
    <video
      controls
      autoplay
      class="video-size"
      :src="`https://vwwbxanexhmfobvhltut.supabase.co/storage/v1/object/public/videos/public/${props.video}`"
    ></video>
  </div>
</template>

<style scoped>
.laptop-size {
  height: 760px;
  position: relative;
}

.video-size {
  height: 400px;
  margin-bottom: 50px;
  position: absolute;
}

.laptop-container {
  display: flex;
  width: 100%;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
}
</style>
