<script setup>
import BackButton from '@/components/BackButton.vue'
</script>

<template>
  <div class="h-screen">
    <section id="bg-polaroid-3" class="h-screen px-3">
      <div class="px-3">
        <BackButton />
      </div>

      <div class="px-4 mx-auto max-w-screen-xl text-center py-5 lg:py-56">
        <h1
          class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
        >
          Playlist do nosso amor
        </h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Músicas que me lembram você ou que fizeram parte de nós.
        </p>

        <div>
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/playlist/6noY5aGUx4CXSjbzAYTXuu?utm_source=generator"
            width="100%"
            height="500"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>
