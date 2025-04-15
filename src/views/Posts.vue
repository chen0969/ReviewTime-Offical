<script setup>
import { ref, onMounted } from "vue";
import { ALL_POSTS_API_URL } from "../utils/api.js";
import Loader from "../components/Loader.vue";
import { useFetch } from "@vueuse/core";
import { RouterLink } from "vue-router";

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
    <div v-else class="row animate__animated animate__fadeIn">
      <h1 class="col-12 text-center">Movie Reviews!</h1>
      <hr>
      <ul>
        <RouterLink :to="`/singlepost/${post.documentId}`" v-for="post in posts">
          <li>{{ post.title }}</li>
        </RouterLink>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>