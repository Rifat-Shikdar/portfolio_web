<template>
  <div class="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50 pt-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="text-center mb-16 animate-fadeInUp">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          My <span class="text-gradient">Achievements</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Milestones that mark my journey in software development
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="ach in achievements" 
          :key="ach.title"
          class="bg-white rounded-2xl shadow-lg p-6 text-center card-hover animate-fadeInUp"
        >
          <div class="text-4xl mb-4">{{ ach.icon }}</div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">{{ ach.title }}</h3>
          <p class="text-gray-600 mb-3">{{ ach.description }}</p>
          <span class="text-sm text-gray-500">{{ ach.year }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const achievements = ref([
  {
    title: 'BSc in Computer Science',
    description: 'Graduated from AIUB with CGPA 3.60/4.00',
    year: '2023',
    icon: '🎓'
  },
  {
    title: 'Junior Software Engineer',
    description: 'Joined OrangeBD as a full-time developer',
    year: '2023',
    icon: '💼'
  },
  {
    title: '7+ Production Applications',
    description: 'Delivered scalable web apps for real clients',
    year: '2023–2024',
    icon: '🚀'
  },
  {
    title: 'Performance Optimization',
    description: 'Improved app speed by 40% via query tuning',
    year: '2023',
    icon: '⚡'
  },
  {
    title: 'Open Source Contributor',
    description: 'Active in Laravel & Vue.js communities',
    year: '2024',
    icon: '🌐'
  },
  {
    title: 'AI/ML Exploration',
    description: 'Built prototypes using Python & TensorFlow',
    year: '2024',
    icon: '🤖'
  }
])
</script>