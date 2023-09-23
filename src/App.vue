<script setup lang="ts">
import { onMounted } from 'vue';
import NavBar from './components/NavBar.vue';
import gsap from 'gsap';

let star = gsap.timeline()

onMounted(() => {
    star.from('.star', {
        opacity: 0,
        repeat: -1,
        duration: 1
    })
    star.from('.star-grad', {
        opacity: 0,
        repeat: -1,
        duration: 1,
        delay: 0.5
    }, '<0.5')
    star.from('.star-pu', {
        opacity: 0,
        repeat: -1,
        delay: 0.5,
        duration: 1
    }, '<0.5')
})


</script>

<template>
  <header>
    <NavBar />
  </header>

  <RouterView />

</template>