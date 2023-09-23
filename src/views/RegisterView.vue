<script setup lang="ts">
import MainButton from '@/components/MainButton.vue';
import useVuelidate from '@vuelidate/core';
import { email, maxLength, numeric, required } from '@vuelidate/validators';
import axios from 'axios';
import gsap from 'gsap';
import { onMounted, reactive, ref } from 'vue';

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

const baseUrl = 'https://backend.getlinked.ai'

const categories = ref([])

const successful = ref(false)

axios
.get(`${baseUrl}/hackathon/categories-list`)
.then(res => {
    console.log(res.data)
    categories.value = res.data
})
.catch(err => console.log(err))
.finally(() => console.log(categories.value))

const details = reactive({
    teamName: null,
    phone: null,
    email: null,
    topic: null,
    category: null,
    size: null,
    accept: false
})

const rules = {
    teamName: { required },
    phone: { required, numeric, maxLength: maxLength(11) },
    email: { required, email },
    topic: { required },
    category: { required },
    size: { required }
}

const v$ = useVuelidate(rules, details)

const reset = () => {
    details.accept = false
    details.category = null
    details.email = null
    details.phone = null
    details.size = null
    details.teamName = null
    details.topic = null
}

const submit = () => {
    v$.value.$touch()
    v$.value.$validate()
    if (!v$.value.$error) {
        console.log(details)
        axios.post(`${baseUrl}/hackathon/registration`, {
            "email": details.email,
            "phone_number": String(details.phone),
            "team_name": details.teamName,
            "group_size": details.size,
            "project_topic": details.topic,
            "category": details.category,
            "privacy_poclicy_accepted": details.accept
        })
        .then(res => {
            console.log(res.data, res)
            reset()
            v$.value.$reset()
            res.statusText == 'Created' ? successful.value = true : null
        })
        .catch(err => console.log(err))
    }
}

</script>

