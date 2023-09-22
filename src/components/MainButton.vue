<script setup lang="ts">
defineProps<{
    text?: string
}>()
</script>

<template>
    <button class="rounded py-4 px-14 bg-gradient-to-br from-gradient-1 via-primary3 via-[56.42%] to-[#FF26B9]" :class="text ? 'py-2 px-4 md:py-3 md:px-10 lg:py-4 lg:px-14' : '' ">{{ text ? text : 'Register' }}</button>
</template>