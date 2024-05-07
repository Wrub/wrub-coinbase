<template>
    <button
        class="min-h-4 w-fit rounded-lg border-2 border-blue-600 px-7 py-4 text-xl transition-all duration-200"
        :class="props.innerColor === `blue` ? `bg-blue-600 hover:bg-transparent` : 'bg-transparent hover:bg-blue-600'"
    >
        <slot />
    </button>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
    link: String,
    innerColor: {
        type: String,
        default: 'transparent',
        validator: (value: String) => ['transparent', 'blue'].includes(value)
    }
})
</script>
