<script setup>
import BackButton from '@/components/BackButton.vue'

const months = [
  {
    date: '1 de Fevereiro de 2025',
    title: 'Nosso primeiro mês juntos',
    description: `Esse mês foi uma loucura, começamos ele com o nosso primeiro perrengue de casal, a
    virose. 💀 <br />
    Mas nem isso fez a gente querer ficar separado. <br />
    A vontade de ficar junto o tempo inteiro, a saudade, foi muito maior. <br /><br />
    Fomos conhecer nossas famílias, e graças a Deus nos demos muito bem! A minha família te
    amou e acho que a sua gostou de mim também. Eu sabia o quanto isso era importante pra
    você, e eu só fui eu mesmo. <br />
    Ainda tenho que tomar cuidado com os pensamentos intrusivos perto deles KKKKK, mas acho
    que estou indo bem.
    <br /><br />
    Meus avós gostaram tanto de você que ela já quer te fazer um vestido e meu avô já tá
    fazendo charadas e piadas com você KKKKKKK <br /><br />
    Sinceramente, não lembro qual foi a última vez que eu vi ele zoando assim com alguém,
    encheu meu coração de alegria.
    <br /><br />
    Esse mês eu tive mais certeza do que nunca de que eu quero você como a minha esposa.`,
    linkText: '',
    linkLocked: false,
  },
  {
    date: '1 de Março de 2025',
    title: 'Segundo mês',
    description: '',
    linkText: 'Bloqueado',
    linkLocked: true,
  },
  {
    date: '1 de Abril de 2025',
    title: 'Terceiro mês',
    description: '',
    linkText: 'Bloqueado',
    linkLocked: true,
  },
  {
    date: '1 de Maio de 2025',
    title: 'Quarto mês',
    description: '',
    linkText: 'Bloqueado',
    linkLocked: true,
  },
  {
    date: '...',
    title: 'O resto da vida',
    description: '',
    linkText: '',
    linkLocked: false,
  },
]
</script>

<template>
  <div class="px-6" id="bg-polaroid-4">
    <BackButton />
    <div class="pt-10">
      <ol class="relative border-s border-gray-200 pb-5">
        <li v-for="(month, index) in months" :key="index" class="mb-10 ms-4">
          <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"
          ></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400">{{ month.date }}</time>
          <h3
            class="text-lg font-semibold italic"
            :class="month.linkLocked ? 'text-white/40' : 'text-white'"
          >
            {{ month.title }} <i v-if="month.linkLocked" class="fa fa-lock"></i>
            <i v-else class="fa fa-heart"></i>
          </h3>
          <p class="mb-4 text-base font-normal text-gray-300" v-html="month.description"></p>
          <a
            v-if="month.linkText"
            href="#"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            {{ month.linkText }}
          </a>
        </li>
      </ol>
    </div>
  </div>
</template>
