<script setup lang="ts">
import MainButton from '@/components/MainButton.vue';
import SectionHeading from '@/components/SectionHeading.vue';

const attributes = [
  {
    title: 'Innovation and Creativity:',
    text: 'Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.'
  },
  {
    title: 'Functionality:',
    text: 'Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.'
  },
  {
    title: 'Impact and Relevance:',
    text: 'Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.'
  },
  {
    title: 'Technical Complexity:',
    text: 'Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.'
  },
  {
    title: 'Adherence to Hackathon Rules:',
    text: 'Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.'
  },
]

const questions = [
  {
    text: 'Can I work on a project I started before the hackathon?'
  },
  {
    text: 'What happens if I need help during the hackathon?'
  },
  {
    text: "What happens if I don't have an idea for a project?"
  },
  {
    text: 'Can I join a team or do I have to come with one?'
  },
  {
    text: 'What happens after the hackathon ends?'
  },
  {
    text: 'Can I work on a project I started before the hackathon?'
  },
]

</script>

<template>
  <main>

    <section class="grid container-main section-border" style="@media (min-width: 1024px;) {
      padding-right: 0;
    }">
      <div class="grid w-fit justify-self-end mr-14">
        <p class="text-sm md:text-4xl font-bold italic">Igniting a Revolution in HR Innovation</p>
        <img src="/images/line.svg" alt="" class="justify-self-end -mt-1 mr-6 h-2 md:h-fit w-auto">
      </div>
      <div class="grid lg:grid-flow-col text-center md:text-left">
        <div class="grid items-center justify-items-center lg:justify-normal mt-20">
          <div class="font-bold grid font-['Clash_Display'] text-3xl md:text-7xl text-center lg:text-left relative w-fit">
            <img src="/images/creative.png" alt="" class="justify-self-end relative right-36 -mb-4 w-5 md:w-fit">
            <h3>getlinked Tech</h3>
            <div class="font-bold flex">
              <h3>Hackathon <span class="text-primary3 font-bold">1.0</span></h3>
              <img src="/images/chain.png" alt="" class="h-fit w-8 md:w-fit">
              <img src="/images/light.png" alt="" class="h-fit w-6 md:w-fit">
            </div>
          </div>
          <p class="text-xs md:text-xl mt-2 mb-10 max-w-[17rem]">Participate in getlinked tech Hackathon 2023 stand
          a chance to win a Big prize</p>
          <MainButton class="w-fit h-fit" />
          <div class="md:text-6xl text-5xl font-['Unica_One']">
            <p>00<span class="text-sm font-['Montserrat']">H</span>   00<span class="text-sm font-['Montserrat']">M</span>   00<span class="text-sm font-['Montserrat']">S</span></p>
          </div>
        </div>
        <div class="relative w-full -mx-12 lg:mx-0">
          <img src="/images/image.png" alt="AI image" class="absolute">
          <img src="/images/man-wearing-smart-glasses-touching-virtual-screen-1.png" alt="Man Wearing Smart Glasses Touching Virtual Screen" class="mix-blend-luminosity">
        </div>
      </div>
    </section>

    <section class="section-border container-main">
      <div class="grid lg:grid-cols-2 place-items-center text-center lg:text-left py-16 gap-16">
        <div>
          <img src="/images/the-big-idea.png" alt="" class="">
        </div>
        <div class="max-w-lg grid gap-4">
          <SectionHeading title="Introduction to getlinked" subtitle="tech Hackathon 1.0" />
          <p class="text-sm">Our tech hackathon is a melting pot of visionaries, and its purpose is as
          clear as day: to shape the future. Whether you're a coding genius, a 
          design maverick, or a concept wizard, you'll have the chance to transform 
          your ideas into reality. Solving real-world problems, pushing the boundaries
          of technology, and creating solutions that can change the world,
          that's what we're all about!</p>
        </div>
      </div>
    </section>

    <section class="section-border container-main">
      <div class="grid lg:grid-cols-2 place-items-center text-center lg:text-left lg:py-16 pb-16 gap-3">
        <div class="lg:hidden relative">
            <img src="/images/star-grad.png" alt="Gradient Star" class="absolute">
            <img src="/images/woman-sitting-down-vector.png" alt="" class="">
          </div>
        <div class="max-w-lg grid gap-4">
          <SectionHeading title="Rules and" subtitle="Guidelines" />
          <p class="text-sm">Our tech hackathon is a melting pot of visionaries, and its purpose is as
            clear as day: to shape the future. Whether you're a coding genius, a 
            design maverick, or a concept wizard, you'll have the chance to transform 
            your ideas into reality. Solving real-world problems, pushing the boundaries
            of technology, and creating solutions that can change the world,
            that's what we're all about!</p>
          </div>
          <div class="hidden lg:block">
            <img src="/images/woman-sitting-down-vector.png" alt="" class="">
          </div>
      </div>
    </section>

    <section class="section-border container-main">
      <div class="grid lg:grid-cols-2 place-items-center text-center lg:text-left py-16 gap-16">
        <div>
          <img src="/images/man-and-woman-looking-at-charts.png" alt="" class="">
        </div>
        <div class="max-w-xl grid gap-5">
          <SectionHeading title="Judging Criteria" subtitle="Key attributes" />
          <div class="grid gap-6">
            <p v-for="(attribute, index) in attributes" :key="index"  class="text-sm"><span class="text-base font-bold text-gradient-3">{{ attribute.title }}</span> {{ attribute.text }}</p>
          </div>
          <MainButton text="Read More" class="w-fit justify-self-center lg:justify-self-start" />
        </div>
      </div>
    </section>

    <section class="section-border container-main">
      <div class="grid lg:grid-cols-2 place-items-center text-center lg:text-left py-16 gap-3">
        <div class="max-w-lg grid gap-4">
          <SectionHeading title="Frequently Ask" subtitle="Question" />
          <p class="lg:text-sm text-xs leading-6">We got answers to the questions that you might
          want to ask about <span class="font-bold">getlinked Hackathon 1.0</span></p>
          <div class="grid gap-6 mt-12">
            <div v-for="(question, index) in questions" :key="index" class="flex text-left justify-between border-b border-primary3 pb-3">
              <p>{{ question.text }}</p>
              <span class="text-xl text-primary3">+</span>
            </div>
          </div>
        </div>
        <div class="">
          <img src="/images/man-sitting-down-thinking.png" alt="" class="">
        </div>
      </div>
    </section>

    <section class="container-main">
      <div class="grid gap-24">
        <div class="grid gap-3 text-center">
          <h3 class="text-3xl font-bold font-['Clash_Display']">Timeline</h3>
          <p class="lg:text-sm text-xs">Here is the breakdown of the time we anticipate 
          using for the upcoming event.</p>
        </div>
        <div>

        </div>
      </div>
    </section>

    <section class="section-border container-main">
      <div class="grid lg:grid-cols-2 place-items-center text-center lg:text-left py-16 gap-16">
        <div>
          <img src="/images/trophy.png" alt="" class="w-suto">
        </div>
        <div class="grid gap-56">
          <div class="max-w-xl grid gap-4">
            <SectionHeading title="Prizes and" subtitle="Rewards" />
            <p class="lg:text-sm text-xs">Highlight of the prizes or rewards for winners and
            for participants.</p>
          </div>
          <div class="grid grid-flow-col gap-8">
            <div class="border border-primary3 rounded-lg bg-[rgba(212,_52,_254,_0.12)] w-fit h-fit text-center p-7">
              <img src="/images/silver-medal.png" alt="Silver Medal for 2nd Position" class="-mt-24 mb-4">
              <p class="text-4xl font-bold">2nd</p>
              <p class="text-2xl font-semibold">Runner</p>
              <p class="text-3xl font-bold text-primary3">N300,000</p>
            </div>
            <div class="border border-primary2 rounded-lg bg-[rgba(144,_58,_255,_0.12)] w-fit h-fit text-center p-7">
              <img src="/images/gold-medal.png" alt="Gold Medal for 1st Position" class="-mt-36 mb-16 scale-150">
              <p class="text-4xl text-[2.5rem] font-bold">1st</p>
              <p class="text-2xl font-semibold">Runner</p>
              <p class="text-3xl font-bold mt-4 text-primary2">N400,000</p>
            </div>
            <div class="border border-primary3 rounded-lg bg-[rgba(212,_52,_254,_0.12)] w-fit h-fit text-center p-7">
              <img src="/images/bronze-medal.png" alt="Bronze Medal for 3rd Position" class="-mt-24 mb-4">
              <p class="text-4xl font-bold">3rd</p>
              <p class="text-2xl font-semibold">Runner</p>
              <p class="text-3xl font-bold text-primary3">N150,000</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-border container-main">
      <div class="grid gap-16">
        <div class="grid gap-6 text-center">
          <h3 class="text-3xl font-bold font-['Clash_Display']">Partners and Sponsors</h3>
          <p class="lg:text-sm text-xs">Getlinked Hackathon 1.0 is honored to have the following major 
          companies as its partners and sponsors</p>
        </div>
        <div class="rounded border border-primary3 bg-[rgba(255,_255,_255,_0.01)]">

        </div>
      </div>
    </section>

    <section class="container-main">
      <div class="grid lg:grid-cols-2 place-items-center text-center lg:text-left py-16 gap-3">
        <!-- <div class="lg:hidden">
          <img src="/images/woman-sitting-down-vector.png" alt="" class="">
        </div> -->
        <div class="max-w-lg grid gap-4">
          <SectionHeading title="Privacy Policy and" subtitle="Terms" />
          <p class="lg:text-sm text-xs text-[rgba(255,_255,_255,_0.75)]">Last updated on September 12, 2023</p>
          <p class="lg:text-sm text-xs mt-4 max-w-md">Below are our privacy & policy, which outline a lot of goodies. 
          it’s our aim to always take of our participant</p>
          <div class="grid gap-6 mt-12 bg-[rgba(217,_217,_217,_0.03)] border rounded border-primary3 p-4 md:px-11 py-11 lg:p-16">
            <p class="lg:text-sm text-xs">At getlinked tech Hackathon 1.0, we value your privacy
            and are committed to protecting your personal information.
            This Privacy Policy outlines how we collect, use, disclose, 
            and safeguard your data when you participate in our tech 
            hackathon event. By participating in our event, you consent 
            to the practices described in this policy.</p>
            <div class="lg:text-sm text-xs text-left grid gap-4">
              <div class="grid">
                <h6 class="text-base text-primary3 font-bold">Licensing Policy</h6>
                <p class="font-bold">Here are terms of our Standard License:</p>
              </div>
              <div class="grid gap-4">
                <div class="flex gap-4 items-start">
                  <img src="/images/list-terms.svg" alt="">
                  <p class="lg:text-sm text-xs">The Standard License grants you a non-exclusive right to
                  navigate and register for our event</p>
                </div>
                <div class="flex gap-4 items-start">
                  <img src="/images/list-terms.svg" alt="">
                  <p class="lg:text-sm text-xs">You are licensed to use the item available at any free source
                  sites, for your project developement</p>
                </div>
              </div>
            </div>
            <MainButton text="Read More" class="w-fit justify-self-center lg:justify-self-start " />
          </div>
        </div>
        <div class="">
          <img src="/images/man-standing-on-padlock.png" alt="" class="">
        </div>
      </div>
    </section>

  </main>
</template>
