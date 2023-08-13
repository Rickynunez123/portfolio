<script setup>
import { defineProps } from "vue";

const props = defineProps(["video", "isWeb", "isIpad", "isIphone"]);
</script>

<template>
  <div class="laptop-container">
    <img
      v-if="props.isWeb"
      class="laptop-size"
      src="../assets/imgContainer/image-laptop.png"
    />
    <img
      v-if="props.isIpad"
      class="ipad-size"
      src="../assets/imgContainer/image-ipad.png"
    />
    <img
      v-if="props.isIphone"
      class="phone-size"
      src="../assets/imgContainer/image-iphone.png"
    />
    <div class="content-container" v-else>
      <img class="phone-size" />
    </div>
    <video
      v-if="!isIphone"
      controls
      autoplay
      class="video-size"
      :src="`https://vwwbxanexhmfobvhltut.supabase.co/storage/v1/object/public/videos/public/${props.video}`"
    ></video>
    <video
      v-else
      controls
      autoplay
      class="video-size-phone"
      :src="`https://vwwbxanexhmfobvhltut.supabase.co/storage/v1/object/public/videos/public/${props.video}`"
    ></video>
  </div>
</template>

<style scoped>
.laptop-size {
  height: 760px;
  position: relative;
}

.phone-size {
  height: 450px;
  position: relative;
}

.ipad-size {
  margin-right: 220px;
  padding-right: -150px;
  padding-left: 220px;
  margin-bottom: 50px;
  height: 450px;
  position: relative;
}

.video-size {
  height: 400px;
  margin-bottom: 50px;
  position: absolute;
}

.video-size-phone {
  height: 340px;
  position: absolute;
}

.laptop-container {
  display: flex;
  width: 100%;
  min-width: auto;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
}
</style>
