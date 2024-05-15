<template>
    <router-link
        v-if="toLink"
        :to="toLink"
        class="min-h-4 w-fit rounded-lg border-2 border-blue-600 px-3 py-3 text-xl transition-all duration-200 lg:px-7 lg:py-4"
        :class="props.innerColor === `blue` ? `bg-blue-600 hover:bg-transparent` : 'bg-transparent hover:bg-blue-600'"
        :title="pathName ? `Go to ${props.pathName}` : 'Go to directed page'"
    >
        <slot />
    </router-link>
</template>
<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

interface Props {
    link?: String
    pathName?: String
    innerColor: 'transparent' | 'blue'
}
const props = defineProps<Props>()

let toLink: RouteLocationRaw | undefined = undefined

try {
    if (!props.link) {
        throw new Error('Link is missing at button component')
    } else {
        toLink = props.link as RouteLocationRaw
    }
} catch (error: unknown) {
    if (error instanceof Error) {
        console.error(error.message)
    } else {
        console.error('An unknown error occurred.')
    }
}
</script>
