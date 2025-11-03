<template>
  <section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 animate-fadeInUp opacity-0" style="animation-delay: 1.8s;">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
        <p class="text-xl text-gray-600">A showcase of my recent work</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="project.title"
          class="glass-card card-hover p-6 animate-fadeInUp opacity-0"
          :style="`animation-delay: ${2 + index * 0.2}s;`"
        >
          <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
            <span class="text-white font-bold text-lg">{{ project.icon }}</span>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ project.title }}</h3>
          <p class="text-gray-600 mb-4">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in project.tech"
              :key="tech"
              class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>

      <div class="text-center mt-12 animate-fadeInUp opacity-0" style="animation-delay: 2.8s;">
        <router-link to="/projects" class="ripple btn-primary">
          View All Projects
          <svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'Sanvees by Tony',
    description: 'E-commerce platform with advanced admin panel features',
    tech: ['Laravel 11', 'API', 'Eloquent'],
    icon: 'Cart'
  },
  {
    title: 'PetBD',
    description: 'Pet services platform with secure authentication',
    tech: ['Laravel', 'Passport', 'Security'],
    icon: 'Paw'
  },
  {
    title: 'Employee Management',
    description: 'Full-stack application with ASP.NET Core',
    tech: ['ASP.NET', 'C#', 'Entity Framework'],
    icon: 'Team'
  }
]
</script>