<script setup lang="ts">
import formatNumber from '@/composables/useFormatNumber'
import { priceChanged } from '@/composables/usePriceChange'
defineProps({
    name: String,
    symbol: String,
    url: String,
    imgUrl: String,
    price: String,
    percentualChange: String
})
</script>

<template>
    <a class="flex w-fit min-w-40 flex-row justify-between gap-1 py-3" :href="url" target="_blank">
        <div class="flex gap-2">
            <img class="object-contain" width="28" height="28" :src="imgUrl" :alt="`${name} coin logo`" />
            <div>
                <p class="font-semibold">{{ symbol }}</p>
                <p class="max-w-20 overflow-hidden text-ellipsis text-nowrap text-xs">{{ name }}</p>
            </div>
        </div>
        <div>
            <p class="font-semibold">${{ formatNumber(price) }}</p>
            <p v-if="percentualChange && priceChanged(percentualChange)" class="negative-change text-sm">{{ percentualChange }}</p>
            <p v-else class="negative-change text-sm">{{ percentualChange }}</p>
        </div>
    </a>
</template>