<template>
    <main class="container-main lg:pl-0" style="@media (min-width: 1024px) {
    padding-left: 0px;
}">
        <div class="relative">
            <img src="/images/purple-lens-flare.png" alt="Background flare" class="background-flare -left-64 -top-60 -z-10">
        </div>
        <div class="grid lg:grid-flow-col py-16 items-center">
            <div class="relative">
                <img src="/images/star-grad.png" alt="Gradient Star" class="absolute star-grad left-32 top-12 w-5">
                <img src="/images/star.png" alt="Star" class="absolute star opacity-50 left-36 bottom-6 w-6">
                <img src="/images/star-pu.png" alt="Star" class="absolute star-pu right-24 bottom-36 w-6">
                <img src="/images/graphic-designer-showing-thumbs-up.png" alt="Graphic designer showing thumbs up">
            </div>
            <form @submit.prevent="submit" class="rounded-xl lg:bg-[rgba(255,_255,_255,_0.03)] lg:shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] lg:p-20 py-16 grid gap-12 justify-items-center relative">
                <img src="/images/purple-lens-flare.png" alt="Background flare" class="background-flare left-60 top-28 -z-10">
                <img src="/images/star.png" alt="Star" class="absolute star top-4 right-52 opacity-50">
                <img src="/images/star.png" alt="Star" class="absolute star -bottom-3 right-24 w-2">
                <h5 class="font-['Clash_Display'] justify-self-start text-xl font-semibold text-primary3">Register</h5>
                <div class="grid gap-3 md:gap-5 h-fit">
                    <div class="flex h-fit gap-2 items-end">
                        <p class="lg:text-sm text-xs">Be part of this movement</p>
                        <div class="flex px-1 md:px-3 border-b border-dotted border-primary3 h-fit">
                            <img src="/images/woman-movement.png" alt="Woman">
                            <img src="/images/man-movement.png" alt="Man" class="-ml-3">
                        </div>
                    </div>
                    <h5 class="md:text-2xl text-xl">CREATE YOUR ACCOUNT</h5>
                    <div class="grid lg:grid-cols-2 gap-4 md:gap-8 mt-3">
                        <div class="grid gap-1 md:gap-3 lg:text-sm text-xs">
                            <label>Team’s Name</label>
                            <input v-model="details.teamName" type="text" placeholder="Enter the name of your group" class="rounded border border-white bg-[rgba(255,_255,_255,_0.03)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] placeholder:text-[rgba(255,_255,_255,_0.25)] focus-visible:outline-none p-7 py-3 md:py-4" :class="v$.teamName.$error ? 'ring-red-500 ring-2 bounce border-none' : ''">
                        </div>
                        <div class="grid gap-1 md:gap-3  lg:text-sm text-xs">
                            <label>Phone</label>
                            <input maxlength=11 v-model="details.phone" type="number" placeholder="Enter your phone number" class="rounded border border-white bg-[rgba(255,_255,_255,_0.03)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] placeholder:text-[rgba(255,_255,_255,_0.25)] focus-visible:outline-none p-7 py-3 md:py-4" :class="v$.phone.$error ? 'ring-red-500 ring-2 bounce border-none' : ''">
                        </div>
                        <div class="grid gap-1 md:gap-3  lg:text-sm text-xs">
                            <label>Email</label>
                            <input v-model="details.email" type="email" placeholder="Enter your email address" class="rounded border border-white bg-[rgba(255,_255,_255,_0.03)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] placeholder:text-[rgba(255,_255,_255,_0.25)] focus-visible:outline-none p-7 py-3 md:py-4" :class="v$.email.$error ? 'ring-red-500 ring-2 bounce border-none' : ''">
                        </div>
                        <div class="grid gap-1 md:gap-3  lg:text-sm text-xs">
                            <label>Project Topic</label>
                            <input v-model="details.topic" type="text" placeholder="What is your group project topic" class="rounded border border-white bg-[rgba(255,_255,_255,_0.03)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] placeholder:text-[rgba(255,_255,_255,_0.25)] focus-visible:outline-none p-7 py-3 md:py-4" :class="v$.topic.$error ? 'ring-red-500 ring-2 bounce border-none' : ''">
                        </div>
                        <div class="grid gap-1 md:gap-3  lg:text-sm text-xs">
                            <label>Category</label>
                            <select v-model="details.category" class="rounded border border-white bg-[rgba(255,_255,_255,_0.03)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] focus-visible:outline-none p-7 py-4" :class="v$.category.$error ? 'ring-red-500 ring-2 bounce border-none' : ''">
                                <option :value="null">Select your category</option>
                                <option v-for="category in categories" :key="(category as any).id" :value="(category as any).id">{{ category['name'] }}</option>
                            </select>
                        </div>
                        <div class="grid gap-1 md:gap-3  lg:text-sm text-xs">
                            <label>Group Size</label>
                            <input v-model="details.size" type="number" placeholder="Enter your group size" class="rounded border border-white bg-[rgba(255,_255,_255,_0.03)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] placeholder:text-[rgba(255,_255,_255,_0.25)] focus-visible:outline-none p-7 py-3 md:py-4" :class="v$.size.$error ? 'ring-red-500 ring-2 bounce border-none' : ''">
                            <!-- <select v-model="details.size" class="rounded border border-white bg-[rgba(255,_255,_255,_0.03)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] focus-visible:outline-none p-7 py-4" :class="v$.size.$error ? 'ring-red-500 ring-2 bounce border-none' : ''">
                                <option value="null">Select</option>
                            </select> -->
                        </div>
                    </div>
                    <div class="grid gap-4">
                        <p class="md:text-xs text-[0.5rem] italic text-gradient-3">Please review your registration details before submitting</p>
                        <div class="flex gap-3 items-start">
                            <input v-model="details.accept" type="checkbox" class="rounded-sm border border-white bg-[rgba(255,_255,_255,_0.03)] focus-visible:outline-none">
                            <label class="md:text-sm text-xs">I agreed with the event terms and conditions  and privacy policy</label>
                        </div>
                    </div>
                    <MainButton :disable="details.accept ? false : true " text="Register Now" />
                </div>
            </form>
        </div>
        <div v-if="successful" class="bg-[rgba(21,_14,_40,_0.93)] w-screen h-screen absolute z-10 top-0 left-0 grid place-items-center text-center container-main">
            <div class="rounded border border-primary3 bg-[rgba(255,_255,_255,_0.01)] relative p-9 lg:p-16 justify-items-center grid gap-5">
                <img src="/images/star-pu.png" alt="Star" class="absolute star-pu -top-5 -right-5 w-2 md:w-6">
                <img src="/images/star-grad.png" alt="Gradient Star" class="absolute star-grad -bottom-5 md:bottom-5 right-8 md:right-12 w-3 md:w-5">
                <div class="flex relative -mr-20 md:-mr-32">
                    <img src="/images/star.png" alt="Star" class="absolute star -left-11 md:-left-44 top-48 opacity-50 w-4 md:w-6">
                    <img src="/images/done.png" alt="" class="absolute -z-10 -left-20 md:-left-32 -top-2 md:-top-4 w-44 md:w-auto">
                    <img src="/images/successful.png" alt="" class="w-48 md:w-auto">
                </div>
                <p class="font-semibold text-base md:text-3xl">Congratulations <br>
                you have successfully Registered!</p>
                <p class="font-semibold text-xs md:text-sm">Yes, it was easy and you did it! <br>
                check your mail box for next step</p>
                <MainButton @click="() => successful = false" text="Back" class="w-full mt-3" />
            </div>
        </div>
    </main>
</template>