<script setup>
import { RouterLink } from "vue-router";
import reviewIcon from "../assets/review-icon.svg";
</script>

<template>
    <header class="container p-3">
        <div class="row">
            <RouterLink :to="'/'" class="col-12 text-center">
                <img :src="reviewIcon" alt="small logo">
            </RouterLink>
        </div>
        <div class="row justify-content-center">
            <RouterLink :to="'/'" class="col-3 text-center">
                <button class="btn btn-gray">HOME</button>
            </RouterLink>
            <RouterLink :to="'/search'" class="col-3 text-center">
                <button class="btn btn-gray">SEARCH</button>
            </RouterLink>
        </div>
    </header>
</template>

<style scoped lang="scss">
</style>
