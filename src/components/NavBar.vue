<script setup lang="ts">
import MainButton from './MainButton.vue';

import { ref } from 'vue'

const navMenu = ref(false)

const showNavMenu = () => {
  navMenu.value = !navMenu.value
}
</script>

<template>
    <div class="grid grid-flow-col items-center justify-between container-main pt-8 md:pt-12 lg:pt-16 pb-6" :class="navMenu ? '' : 'section-border'">
        <RouterLink v-if="!navMenu" to="/" class="text-4xl font-['Clash_Display'] font-bold">get<span class="text-primary3">linked</span></RouterLink>
        <div v-if="navMenu" class="w-10"></div>
        <nav class="lg:grid grid-flow-col items-center gap-14 hidden">
            <p>Timeline</p>
            <p>Overview</p>
            <p>FAQs</p>
            <RouterLink to="/contact">Contact</RouterLink>
            <RouterLink to="/register"><MainButton /></RouterLink>
        </nav>
        <img v-if="!navMenu" @click="showNavMenu" src="/images/menu.svg" alt="NavBar Menu" class="block lg:hidden">
        <!-- <img v-else @click="showNavMenu" src="/images/close.svg" alt="Close NavBar Menu" class="block lg:hidden p-2 rounded-full border-4 border-solid" style="background: linear-gradient(#fff, #fff) padding-box, linear-gradient(to bottom right, #903AFF, #FF26B9) border-box; "> -->
        <div v-else @click="showNavMenu" class="block lg:hidden justify-self-end rounded-full bg-primary1 before:content-[''] before:absolute before:-z-[1] before:bg-gradient-to-br before:from-gradient-1 before:to-gradient-3 before:w-[120%] before:h-[120%] before:-left-[10%] before:-top-[10%] before:rounded-full relative">
            <img src="/images/close.svg" alt="Close NavBar Menu" class=" p-2">
        </div>
    </div>
    <nav v-if="navMenu" class="grid lg:hidden justify-center text-lg font-medium items-center gap-6 p-6 py-12">
        <p>Timeline</p>
        <p>Overview</p>
        <p>FAQs</p>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/register"><MainButton /></RouterLink>
    </nav>
</template>

<style scoped>
.router-link-active {
    background: linear-gradient(90deg, #903AFF 3.08%, #FF26B9 93.85%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>