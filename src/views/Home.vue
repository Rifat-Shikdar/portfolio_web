<template>
  <div class="min-h-screen bg-hero pt-20 relative overflow-hidden">
    <!-- Particles -->
    <div class="particles hidden md:block">
      <div class="particle"></div>
      <div class="particle" style="animation-delay:1.5s;"></div>
      <div class="particle" style="animation-delay:3s;"></div>
      <div class="particle" style="animation-delay:0.5s; top:80%;"></div>
      <div class="particle" style="animation-delay:2.5s; top:60%;"></div>
    </div>

    <!-- Hero -->
    <section class="relative pt-20 pb-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="animate-fadeInUp opacity-0 mb-6" style="animation-delay:0.2s;">
          <span class="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4 glass-card">
            Hello, I'm
          </span>
        </div>

        <h1 class="animate-fadeInUp opacity-0 text-5xl md:text-7xl font-bold mb-6" style="animation-delay:0.4s;">
          <span class="text-gradient">Md Rifat</span><br>
          <span class="text-gray-900">Shikdar</span>
        </h1>

        <div class="animate-fadeInUp opacity-0 mb-8" style="animation-delay:0.6s;">
          <p class="text-xl md:text-2xl text-gray-600 mb-2">
            Junior Software Engineer at <span class="font-semibold text-blue-600">OrangeBD</span>
          </p>
          <div class="font-mono text-lg text-gray-500">
            <span class="typing-text">{{ displayText }}</span><span class="blinking-cursor">|</span>
          </div>
        </div>

        <div class="animate-fadeInUp opacity-0 flex flex-col sm:flex-row gap-4 justify-center mb-12" style="animation-delay:0.8s;">
          <router-link to="/projects" class="ripple btn-primary">View My Work</router-link>
          <router-link to="/contact" class="ripple px-8 py-4 border-2 border-gray-300 text-gray-700 font-medium rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
            Let's Connect
          </router-link>
        </div>

        <div class="animate-bounce-slow">
          <svg class="mx-auto h-6 w-6 text-gray-400" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      <!-- Blobs -->
      <div class="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div class="absolute top-40 right-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style="animation-delay:1s;"></div>
      <div class="absolute bottom-20 left-20 w-24 h-24 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style="animation-delay:2s;"></div>
    </section>

    <!-- Stats -->
    <section class="py-16 bg-white/30 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div class="glass-card p-4 animate-fadeInUp opacity-0" style="animation-delay:1s;">
            <div class="text-3xl font-bold text-blue-600 mb-2">1+</div>
            <div class="text-gray-600">Years Experience</div>
          </div>
          <div class="glass-card p-4 animate-fadeInUp opacity-0" style="animation-delay:1.2s;">
            <div class="text-3xl font-bold text-green-600 mb-2">7+</div>
            <div class="text-gray-600">Projects Completed</div>
          </div>
          <div class="glass-card p-4 animate-fadeInUp opacity-0" style="animation-delay:1.4s;">
            <div class="text-3xl font-bold text-purple-600 mb-2">8+</div>
            <div class="text-gray-600">Technologies</div>
          </div>
          <div class="glass-card p-4 animate-fadeInUp opacity-0" style="animation-delay:1.6s;">
            <div class="text-3xl font-bold text-orange-600 mb-2">3.60</div>
            <div class="text-gray-600">CGPA</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 animate-fadeInUp opacity-0" style="animation-delay:1.8s;">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p class="text-xl text-gray-600">A showcase of my recent work</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(p, i) in projects"
            :key="p.title"
            class="glass-card card-hover p-6 animate-fadeInUp opacity-0"
            :style="`animation-delay:${2+i*0.2}s;`"
          >
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
              <span class="text-white font-bold text-lg">{{ p.icon }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ p.title }}</h3>
            <p class="text-gray-600 mb-4">{{ p.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="t in p.tech"
                :key="t"
                class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >{{ t }}</span>
            </div>
          </div>
        </div>

        <div class="text-center mt-12 animate-fadeInUp opacity-0" style="animation-delay:2.8s;">
          <router-link to="/projects" class="ripple btn-primary">
            View All Projects
            <svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </router-link>
        </div>
      </div>
    </section>
  </div>
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

let idx = 0, char = 0, deleting = false
const type = () => {
  const cur = texts[idx]
  displayText.value = deleting ? cur.substring(0, char - 1) : cur.substring(0, char + 1)
  char = deleting ? char - 1 : char + 1
  const speed = deleting ? 50 : 100
  if (!deleting && char === cur.length) setTimeout(() => deleting = true, 2000)
  else if (deleting && char === 0) { deleting = false; idx = (idx + 1) % texts.length }
  setTimeout(type, speed)
}
onMounted(() => setTimeout(type, 1000))

const projects = ref([
  { title: 'Sanvees by Tony', description: 'E-commerce platform with advanced admin panel features', tech: ['Laravel 11','API','Eloquent'], icon: 'Cart' },
  { title: 'PetBD', description: 'Pet services platform with secure authentication', tech: ['Laravel','Passport','Security'], icon: 'Paw' },
  { title: 'Employee Management', description: 'Full-stack application with ASP.NET Core', tech: ['ASP.NET','C#','Entity Framework'], icon: 'Team' }
])
</script>

<style scoped>
.typing-text { font-family: 'JetBrains Mono', monospace; }
.blinking-cursor { animation: blink 1s infinite; }
@keyframes blink { 0%,50%{opacity:1} 51%,100%{opacity:0} }
</style>