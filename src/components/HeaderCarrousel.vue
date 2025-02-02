<template>
  <div id="bg-polaroid-pink" class="overflow-hidden">
    <transition name="slide-up">
      <div v-if="images.length > 0" :key="currentIndex">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="flex flex-col items-center justify-evenly h-screen"
          v-show="currentIndex === index"
        >
          <figure class="relative w-full max-w-full">
            <a href="#">
              <img
                class="w-full h-auto shadow-2xl shadow-white"
                :src="image.src"
                alt="image description"
              />
            </a>
            <figcaption class="absolute px-4 text-lg text-white bottom-6">
              <blockquote class="text-xl italic font-semibold text-white">
                <svg
                  class="w-8 h-8 text-white mb-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 14"
                >
                  <path
                    d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"
                  />
                </svg>
                <p>{{ image.caption }}</p>
              </blockquote>
            </figcaption>
          </figure>
          <div class="text-center">
            <ScrollDownButton v-if="currentIndex !== images.length - 1" @click="nextImage" />
            <NextButton v-else />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ScrollDownButton from './ScrollDownButton.vue'
import NextButton from './NextButton.vue'

defineOptions({
  name: 'HeaderCarrousel',
})

const images = ref([
  {
    src: 'src/assets/images/header-background.jpg',
    caption: 'E talvez você não saiba, o quanto nossas mãos dadas nesse dia significou para mim...',
  },
  {
    src: 'src/assets/images/header-background-2.jpg',
    caption: 'Ou o quanto esse abraço me ajudou...',
  },
  {
    src: '/images/we-pics/pics/6.jpg',
    caption: 'Mas quero que você saiba que para mim, era dar uma chance para o amor...',
  },
  {
    src: '/images//we-pics/pics/9.jpg',
    caption: 'E tudo isso só foi possível porque é com VOCÊ!',
  },
])

const currentIndex = ref(0)

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length
}
</script>

<style scoped>
.slide-up-enter-active, .slide-up-leave-active {
  transition: transform 0.7s ease, opacity 0.7s ease; /* Aumente o tempo de transição */
}

.slide-up-enter-from {
  transform: translateY(100%);
  opacity: 0; /* Comece com opacidade zero */
}

.slide-up-enter-to, .slide-up-leave-from {
  transform: translateY(0);
  opacity: 1; /* Transição para opacidade total */
}

.slide-up-leave-to {
  transform: translateY(-100%);
  opacity: 0; /* Termine com opacidade zero */
}
</style>
