<template>
  <section class="relative pt-20 pb-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <!-- Badge -->
        <div class="animate-fadeInUp opacity-0 mb-6" style="animation-delay: 0.2s;">
          <span class="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4 glass-card">
            Hello, I'm
          </span>
        </div>

        <!-- Name -->
        <h1 class="animate-fadeInUp opacity-0 text-5xl md:text-7xl font-bold mb-6" style="animation-delay: 0.4s;">
          <span class="text-gradient">Md Rifat</span>
          <br />
          <span class="text-gray-900">Shikdar</span>
        </h1>

        <!-- Subtitle & Typing -->
        <div class="animate-fadeInUp opacity-0 mb-8" style="animation-delay: 0.6s;">
          <p class="text-xl md:text-2xl text-gray-600 mb-2">
            Junior Software Engineer at
            <span class="font-semibold text-blue-600">OrangeBD</span>
          </p>
          <div class="font-mono text-lg text-gray-500">
            <span class="typing-text">{{ displayText }}</span>
            <span class="blinking-cursor">|</span>
          </div>
        </div>

        <!-- Buttons -->
        <div class="animate-fadeInUp opacity-0 flex flex-col sm:flex-row gap-4 justify-center mb-12" style="animation-delay: 0.8s;">
          <router-link to="/projects" class="ripple btn-primary">
            View My Work
          </router-link>
          <router-link to="/contact" class="ripple px-8 py-4 border-2 border-gray-300 text-gray-700 font-medium rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
            Let's Connect
          </router-link>
        </div>

        <!-- Scroll Down -->
        <div class="animate-bounce-slow">
          <svg class="mx-auto h-6 w-6 text-gray-400" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>

    <!-- Background Blobs -->
    <div class="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
    <div class="absolute top-40 right-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style="animation-delay: 1s;"></div>
    <div class="absolute bottom-20 left-20 w-24 h-24 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style="animation-delay: 2s;"></div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const displayText = ref('')
const texts = [
  'Building scalable web applications',
  'Exploring AI & Machine Learning',
  'Creating innovative solutions',
  'Passionate about clean code'
]

let textIndex = 0
let charIndex = 0
let isDeleting = false

const typeWriter = () => {
  const currentText = texts[textIndex]
  if (isDeleting) {
    displayText.value = currentText.substring(0, charIndex - 1)
    charIndex--
  } else {
    displayText.value = currentText.substring(0, charIndex + 1)
    charIndex++
  }
  let typeSpeed = isDeleting ? 50 : 100
  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 2000
    isDeleting = true
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    textIndex = (textIndex + 1) % texts.length
  }
  setTimeout(typeWriter, typeSpeed)
}

onMounted(() => {
  setTimeout(typeWriter, 1000)
})
</script>

<style scoped>
.typing-text { font-family: 'JetBrains Mono', monospace; }
.blinking-cursor { animation: blink 1s infinite; }
@keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }
</style>