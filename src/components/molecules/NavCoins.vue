<script async setup lang="ts">
import { onMounted, ref } from 'vue'
import Swiper from 'swiper'
import 'swiper/css'
import type { ICoin } from '@/types/coins.interface'
import { useCoins } from '@/composables/useCoins'
import CoinHero from '@/components/atoms/CoinHero.vue'
import { Autoplay } from 'swiper/modules'

const coins = ref<ICoin[]>([])

const swiper = new Swiper('.swiper', {
    modules: [Autoplay],
    autoplay: true,
    grabCursor: true,
    freeMode: true
})

onMounted(async () => {
    try {
        const coinData = await useCoins()
        coins.value = coinData as ICoin[]
    } catch (error) {
        console.error('Error fetching coins:', error)
    }
})
</script>

<template>
    <div id="nav-coins" class="flex min-h-14 items-center gap-4 bg-black">
        <div class="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" :key="coin.uuid" v-for="coin in coins">
                    <CoinHero :name="coin.name" :symbol="coin.symbol" :img-url="coin.iconUrl" :url="coin.coinrankingUrl" :price="coin.price" :percentual-change="coin.change" />
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.swiper {
    width: 100%;
    display: flex;
}
.swiper-slide {
    width: fit-content;
}
</style>
