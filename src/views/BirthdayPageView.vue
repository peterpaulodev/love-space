<script setup>
import { ref, reactive, onMounted } from 'vue'
import BackButton from '../components/BackButton.vue'
import birthdayCards from '../content/birthdayCards.js'

const mostrandoIntro = ref(true)
const audioRef = ref(null)
const isPlayingMusic = ref(false)

onMounted(() => {
  setTimeout(() => {
    mostrandoIntro.value = false
  }, 3000)
})

const cartas = reactive(birthdayCards)

const toggle = (index) => {
  cartas[index].aberta = !cartas[index].aberta
}

const tocarMusica = () => {
  isPlayingMusic.value = true
  audioRef.value?.play()
}
</script>

<template>
  <div class="min-h-screen bg-pink-50 space-y-4 px-6 pt-4 relative overflow-hidden paper-texture">
    <BackButton />

    <!-- INTRODUÇÃO -->
    <transition name="fade">
      <div
        v-if="mostrandoIntro"
        class="fixed inset-0 bg-pink-100/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center text-center px-6"
      >
        <p class="text-xl font-semibold text-pink-800 leading-relaxed">
          Algumas palavras não têm hora certa pra serem ditas…<br />
          Então eu guardei essas pra você.
        </p>
      </div>
    </transition>

    <!-- BOTÃO DE ÁUDIO -->
    <div v-if="!mostrandoIntro" class="fixed bottom-4 right-4 z-30">
      <button
        @click="tocarMusica"
        class="bg-pink-100 text-pink-700 px-4 py-2 rounded-full shadow hover:bg-pink-200 transition flex items-center"
      >
        <span v-if="isPlayingMusic" class="mr-2 animate-pulse">🔊</span>
        <span class="mr-2" v-else>🎵</span> Ouvir trilha
      </button>
    </div>

    <!-- CABEÇALHO -->
    <div v-if="!mostrandoIntro" class="text-4xl font-bold text-center text-pink-800 mt-6 mb-7">
      <h1>Cartas para o Futuro</h1>
      <p>💌</p>
      <p class="text-sm italic font-normal">Por: Peterson, o amor da sua vida!</p>
    </div>

    <!-- CARTAS -->
    <div v-if="!mostrandoIntro">
      <div
        v-for="(carta, index) in cartas"
        :key="index"
        class="bg-white rounded-2xl shadow-lg p-4 transition-all duration-300 mb-4 transform"
        :class="{ 'scale-105': carta.aberta }"
        @click="toggle(index)"
      >
        <div class="flex items-center justify-between">
          <h2 class="text-lg font-semibold text-pink-700">
            {{ carta.titulo }}
          </h2>
          <span class="text-pink-400 text-xl">
            {{ carta.aberta ? '−' : '+' }}
          </span>
        </div>

        <transition name="fade">
          <p v-if="carta.aberta" class="mt-3 text-gray-700 leading-relaxed">
            {{ carta.mensagem }}
          </p>
        </transition>
      </div>
    </div>

    <!-- ÁUDIO -->
    <audio ref="audioRef" src="/musica-romantica.mp3"></audio>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.animate-pulse {
  animation: pulse 1s infinite;
}

/* Papel texturizado */
.paper-texture {
  background-color: #d6a3d0;
  background-image: url('https://www.transparenttextures.com/patterns/notebook.png');
}
</style>
