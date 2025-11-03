<script setup>
import { onMounted, ref } from 'vue'

const isDark = ref(false)

onMounted(() => {
  isDark.value = localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  updateTheme()
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  updateTheme()
}

const updateTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
  }
}
</script>

<template>
  <button
    @click="toggleTheme"
    class="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-all hover:scale-110"
    aria-label="Toggle dark mode"
  >
    {{ isDark ? 'Moon' : 'Sun' }}
  </button>
</template>