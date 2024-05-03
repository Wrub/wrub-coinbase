<template>
    <button>
        <slot />
    </button>
</template>
<script setup>
const props = defineProps(() => {
    link
})
</script>
<style></style>
