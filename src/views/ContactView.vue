<script setup lang="ts">
import MainButton from '@/components/MainButton.vue';
import { reactive } from 'vue';
import axios from 'axios';

const baseUrl = 'https://backend.getlinked.ai'

const contactDetails = reactive({
    firstName: '',
    email: '',
    message: ''
})

const onSubmit = () => {
    console.log(contactDetails)
    axios.post(`${baseUrl}/hackathon/contact-form`, {
        'email': contactDetails.email,
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

</script>

<template>
    <main class="container-main">
        <div class="relative">
            <img src="/images/purple-lens-flare.png" alt="Background flare" class="background-flare -z-10 -left-[27rem] -top-80">
            <img src="/images/purple-lens-flare.png" alt="Background flare" class="background-flare -z-10 top-8 -right-[38rem]">
        </div>
        <div class="grid grid-flow-col my-60">
            <div class="grid gap-4">
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
            <form @submit.prevent="onSubmit" class="rounded-xl bg-[rgba(255,_255,_255,_0.03)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] p-20 py-16 grid gap-8 justify-items-center">
                <h5 class="font-['Clash_Display'] justify-self-start text-xl font-semibold text-primary3">Questions or need assistance? <br> Let us know  about it!</h5>
                <input v-model="contactDetails.firstName" type="text" placeholder="First Name" class="border border-white rounded bg-[rgba(255,_255,_255,_0.03)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] placeholder:text-white p-3 pl-7 w-full" />
                <input v-model="contactDetails.email" type="email" placeholder="Mail" class="border border-white rounded bg-[rgba(255,_255,_255,_0.03)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] placeholder:text-white p-3 pl-7 w-full" />
                <textarea v-model="contactDetails.message" rows="5" placeholder="Message" class="border border-white rounded bg-[rgba(255,_255,_255,_0.03)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] placeholder:text-white p-3 pl-7 w-full" ></textarea>
                <MainButton text="Submit" class="w-fit" />
            </form>
        </div>
    </main>
</template>