<script setup>
import { ref, watch } from 'vue';

const searchQuery = ref('');
const emit = defineEmits(['search']);

const onSearch = () => {
  emit('search', searchQuery.value);
};
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="search-bar">
                <input v-model="searchQuery" @input="onSearch" type="text" placeholder="Search movie name..." class="w-100"/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
