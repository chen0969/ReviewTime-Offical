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
            <div class="col-md-5">
                <img class="w-100" :src="post.movie_poster?.url" alt="movie poster"/>
            </div>
            <div class="col-md-7">
                <h1>{{ post.title }}</h1>
                <div class="row">
                    <h3 class="col-6 text-success">Rate: {{ post.rate }}</h3>
                    <h3 class="col-6 text-secondary">Category: {{ post.movie_category }}</h3>
                    <h5 class="col-6 text-secondary">Created at: {{ post.createdAt }}</h5>
                    <hr>
                </div>

                <div class="container" v-html="post.content"></div>
            </div>
        </div>
    </div>
</template>

<style></style>