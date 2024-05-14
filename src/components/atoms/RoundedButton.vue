<template>
    <router-link
        v-if="toLink"
        :to="toLink"
        class="min-h-4 w-fit rounded-lg border-2 border-blue-600 px-7 py-4 text-xl transition-all duration-200"
        :class="props.innerColor === `blue` ? `bg-blue-600 hover:bg-transparent` : 'bg-transparent hover:bg-blue-600'"
    >
        <slot />
    </router-link>
</template>
<script setup lang="ts">
interface Props {
    link?: String
    innerColor: 'transparent' | 'blue'
}
const props = defineProps<Props>()

let toLink: String | undefined = undefined

try {
    if (!props.link) {
        throw new Error('Link is missing at button component')
    } else {
        toLink = props.link
    }
} catch (error) {
    console.error(error.message)
}
</script>
