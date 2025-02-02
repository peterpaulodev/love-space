<script setup>
import BackButton from '@/components/BackButton.vue'
import { ref } from 'vue'

const selectedButton = ref('fotos')

const selectButton = (buttonName) => {
  selectedButton.value = buttonName
}
</script>

<template>
  <div class="">
    <section id="bg-polaroid-2" class="px-3">
      <div class="px-3">
        <BackButton />
      </div>

      <div class="px-4 mx-auto max-w-screen-xl text-center py-15 lg:py-56">
        <h1
          class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
        >
          Galeria de mídias
        </h1>
        <p class="mb-8 text-lg font-normal italic text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Um acervo de memórias de nós dois.
        </p>

        <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
          <button
            @click="selectButton('fotos')"
            type="button"
            :class="
              selectedButton === 'fotos'
                ? 'bg-white text-gray-900 border border-white'
                : '!bg-transparent text-white border !border-pink-500'
            "
            class="focus:ring-4 cursor pointer focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
          >
            Fotos
          </button>
          <button
            @click="selectButton('videos')"
            type="button"
            :class="
              selectedButton === 'videos'
                ? 'bg-white text-gray-900 border border-white'
                : '!bg-transparent text-white border !border-pink-500'
            "
            class="focus:ring-4 cursor pointer focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
          >
            Vídeos
          </button>
          <button
            @click="selectButton('papeis')"
            type="button"
            :class="
              selectedButton === 'papeis'
                ? 'bg-white text-gray-900 border border-white'
                : '!bg-transparent text-white border !border-pink-500'
            "
            class="focus:ring-4 cursor pointer focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
          >
            Papéis de Parede
          </button>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-4" v-if="selectedButton === 'fotos'">
          <div v-for="i in 11" :key="i">
            <img
              class="h-auto max-w-full rounded-lg"
              :src="`/images/we-pics/pics/${i}.jpg`"
              :alt="`Imagem ${i}`"
            />
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4" v-if="selectedButton === 'videos'">
          <div v-for="i in 5" :key="i">
            <video
              class="h-auto max-w-full rounded-lg"
              :src="`/images/we-pics/videos/${i}.mp4`"
              controls
              :alt="`Vídeo ${i}`"
            ></video>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4" v-if="selectedButton === 'papeis'">
          <div v-for="i in 5" :key="i">
            <img
              class="h-auto max-w-full rounded-lg"
              :src="`/images/we-pics/wallpapers/${i}.jpg`"
              :alt="`Imagem ${i}`"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
