<script setup>
import reviewMain from "../assets/review-mian.svg";
</script>

<template>
  <div class="opening animate__animated animate__fadeOutUp animate__delay-1s" :style="{ backgroundImage: `url(${reviewMain})` }">
  </div>
</template>

<style scoped lang="scss">
.opening {
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
