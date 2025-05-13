<script setup>
import { ref } from 'vue'
import BackButton from '../components/BackButton.vue'
const countClick = ref(0)
</script>

<template>
  <div id="bg-polaroid-2" class="bg_heart h-screen bg-white flex flex-col px-10">
    <BackButton />
    <div class="px-7 mx-auto max-w-screen-xl text-center pt-44">
      <h1
        class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
      >
        Curiosa, hein? 👀
      </h1>
      <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
        Se você clicar 100 vezes nesse botão eu te dou um spoiler!
      </p>
    </div>

    <div class="flex flex-col gap-5">
      <button
        class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#f6a7af] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        @click="countClick++"
      >
        Clique aqui
      </button>

      <p class="text-center mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
        Cliques: {{ countClick }}
      </p>
    </div>

    <div
      class="text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 text-center opacity-0 transition-all fade-in"
      :class="countClick >= 100 ? 'opacity-100' : ''"
    >
      Não acredito que você fez isso KKKKKKKKKK <br />
      Achou realmente que seria tão fácil assim? <br />
    </div>
  </div>
</template>
