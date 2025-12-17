<template>
  <div class="min-h-screen bg-black text-white overflow-x-hidden">
    <!-- ===== HERO SECTION ===== -->
    <section id="hero" class="relative min-h-screen flex items-center justify-center">
      <!-- Background -->
      <div class="absolute inset-0">
        <img 
          src="/profile.jpeg" 
          alt="Rifat Shikdar" 
          class="w-full h-full object-cover opacity-70"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      </div>

      <!-- Navbar -->
      <Navbar class="absolute top-0 w-full z-50" />

      <!-- Hero Content -->
      <div class="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-10">
        <!-- Badge -->
        <div class="animate-fadeInUp opacity-0" style="animation-delay: 0.3s;">
          <span class="px-6 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-sm font-semibold">
            Junior Software Engineer
          </span>
        </div>

        <!-- Name -->
        <h1 class="animate-fadeInUp opacity-0 text-6xl md:text-8xl font-black tracking-tight leading-none" style="animation-delay: 0.5s;">
          <span class="block text-white/90">Md Rifat</span>
          <span class="block text-gradient text-7xl md:text-9xl">Shikdar</span>
        </h1>

        <!-- Typewriter -->
        <div class="animate-fadeInUp opacity-0 h-14" style="animation-delay: 0.8s;">
          <p class="text-xl md:text-2xl font-mono text-cyan-400">
            <span class="typing-text">{{ displayText }}</span>
            <span class="blinking-cursor">|</span>
          </p>
        </div>

        <!-- Subtitle -->
        <p class="animate-fadeInUp opacity-0 max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed" style="animation-delay: 1s;">
          Building <span class="text-[var(--accent-blue)] font-bold">scalable web apps</span> at OrangeBD with Laravel, Vue.js, and ASP.NET. 
          Passionate about AI, clean architecture, and turning ideas into reality.
        </p>

        <!-- CTAs -->
        <div class="animate-fadeInUp opacity-0 flex flex-col sm:flex-row gap-4 justify-center items-center" style="animation-delay: 1.2s;">
          <router-link 
            to="/projects" 
            class="group px-8 py-4 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] text-white font-bold rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center ripple"
          >
            Explore Projects
            <svg class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </router-link>

          <a 
            href="mailto:rifatshikdar6@gmail.com"
            class="px-8 py-4 border-2 border-white/30 text-white font-medium rounded-full hover:bg-white/10 backdrop-blur-md transition-all duration-300"
          >
            rifatshikdar6@gmail.com
          </a>
        </div>

        <!-- FUNCTIONAL SCROLL INDICATOR (Centered below CTAs) -->
        <button 
          @click="scrollToNext"
          class="animate-bounce mt-12 inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/30 backdrop-blur-md hover:bg-white/10 transition-all duration-300 group"
          aria-label="Scroll to next section"
        >
          <svg class="w-6 h-6 text-white/70 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
      </div>
    </section>

    <!-- ===== LET'S CONNECT ===== -->
    <section id="connect-section" class="py-24 px-6 bg-gradient-to-b from-black to-slate-900">
      <div class="max-w-6xl mx-auto text-center space-y-12">
        <div class="animate-fadeInUp">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span class="text-gradient">Connect</span>
          </h2>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">
            Open to collaborations, freelance, or just a chat about tech, AI, or the next big idea.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 animate-fadeInUp" style="animation-delay: 0.3s;">
          <a href="mailto:rifatshikdar6@gmail.com" class="group glass-card p-8 text-center card-hover">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Email</h3>
            <p class="text-gray-400 group-hover:text-white transition-colors">rifatshikdar6@gmail.com</p>
          </a>

          <a href="https://github.com/rifatshikder" target="_blank" class="group glass-card p-8 text-center card-hover">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">GitHub</h3>
            <p class="text-gray-400 group-hover:text-white transition-colors">@rifatshikder</p>
          </a>

          <a href="https://linkedin.com/in/rifatshikdar" target="_blank" class="group glass-card p-8 text-center card-hover">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">LinkedIn</h3>
            <p class="text-gray-400 group-hover:text-white transition-colors">/in/rifatshikdar</p>
          </a>
        </div>
      </div>
    </section>

    <!-- ===== FEATURED PROJECTS ===== -->
    <section class="py-24 px-6 bg-gradient-to-b from-slate-900 to-black">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 animate-fadeInUp">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span class="text-gradient">Projects</span>
          </h2>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">
            Real-world applications I've built at OrangeBD and in my free time
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-10">
          <!-- Project 1 -->
          <div class="group glass-card overflow-hidden card-hover animate-fadeInLeft">
            <div class="relative h-64 overflow-hidden">
              <img src="/projects/Sanvees.PNG" alt="Sanvees" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div class="absolute bottom-4 left-4">
                <span class="px-3 py-1 bg-[var(--accent-orange)] text-white text-xs font-bold rounded-full">Live</span>
              </div>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold text-white mb-3">Sanvees by Tony</h3>
              <p class="text-gray-400 mb-4">E-Commerce platform with admin panel, warehouse ops, and performance optimization.</p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">Laravel 11</span>
                <span class="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">REST API</span>
                <span class="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">MySQL</span>
              </div>
              <a href="https://sanvees.com" target="_blank" class="inline-flex items-center text-[var(--accent-blue)] font-semibold hover:text-white transition-colors">
                View Live
                <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </div>

          <!-- Project 2 -->
          <div class="group glass-card overflow-hidden card-hover animate-fadeInRight">
            <div class="relative h-64 overflow-hidden">
              <img src="/projects/pro.PNG" alt="Prottaysha" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div class="absolute bottom-4 left-4">
                <span class="px-3 py-1 bg-[var(--accent-green)] text-white text-xs font-bold rounded-full">Live</span>
              </div>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold text-white mb-3">Prottaysha</h3>
              <p class="text-gray-400 mb-4">Donation platform with secure payments, campaign tracking, and responsive UI.</p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-pink-500/20 text-pink-400 text-xs rounded-full">Laravel Blade</span>
                <span class="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">Bootstrap</span>
                <span class="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">Ajax</span>
              </div>
              <a href="https://prottaysha.org" target="_blank" class="inline-flex items-center text-[var(--accent-blue)] font-semibold hover:text-white transition-colors">
                View Live
                <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="text-center mt-12 animate-fadeInUp">
          <router-link 
            to="/projects" 
            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] text-white font-bold rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            View All Projects
            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- ===== TECH STACK ===== -->
    <section class="py-24 px-6 bg-black">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-16 animate-fadeInUp">
          Tech <span class="text-gradient">Stack</span>
        </h2>

        <div class="grid grid-cols-3 md:grid-cols-6 gap-8">
          <div v-for="tech in techStack" :key="tech.name" class="group animate-fadeInUp" :style="`animation-delay: ${tech.delay}s`">
            <div class="glass-card p-6 h-full flex flex-col items-center justify-center card-hover">
              <div class="text-4xl mb-3">{{ tech.icon }}</div>
              <p class="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{{ tech.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== FINAL CTA ===== -->
    <section class="py-24 px-6 bg-gradient-to-t from-black to-slate-900">
      <div class="max-w-4xl mx-auto text-center">
        <div class="glass-card p-12 animate-fadeInUp">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Something <span class="text-gradient">Amazing</span>?
          </h2>
          <p class="text-xl text-gray-300 mb-8">
            Let's turn your idea into a scalable, beautiful reality.
          </p>
          <router-link 
            to="/contact" 
            class="inline-flex items-center px-10 py-5 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] text-white text-lg font-bold rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ripple"
          >
            Start a Project
            <svg class="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10h7l-3.5 9H7l-3.5-9h7m-1-7v4"></path>
            </svg>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbar from '../components/Navbar.vue'

