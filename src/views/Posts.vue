<script setup>
import { ref, onMounted } from "vue";
import { ALL_POSTS_API_URL } from "../utils/api.js";
import Loader from "../components/Loader.vue";
import { useFetch } from "@vueuse/core";
import { RouterLink } from "vue-router";
import WelcomeLoader from "../components/WelcomeLoader.vue";

// set inti
const posts = ref([]);
const isLoading = ref(true);

// fetch all
const fetchPosts = async () => {
  const { data } = await useFetch(ALL_POSTS_API_URL).json();
  posts.value = data.value.data;
  isLoading.value = false;
}

onMounted(() => {
  fetchPosts();
});

console.log(posts);
</script>

<template>
  <div class="container">
    <Loader v-if="isLoading" class="row p-5 animate__animated animate__fadeIn" />
    <div v-else class="row flex-column align-items-center animate__animated animate__fadeIn">
      <h1 class="col-md-6 text-center">Review Time!</h1>
      <h3 class="col-md-6 text-center text-secondary">Let's see the fresh review of the popular movie & shows!</h3>
      <hr>
      <ul class="col-md-6">
        <RouterLink :to="`/singlepost/${post.documentId}`" v-for="post in posts" class="o-link">
          <li class="o-link"> <span class="o-poster" :style="{ backgroundImage: `url(${post.movie_poster?.url})` }"></span> {{ post.title }}</li>
          <hr>
        </RouterLink>
      </ul>
    </div>
  </div>
  <WelcomeLoader />
</template>

<style scoped lang="scss">
.o-poster {
  background-size: cover;
  width: 5rem;
  height: 5rem;
  border-radius: 5px; 
  margin-right: 10px; 
  display: inline-block; 
}
</style>