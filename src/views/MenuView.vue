<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <section id="bg-polaroid">
      <div class="px-7 mx-auto max-w-screen-xl text-center py-44 lg:py-56">
        <h1
          class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
        >
          Pro resto da vida. <br />
          Sempre eu e você. <br />
          Contra o mundo. <br />
          <small class="font-medium text-xl"> ~ Vitória Letícia </small>
        </h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          A partir de agora, para que você nunca tenha dúvidas, o meu amor por você está eternizado
          na internet!
        </p>

        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <RouterLink
            to="/daily"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#f6a7af]"
          >
            Seção diária
            <svg
              class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </RouterLink>

          <RouterLink
            to="/love-reason"
            class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-[#f6a7af] hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Por que eu te amo? 🥰
          </RouterLink>

          <RouterLink
            to="/gallery"
            class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-[#f6a7af] hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Galeria 🖼️
          </RouterLink>

          <RouterLink
            to="/playlist"
            class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-[#f6a7af] hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Músicas 🎧
          </RouterLink>

          <RouterLink
            to="/secret-messages"
            class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-[#f6a7af] hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Mensagens secretas 🤫
          </RouterLink>

          <RouterLink
            to="/birthday"
            class="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white/60 rounded-lg border focus:ring-4 focus:ring-gray-400"
          >
            13/05/2025 🔒
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
