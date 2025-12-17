<template>
  <div class="min-h-screen pt-20 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-slate-900 dark:to-slate-800">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="text-center mb-16 animate-fadeInUp">
        <h1 class="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
          My <span class="text-gradient">Achievements</span>
        </h1>
        <p class="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
          Milestones that mark my journey
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="ach in achievements" :key="ach.title"
             class="card card-hover text-center animate-fadeInUp"
             :style="`animation-delay: ${ach.delay}s`">
          <div class="text-5xl mb-4">{{ ach.icon }}</div>
          <h3 class="text-xl font-bold text-[var(--text-primary)] mb-2">{{ ach.title }}</h3>
          <p class="text-[var(--text-secondary)] mb-3">{{ ach.description }}</p>
          <span class="text-sm text-[var(--text-muted)]">{{ ach.year }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const achievements = [
  { title: 'BSc in Computer Science', description: 'Graduated from AIUB with CGPA 3.60/4.00', year: '2023', icon: 'Graduation Cap', delay: 0.1 },
  { title: 'Junior Software Engineer', description: 'Joined OrangeBD as full-time developer', year: '2023', icon: 'Briefcase', delay: 0.2 },
  { title: '7+ Production Apps', description: 'Delivered scalable apps for real clients', year: '2023–2024', icon: 'Rocket', delay: 0.3 },
  { title: '40% Speed Boost', description: 'Optimized queries for better performance', year: '2023', icon: 'Lightning', delay: 0.4 },
  { title: 'Open Source', description: 'Contributed to Laravel & Vue.js', year: '2024', icon: 'Globe', delay: 0.5 },
  { title: 'AI/ML Prototypes', description: 'Built using Python & TensorFlow', year: '2024', icon: 'Robot', delay: 0.6 }
]
</script>