<template>
    <div>
        <div v-if="loadingProp" class="flex h-full items-center justify-center">
            <div class="loader h-16 w-16 rounded-full border-8 border-t-8 border-gray-600 ease-linear"></div>
        </div>
        <div v-else>
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    loadingProp: Boolean
})
</script>

<style scoped>
.loader {
    @apply border-t-blue-400;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
