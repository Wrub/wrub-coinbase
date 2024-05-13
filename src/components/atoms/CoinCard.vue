<template>
    <td class="flex items-center gap-2">
        <img width="28" height="28" :src="iconUrl" :alt="`${coinName} Icon`" />
        <div class="flex flex-col xl:flex-row xl:gap-2">
            <h3 class="font-bold">{{ coinName }}</h3>
            <h2 class="opacity-50">{{ coinSymbol }}</h2>
        </div>
    </td>
    <td>
        <p class="font-semibold">${{ formatNumber(price) }}</p>
    </td>
    <td class="change">
        <p v-if="priceChanged(change)" class="text-green-400">
            <ChevronUpIcon />
            <span>{{ change }}</span>
        </p>
        <p v-else class="text-red-400">
            <ChevronDownIcon />
            <span>{{ change }}</span>
        </p>
    </td>
    <td>
        <p>${{ formatNumber(marketCap) }}</p>
    </td>
    <td class="hidden lg:block">
        <p>{{ formatNumber(listedAt) }}</p>
    </td>
</template>

<script lang="ts" setup>
import formatNumber from '@/composables/useFormatNumber'
import { priceChanged } from '@/composables/usePriceChange'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/solid'

interface Props {
    coinName: string
    coinSymbol: String
    price: string
    iconUrl: string
    marketCap: string
    change: string
    listedAt: Number
}

defineProps<Props>()
</script>

<style scoped>
.change p {
    @apply flex flex-row items-center gap-1;
}
.change svg {
    @apply h-4 w-4;
}
</style>
