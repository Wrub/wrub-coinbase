<template>
    <td class="flex items-center gap-2">
        <img class="h-5 w-5 sm:h-6 sm:w-6" width="24" height="24" :src="iconUrl" :alt="`${coinName} Icon`" loading="lazy" />
        <div class="flex flex-col xl:flex-row xl:gap-2">
            <h3 class="font-bold">{{ coinName }}</h3>
            <h2 class="opacity-50">{{ coinSymbol }}</h2>
        </div>
    </td>
    <td>
        <p class="font-medium">${{ formatNumber(price) }}</p>
    </td>
    <td class="change">
        <p v-if="!priceChanged(change)" class="positive-change">
            <ChevronUpIcon class="hidden sm:block" />
            <span>{{ change }}%</span>
        </p>
        <p v-else class="negative-change">
            <ChevronDownIcon class="hidden sm:block" />
            <span>{{ change }}%</span>
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
td {
    @apply px-2 py-2 sm:px-0;
}
</style>
