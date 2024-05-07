<script async setup lang="ts">
import { onMounted, ref, TransitionGroup, Transition } from 'vue'
import type { Coin } from '@/types/coins.interface'
import { useCoins } from '@/composables/useCoins'
import CoinHero from '@/components/atoms/CoinHero.vue'
const coins = ref<Coin[]>([])

onMounted(async () => {
    try {
        const coinData = await useCoins()
        coins.value = coinData as Coin[]
    } catch (error) {
        console.error('Error fetching coins:', error)
    }
})
</script>

<template>
    <div id="nav-coins" class="flex min-h-14 items-center gap-4 bg-black">
        <ul class="flex w-fit gap-x-24 overflow-hidden">
            <li class="w-fit" :key="coin.uuid" v-for="coin in coins">
                <CoinHero :name="coin.name" :symbol="coin.symbol" :img-url="coin.iconUrl" :url="coin.coinrankingUrl" :price="coin.price" :percentual-change="coin.change" />
            </li>
        </ul>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
