<template>
  <nav class="fixed top-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300"
       :style="{background: 'var(--navbar-bg)', borderColor: 'var(--navbar-border)'}">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <router-link to="/" class="font-bold text-xl text-[var(--text-primary)] hover:text-[var(--accent-blue)] transition-colors">
          <span class="text-gradient">Rifat</span> Shikdar
        </router-link>

        <!-- Desktop Nav -->
        <div class="hidden md:flex space-x-8">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="relative text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-all duration-300 group py-2"
            :class="{ 'text-[var(--accent-blue)]': $route.path === item.path }"
          >
            {{ item.name }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--accent-blue)] transition-all duration-300 group-hover:w-full"></span>
          </router-link>
        </div>

        <!-- Dark Toggle -->
        <button @click="toggleDark"
                class="p-2 rounded-md text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-colors"
                title="Toggle dark mode">
          <Sun v-if="isDark" class="h-5 w-5" />
          <Moon v-else class="h-5 w-5" />
        </button>

        <!-- Mobile Menu Button -->
        <button @click="mobileOpen = !mobileOpen"
                class="md:hidden p-2 rounded-md text-[var(--text-secondary)] hover:text-[var(--accent-blue)] hover:bg-[var(--bg-secondary)] transition-colors">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!mobileOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2">
      <div v-if="mobileOpen"
           class="md:hidden backdrop-blur-md border-t"
           :style="{background: 'var(--navbar-bg)', borderColor: 'var(--navbar-border)'}">
        <div class="px-4 py-3 space-y-2">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            @click="mobileOpen = false"
            class="block px-3 py-2 text-[var(--text-secondary)] hover:text-[var(--accent-blue)] hover:bg-[var(--bg-secondary)] rounded-md transition-colors"
            :class="{ 'text-[var(--accent-blue)] bg-[var(--bg-secondary)]': $route.path === item.path }">
            {{ item.name }}
          </router-link>

          <button @click="toggleDark"
                  class="w-full flex items-center justify-center py-2 text-[var(--text-secondary)]">
            <Sun v-if="isDark" class="h-5 w-5 mr-2" />
            <Moon v-else class="h-5 w-5 mr-2" />
            {{ isDark ? 'Light Mode' : 'Dark Mode' }}
          </button>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Sun, Moon } from 'lucide-vue-next'

const mobileOpen = ref(false)
const isDark = ref(false)

const navItems = [
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' }
]

const toggleDark = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('darkMode', isDark.value.toString())
}

onMounted(() => {
  const saved = localStorage.getItem('darkMode')
  isDark.value = saved === 'true' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)
  if (isDark.value) document.documentElement.classList.add('dark')
})
</script>