<script setup>
import { ref, onMounted } from "vue";
import { SINGLE_POST_API_URL } from "../utils/api.js";
import Loader from "../components/Loader.vue";
import { useRoute } from "vue-router";
import { useFetch } from "@vueuse/core";

// set inti
const post = ref([]);
const isLoading = ref(true);

const route = useRoute();
const postDocId = route.params.documentId || null;

// fetch all
const fetchPost = async () => {
    const { data } = await useFetch(SINGLE_POST_API_URL(postDocId)).json();
    post.value = data.value.data;
    isLoading.value = false;
    console.log(post);
}

onMounted(() => {
    fetchPost();
});

</script>

<template>
    <div class="container">
        <Loader v-if="isLoading" class="row p-5 animate__animated animate__fadeIn" />
        <div v-else class="row animate__animated animate__fadeIn">
            <h1>The post title: {{ post.title }}</h1>
            <a :href="post.movie_poster?.url">check the poster</a>
            <div class="container" v-html="post.content"></div>
        </div>
    </div>
</template>

<style></style>