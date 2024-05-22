<script setup lang="ts">
import RoundedButton from '@/components/atoms/RoundedButton.vue'
import NavBar from '@/components/organisms/NavBar.vue'
</script>

<template>
    <NavBar />
    <main>
        <section class="container flex min-h-[80vh] flex-col items-center justify-between gap-10 py-10 lg:flex-row lg:gap-0 lg:py-0">
            <div class="flex max-w-lg flex-col gap-4">
                <h2 class="text-5xl font-semibold leading-snug">The Easiest Way To Track Multiple Currencies</h2>
                <h3 class="text-lg text-gray-400">
                    Effortlessly track multiple currencies with crypto portfolio apps. Dive in to see all your coins at a glance.
                </h3>
                <div class="flex gap-4 py-4 text-center lg:gap-8">
                    <RoundedButton
                        class="pointer-events-none opacity-25"
                        aria-disabled="true"
                        :innerColor="`blue`"
                        link="/get-started"
                        pathName="Start using the app"
                        >Get Started</RoundedButton
                    ><RoundedButton link="/coins" :innerColor="`transparent`" pathName="All Coins">View All Coins</RoundedButton>
                </div>
            </div>
            <img src="../assets/img/hero-bg.png" loading="eager" alt="Hero-bg" width="628" height="328" class="object-cover" />
        </section>
    </main>
</template>
