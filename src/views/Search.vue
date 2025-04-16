<script setup>
import { ref, computed, onMounted } from 'vue';
import { useFetch } from '@vueuse/core';
import { ALL_POSTS_API_URL } from '../utils/api.js';
import SearchBar from '../components/SearchBar.vue';
import Loader from "../components/Loader.vue";

const posts = ref([]);
const searchTerm = ref('');

const fetchPosts = async () => {
    const { data } = await useFetch(ALL_POSTS_API_URL).json();
    posts.value = data.value.data;
};

const handleSearch = (term) => {
    searchTerm.value = term;
};

const filteredPosts = computed(() =>
    posts.value.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.value.toLowerCase())
    )
);

onMounted(() => {
    fetchPosts();
});
</script>

<template>
    <div class="container">
        <div class="row">
            <h1 class="col-12 text-center">Find the movie</h1>
        </div>
        <div class="row">
            <SearchBar class="col-12 text-center" @search="handleSearch" />
        </div>
        <hr>
        <Loader v-if="isLoading" class="row p-5 animate__animated animate__fadeIn" />
        <div v-else class="row">
            <ul class="col-12 text-center">
                <RouterLink :to="`/singlepost/${post.documentId}`" v-for="post in filteredPosts" class="o-link">
                    <li class="o-link">{{ post.title }}</li>
                </RouterLink>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
