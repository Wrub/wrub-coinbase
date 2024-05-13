<template>
    <div v-if="loadingCoins">
        <span>Loading Coins</span>
    </div>
    <table v-else class="m-auto w-full text-left md:w-3/4 2xl:w-full">
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>24hrs</th>
                <th>Market Cap</th>
                <th class="hidden lg:block">Listed At</th>
            </tr>
        </thead>
        <tbody>
            <tr :key="coin.uuid" v-for="coin in coins">
                <CoinCard
                    :coin-name="coin.name"
                    :coin-symbol="coin.symbol"
                    :icon-url="coin.iconUrl"
                    :price="coin.price"
                    :change="coin.change"
                    :market-cap="coin.marketCap"
                    :listed-at="coin.listedAt"
                />
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import CoinCard from '@/components/atoms/CoinCard.vue'
import { useCoins } from '@/composables/useCoins'
import type { ICoin } from '@/types/coins.interface'
import { onMounted } from 'vue'
const coins = ref<ICoin[]>([])
const loadingCoins = ref(true)

onMounted(async () => {
    try {
        const coinData = await useCoins()
        coins.value = coinData as ICoin[]
        loadingCoins.value = false
    } catch (error) {
        console.error('Error fetching coins:', error)
    }
})
</script>
