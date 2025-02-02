<script setup>
import HeaderCarrousel from '../components/HeaderCarrousel.vue'
import { ref } from 'vue'

const show = ref(false)
const password = ref('')
const disableButton = ref(true)

const toggleContent = () => {
  show.value = !show.value
}

const checkPassword = () => {
  disableButton.value = password.value !== 'gostosura'
}
</script>

<template>
  <main>
    <div id="bg-polaroid-pink" class="w-full h-screen bg-[#e56c6e]" :class="show ? 'hidden' : ''">
      <div class="px-4 sm:px-7 mx-auto max-w-screen-xl text-center pt-60 sm:pt-20">
        <h1
          class="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-white"
        >
          Bem-vinda, meu amor!
        </h1>
        <p class="mb-4 sm:mb-15 text-base sm:text-lg lg:text-xl font-normal text-gray-100 sm:px-8 lg:px-48">
          Acesse com a nossa senha secreta. ❤️
        </p>
        <div class="flex flex-col items-center justify-center gap-2">
          <p class="text-base sm:text-lg lg:text-xl font-normal text-gray-100 sm:px-8 lg:px-48">
            <b>Complete a frase:</b>
            Eu te amo muito de ...
          </p>

          <div class="w-full max-w-xs">
            <input
              type="password"
              placeholder="Senha"
              v-model="password"
              @input="checkPassword"
              class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg border-gray-200 focus:ring-[#d44e63] focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
        </div>
      </div>

      <div class="mt-6 sm:mt-10 flex w-full justify-center">
        <button
          id="toggleButton"
          @click="toggleContent"
          class="disabled:opacity-50 pointer inline-flex justify-center items-center py-2 sm:py-3 px-4 sm:px-5 text-sm sm:text-base font-medium text-center text-white rounded-lg bg-[#f6a7af]"
          :disabled="disableButton"
        >
          Acessar Conteúdo

          <i v-if="disableButton" class="fa fa-lock ml-2"></i>
          <i v-else class="fa fa-check ml-2"></i>
        </button>
      </div>
    </div>

    <div id="hiddenContent" class="transition fade-in" :class="show ? '' : 'hidden'">
      <header>
        <HeaderCarrousel />
      </header>
    </div>
  </main>
</template>
