<template>
    <div id="nav-list" class="container flex justify-between">
        <h1 class="text-xl">
            <router-link to="/">Wrub Coinbase</router-link>
        </h1>
        <ul class="flex gap-4">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/coins">Coins</router-link>
            </li>
            <li>
                <router-link to="/login">Login</router-link>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts"></script>
<style scoped>
li .router-link-active {
    @apply font-semibold text-main-blue transition-colors duration-300;
}
</style>
