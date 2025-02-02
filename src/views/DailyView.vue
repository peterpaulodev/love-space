<script setup>
import BackButton from '@/components/BackButton.vue'
import loveQuotes from '../helpers/loveQuotes.js'

setInterval(function () {
  var r_num = Math.floor(Math.random() * 40) + 1
  var r_size = Math.floor(Math.random() * 65) + 10
  var r_left = Math.floor(Math.random() * 100) + 1
  var r_bg = Math.floor(Math.random() * 25) + 100
  var r_time = Math.floor(Math.random() * 5) + 5

  var bgHeart = document.querySelector('.bg_heart')

  var heart1 = document.createElement('div')
  heart1.className = 'heart'
  heart1.style.width = r_size + 'px'
  heart1.style.height = r_size + 'px'
  heart1.style.left = r_left + '%'
  heart1.style.background = 'rgba(255,' + (r_bg - 25) + ',' + r_bg + ',1)'
  heart1.style.animation = 'love ' + r_time + 's ease'
  bgHeart.appendChild(heart1)

  var heart2 = document.createElement('div')
  heart2.className = 'heart'
  heart2.style.width = r_size - 10 + 'px'
  heart2.style.height = r_size - 10 + 'px'
  heart2.style.left = r_left + r_num + '%'
  heart2.style.background = 'rgba(255,' + (r_bg - 25) + ',' + (r_bg + 25) + ',1)'
  heart2.style.animation = 'love ' + (r_time + 5) + 's ease'
  bgHeart.appendChild(heart2)

  var hearts = document.querySelectorAll('.heart')
  hearts.forEach(function (heart) {
    var top = parseFloat(window.getComputedStyle(heart).top)
    var width = parseFloat(window.getComputedStyle(heart).width)
    if (top <= -100 || width >= 150) {
      heart.parentNode.removeChild(heart)
    }
  })
}, 1000)

const actualDate = new Date()
const dayNumber = actualDate.getDate()
</script>

<template>
  <div id="bg-polaroid-2" class="bg_heart h-screen bg-white flex flex-col px-10">
    <BackButton />
    <figure class="max-w-screen-md mx-auto my-auto text-center">
      <svg
        class="w-10 h-10 mx-auto mb-3 text-gray-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14"
      >
        <path
          d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"
        />
      </svg>
      <blockquote>
        <p class="text-4xl italic font-medium text-white">"{{ loveQuotes[dayNumber] }}"</p>
      </blockquote>
      <figcaption class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
        <img
          class="w-15 h-15 rounded-full"
          src="../assets/images/peter-profile.jpg"
          alt="profile picture"
        />
        <div class="text-xl flex items-center divide-x-2 rtl:divide-x-reverse divide-white">
          <cite class="pe-3 font-medium text-white">Peter</cite>
          <cite class="ps-3 text-gray-300">O amor da sua vida!</cite>
        </div>
      </figcaption>
    </figure>
  </div>
</template>
