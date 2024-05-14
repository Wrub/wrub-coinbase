<template>
    <CircleLoader :loading-prop="loadingCoins">
        <table class="m-auto w-full text-left text-sm sm:text-base md:w-3/4 2xl:w-full">
            <thead>
                <th>Name</th>
                <th>Price</th>
                <th>24hrs</th>
                <th>Market Cap</th>
                <th class="hidden lg:block">Listed At</th>
            </thead>
            <tbody>
                <tr :key="coin.uuid" v-for="coin in coins">
                    <CoinRow
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
    </CircleLoader>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useCoins } from '@/composables/useCoins'
import type { ICoin } from '@/types/coins.interface'
import { onMounted } from 'vue'
import CircleLoader from '@/components/atoms/CircleLoader.vue'
import CoinRow from '@/components/atoms/CoinRow.vue'
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

<style scoped>
tr {
    border-bottom: 1px solid gray;
}
th {
    padding-bottom: 1rem;
}
</style>