// Typewriter Effect
const displayText = ref('')
const texts = [
  'Building scalable web apps...',
  'Exploring AI & ML...',
  'Crafting pixel-perfect UIs...',
  'Solving real-world problems...'
]
let idx = 0, ch = 0, del = false
const type = () => {
  const cur = texts[idx]
  displayText.value = del ? cur.substring(0, ch - 1) : cur.substring(0, ch + 1)
  ch = del ? ch - 1 : ch + 1
  const speed = del ? 60 : 100
  if (!del && ch === cur.length) setTimeout(() => del = true, 1500)
  else if (del && ch === 0) { del = false; idx = (idx + 1) % texts.length }
  setTimeout(type, speed)
}
onMounted(() => setTimeout(type, 1000))

// Scroll to next section
const scrollToNext = () => {
  const nextSection = document.getElementById('connect-section')
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' })
  }
}

// Tech Stack
const techStack = [
  { name: 'Laravel', icon: 'L', delay: 0.1 },
  { name: 'Vue.js', icon: 'V', delay: 0.2 },
  { name: 'PHP', icon: 'P', delay: 0.3 },
  { name: 'ASP.NET', icon: '.N', delay: 0.4 },
  { name: 'MySQL', icon: 'DB', delay: 0.5 },
  { name: 'Git', icon: 'Git', delay: 0.6 }
]
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 4s ease infinite;
}
@keyframes gradientShift {
  0%,100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.typing-text { font-family: 'JetBrains Mono', monospace; }
.blinking-cursor { 
  animation: blink 1s infinite;
  color: #60a5fa;
}
@keyframes blink { 0%,50%{opacity:1} 51%,100%{opacity:0} }

.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s ease;
}
.card-hover:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* Bounce Animation */
.animate-bounce {
  animation: bounce 2s infinite;
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
</style>