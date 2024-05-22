<script setup lang="ts">
import { useRouter } from 'vue-router'
import NavBar from './components/organisms/NavBar.vue'
const router = useRouter()
const currentRoute = router.currentRoute
</script>

<template>
    <NavBar v-if="!currentRoute.meta.noNavBar" />
    <router-view />
</template>
