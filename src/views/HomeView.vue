<script setup lang="ts">
import RoundedButton from '@/components/atoms/RoundedButton.vue'
</script>

<template>
    <main>
        <section class="container flex min-h-[80vh] items-center justify-between">
            <div class="flex max-w-lg flex-col gap-4">
                <h2 class="text-5xl font-semibold leading-snug">The Easiest Way To Track Multiple Currencies</h2>
                <h3 class="text-lg text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorum nemo molestiae. Possimus quasi omnis qui.
                </h3>
                <div class="flex gap-8 py-4">
                    <RoundedButton :innerColor="`blue`" link="/">Get Started</RoundedButton
                    ><RoundedButton link="/coins" :innerColor="`transparent`">View All Coins</RoundedButton>
                </div>
            </div>
            <img src="../assets/img/hero-bg.png" loading="eager" alt="Hero-bg" width="628" height="328" class="object-cover" />
        </section>
    </main>
</template>
