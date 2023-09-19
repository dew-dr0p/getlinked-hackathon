<script setup lang="ts">
import MainButton from '@/components/MainButton.vue';

</script>

<template>
  <main>
    <section class="grid lg:grid-flow-col container-main border-b border-[rgba(255,_255,_255,_0.18)]">
      <div class="grid items-center">
        <div class="font-bold grid font-['Clash_Display'] text-7xl relative w-fit">
          <img src="/images/creative.png" alt="" class="justify-self-end relative right-36 -mb-4">
          <h3>getlinked Tech</h3>
          <div class="font-bold flex">
            <h3>Hackathon <span class="text-primary3 font-bold">1.0</span></h3>
            <img src="/images/chain.png" alt="" class="h-fit">
            <img src="/images/light.png" alt="" class="h-fit">
          </div>
        </div>
        <p class="text-xl mb-10">Participate in getlinked tech Hackathon 2023 stand <br>
        a chance to win a Big prize</p>
        <MainButton class="w-fit h-fit" />
        <div class="text-6xl font-['Unica_One']">
          <p>00<span class="text-sm font-['Montserrat']">H</span>   00<span class="text-sm font-['Montserrat']">M</span>   00<span class="text-sm font-['Montserrat']">S</span></p>
        </div>
      </div>
      <div class="relative w-full -mx-12 lg:mx-0">
        <img src="/images/image.png" alt="AI image" class="absolute">
        <img src="/images/man-wearing-smart-glasses-touching-virtual-screen-1.png" alt="Man Wearing Smart Glasses Touching Virtual Screen" class="mix-blend-luminosity">
      </div>
    </section>
  </main>
</template>
