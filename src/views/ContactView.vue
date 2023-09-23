<script setup lang="ts">
import MainButton from '@/components/MainButton.vue';
import { onMounted, reactive } from 'vue';
import axios from 'axios';
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import gsap from 'gsap';

let star = gsap.timeline()

onMounted(() => {
    star.from('.star', {
        opacity: 0,
        repeat: -1,
        repeatDelay: 0.5,
        duration: 1.5
    })
    star.from('.star-grad', {
        opacity: 0,
        repeat: -1,
        duration: 1.5,
        // delay: 1.5,
        repeatDelay: 0.5
    }, '<0.5')
    star.from('.star-pu', {
        opacity: 0,
        repeat: -1,
        // delay: 0.5,
        repeatDelay: 0.5,
        duration: 1.5,
    }, '<0.5')
})

const baseUrl = 'https://backend.getlinked.ai'

const contactDetails = reactive({
    firstName: '',
    email: '',
    message: ''
})

// watch((v$.value.$error), () => {
//     gsap.from('.bounce', {
//         y: -200,
//         duration: 1.5,
//         ease: 'bounce-out',
//         repeat: 3
//     })
// })

const onSubmit = async () => {
    v$.value.$touch()
    await v$.value.$validate()
    gsap.from('.bounce', {
        y: -10,
        duration: 1.5,
        ease: 'bounce.out',
        // repeat: 1,
        // yoyo: true,
        stagger: {
            each: 0.3,
            repeat: 5,
            repeatDelay: 5
            // ease: 'bounce.out'
        }
    })
    document.getElementsByClassName('.bounce')
    console.log(contactDetails, v$)
    if (!v$.value.$error) {
        axios
        .post(`${baseUrl}/hackathon/contact-form`, {
            'email': contactDetails.email,
            'phone_number': null,
            'first_name': contactDetails.firstName,
            'message': contactDetails.message
        })
        .then((res) => {
            console.log(res.data)
            contactDetails.firstName = ''
            contactDetails.email = ''
            contactDetails.message = ''
        }).catch((err) => {
            console.log(err.message)
        })
    }
}

const rules = {
    firstName: { required },
    email: { required, email },
    message: { required }
}

const v$ = useVuelidate(rules, contactDetails)

</script>

<template>
    <main class="container-main">
        <div class="relative">
            <img src="/images/purple-lens-flare.png" alt="Background flare" class="background-flare -z-10 -left-24 md:-left-52 lg:-left-[27rem] -top-48 lg:-top-80">
            <img src="/images/purple-lens-flare.png" alt="Background flare" class="background-flare -z-10 top-8 -right-[38rem]">
        </div>
        <div class="grid lg:grid-flow-col relative my-10 lg:my-28">
            <img src="/images/star-grad.png" alt="Gradient Star" class="absolute star-grad -top-8 left-4">
            <img src="/images/star.png" alt="Star" class="absolute star opacity-50 -top-14 right-7">
            <img src="/images/star.png" alt="Star" class="absolute star bottom-52 lg:bottom-0 right-2 lg:-right-14">
            <img src="/images/star-pu.png" alt="Star" class="absolute star-pu bottom-32 -left-3 lg:left-[30rem] w-3 lg:w-auto">
            <div class="lg:grid gap-4 mt-14 h-fit hidden">
                <h3 class="font-['Clash_Display'] text-3xl font-semibold text-primary3">Get in touch</h3>
                <p>Contact <br>
                Information</p>
                <p>27,Alara Street <br>
                Yaba 100012 <br>
                Lagos State</p>
                <p>Call Us : 07067981819</p>
                <p>we are open from Monday-Friday <br>
                08:00am - 05:00pm</p>
                <div class="grid gap-4 mt-5">
                    <h5 class="text-primary3">Share on</h5>
                    <div class="flex gap-4">
                        <img src="/images/instagram.svg" alt="Instagram Logo">
                        <img src="/images/x.svg" alt="X Logo">
                        <img src="/images/facebook.svg" alt="Facebook Logo">
                        <img src="/images/linkedin.svg" alt="Linkedin Logo">
                    </div>
                </div>
            </div>
            <form @submit.prevent="onSubmit" class="rounded-xl lg:bg-[rgba(255,_255,_255,_0.03)] lg:shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] lg:p-20 py-8 lg:py-16 grid gap-8 justify-items-center">
                <h5 class="font-['Clash_Display'] justify-self-start text-xl font-semibold text-primary3">Questions or need assistance? <br> Let us know  about it!</h5>
                <p class="lg:hidden text-xs justify-self-start">Email us below to any question related to our event</p>
                <input v-model="contactDetails.firstName" type="text" placeholder="First Name" class="border border-white rounded bg-[rgba(255,_255,_255,_0.03)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] placeholder:text-white p-3 pl-7 w-full focus-visible:outline-none" :class="v$.firstName.$error ? 'ring-red-500 ring-2 bounce border-none' : ''" />
                <input v-model="contactDetails.email" type="email" placeholder="Mail" class="border border-white rounded bg-[rgba(255,_255,_255,_0.03)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] placeholder:text-white p-3 pl-7 w-full focus-visible:outline-none" :class="v$.email.$error ? 'ring-red-500 ring-2 bounce border-none' : ''" />
                <textarea v-model="contactDetails.message" rows="5" placeholder="Message" class="border border-white rounded bg-[rgba(255,_255,_255,_0.03)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] placeholder:text-white p-3 pl-7 w-full focus-visible:outline-none" :class="v$.message.$error ? 'ring-red-500 ring-2 bounce border-none' : ''" ></textarea>
                <MainButton text="Submit" class="w-fit" />
                <div class="grid gap-4 mt-5 lg:hidden justify-items-center">
                    <h5 class="text-primary3">Share on</h5>
                    <div class="flex gap-4">
                        <img src="/images/instagram.svg" alt="Instagram Logo">
                        <img src="/images/x.svg" alt="X Logo">
                        <img src="/images/facebook.svg" alt="Facebook Logo">
                        <img src="/images/linkedin.svg" alt="Linkedin Logo">
                    </div>
                </div>
            </form>
        </div>
    </main>
</template>