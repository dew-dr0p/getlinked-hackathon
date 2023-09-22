<script setup lang="ts">
defineProps<{
    title: string,
    subtitle: string
}>()
</script>

<template>
    <h3 class="text-3xl font-bold font-['Clash_Display']">{{ title }} <br><span class="text-primary3 font-bold">{{ subtitle }}</span></h3>
</template>