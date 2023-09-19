<template>
    <div class="bg-footer grid gap-14 py-16 container-main text-xs relative">
        <img src="/images/star.png" alt="Star" class="absolute lg:top-24 top-36 left-6 lg:left-16">
        <img src="/images/star-grad.png" alt="Star Gradient" class="absolute scale-50 md:scale-100 bottom-24 left-1/2">
        <img src="/images/star.png" alt="Star" class="absolute top-96 lg:top-24 right-44 lg:right-[30rem] opacity-50">
        <img src="/images/star.png" alt="Star" class="absolute scale-50 md:scale-100 bottom-48 md:bottom-36 xl:bottom-20 right-16 lg:right-32">
        <div class="grid lg:grid-flow-col gap-16 lg:gap-20 xl:gap-36">
            <div class="grid gap-10 h-fit">
                <div class="grid gap-4">
                    <RouterLink to="/" class="text-4xl font-['Clash_Display'] font-bold">get<span class="text-primary3">linked</span></RouterLink>
                    <p >Getlinked Tech Hackathon is a technology innovation program 
                    established by a group of organizations with the aim of showcasing 
                    young and talented individuals in the field of technology</p>
                </div>
                <div class="grid grid-flow-col gap-4 w-fit">
                    <p class="border-r border-primary3 pr-4">Terms of Use</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
            <div class="grid gap-3 h-fit">
                <h6 class="text-sm font-semibold text-primary3">Useful Links</h6>
                <p>Overview</p>
                <p>Timeline</p>
                <p>FAQs</p>
                <p>Register</p>
                <div class="grid grid-flow-col gap-4 items-end h-fit w-fit">
                    <p class="text-primary3">Follow us</p>
                    <img src="/images/instagram.svg" alt="Instagram Icon">
                    <img src="/images/x.svg" alt="X Icon">
                    <img src="/images/facebook.svg" alt="Facebook Icon">
                    <img src="/images/linkedin.svg" alt="Linkedin Icon">
                </div>
            </div>
            <div class="grid gap-4 h-fit">
                <h6 class="text-sm font-semibold text-primary3">Contact Us</h6>
                <div class="flex gap-4">
                    <img src="/images/phone.svg" alt="Telephone Icon">
                    <p>+234 6707653444</p>
                </div>
                <div class="flex gap-4">
                    <img src="/images/location.svg" alt="Telephone Icon">
                    <p>27,Alara Street
                    Yaba 100012
                    Lagos State</p>
                </div>
            </div>
        </div>
        <p class="place-self-center">All rights reserved. © getlinked Ltd.</p>
    </div>
</template>