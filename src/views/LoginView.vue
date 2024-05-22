<template>
    <main class="loginBg">
        <NavLinks class="pt-4" />
        <section class="container h-screen content-center">
            <div
                class="relative m-auto h-screen rounded-xl border-0 border-columbia-blue px-4 py-14 text-columbia-blue lg:h-fit lg:min-h-[50vh] lg:w-[22vw] lg:border-2 lg:p-8 lg:shadow-2xl lg:shadow-columbia-blue"
            >
                <h1 class="mb-4 text-3xl font-bold">Login</h1>
                <div>
                    <form @submit.prevent="login">
                        <div class="flex flex-col items-center">
                            <div class="flex w-fit flex-col gap-5">
                                <div class="input-control">
                                    <label for="username">Username</label>
                                    <input type="text" id="username" placeholder="Insert your Username" required v-model="formData.username" />
                                </div>
                                <div class="input-control">
                                    <label for="password">Password</label>
                                    <input type="password" id="password" placeholder="Insert your Password" required v-model="formData.password" />
                                </div>
                                <span class="my-5 text-sm text-stone-500">Please, get user through the documentation</span>
                            </div>
                            <button
                                class="absolute bottom-16 my-12 rounded-md border-2 border-columbia-blue px-10 py-1.5 text-white shadow shadow-main-blue transition-colors duration-150 active:bg-columbia-blue active:text-black active:shadow-none lg:bottom-10"
                                type="submit"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </main>
</template>

<script lang="ts" setup>
import NavLinks from '@/components/molecules/NavLinks.vue'
import router from '@/router'
import axios from 'axios'
import { ref } from 'vue'

const login = async () => {
    console.log(formData.value)

    try {
        const response = await axios.post('http://localhost:8080/api/auth/login', {
            username: formData.value.username,
            password: formData.value.password
        })
        localStorage.setItem('token', response.data.access_token)
        router.push('/dashboard')
    } catch (error) {
        alert('Login Failed:' + error)
    }
}

const formData = ref({
    username: '',
    password: ''
})
</script>

<style scoped>
.loginBg {
    background: rgb(3, 9, 32);
    background: -moz-linear-gradient(180deg, rgba(3, 9, 32, 1) 95%, rgba(32, 99, 236, 1) 100%);
    background: -webkit-linear-gradient(180deg, rgba(3, 9, 32, 1) 95%, rgba(32, 99, 236, 1) 100%);
    background: linear-gradient(180deg, rgba(3, 9, 32, 1) 95%, rgba(32, 99, 236, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#030920",endColorstr="#2063ec",GradientType=1);
}
.input-control {
    @apply flex flex-col;
}
label {
    @apply w-fit cursor-pointer py-1 text-sm font-bold;
}
input {
    @apply h-10 w-64 rounded-sm bg-transparent bg-white bg-opacity-15 px-2 focus-visible:outline-none;
}
</style>
