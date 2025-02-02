<script setup>
defineOptions({
  name: 'ScrollDownButton',
})

const scrollToBottom = () => {
  window.scrollTo({
    top: window.scrollY + window.innerHeight,
    behavior: 'smooth',
  })
}
</script>

<template>
  <button
    @click="scrollToBottom"
    type="button"
    class="flex justify-center items-center h-15 motion-safe:animate-bounce bg-white/80 focus:ring-4 focus:outline-none focus:ring-blue-300 w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 font-medium rounded-full text-lg p-2.5 text-center mb-1"
  >
    <svg
      class="w-6 h-6 text-gray-800"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m19 9-7 7-7-7"
      />
    </svg>
  </button>
</template>
