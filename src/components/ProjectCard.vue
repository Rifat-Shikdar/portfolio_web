<template>
  <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover animate-fadeInUp"
       :style="`animation-delay: ${0.1 * index}s;`">

    <!-- IMAGE OR PLACEHOLDER -->
    <div 
      class="relative group cursor-pointer h-48 rounded-t-2xl flex items-center justify-center"
      :class="hasValidImage ? '' : 'bg-gradient-to-br from-gray-100 to-gray-200'"
      @click="handleImageClick"
    >
      <!-- Image -->
      <img 
        v-if="hasValidImage"
        :src="project.images[0]" 
        :alt="project.title"
        class="w-full h-full object-cover"
      />

      <!-- Title & Subtitle overlay for no image -->
      <div v-else class="text-center px-4">
        <h3 class="text-lg font-bold text-gray-900">{{ project.title }}</h3>
        <p class="text-sm text-gray-500">{{ project.subtitle }}</p>
      </div>

      <!-- Eye button overlay -->
      <div 
        v-if="project.demo || project.github" 
        class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center">
          <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 
                 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7
                 -4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
      </div>

      <!-- Status Badge -->
      <div class="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold text-white"
           :class="{
             'bg-green-500': project.status === 'Completed',
             'bg-yellow-500': project.status === 'In Progress',
             'bg-blue-500': project.status === 'Running'
           }">
        {{ project.status }}
      </div>
    </div>

    <!-- CONTENT -->
    <div class="p-6">
      <div class="flex items-start justify-between mb-3">
        <div>
          <h3 class="text-lg font-bold text-gray-900">{{ project.title }}</h3>
          <p class="text-blue-600 text-sm">{{ project.subtitle }}</p>
          <p v-if="project.client === 'OrangeBD'" class="text-xs text-gray-500 mt-1 flex items-center">
            <img src="/logos/orangebd.png" alt="OrangeBD" class="w-3 h-3 mr-1" />
            {{ project.client }}
          </p>
        </div>

        <!-- ACTION LINKS WITH SVG ICONS -->
        <div class="flex space-x-2">
          <!-- GitHub Link -->
          <a 
            v-if="project.github" 
            :href="project.github.trim()" 
            target="_blank"
            class="flex items-center space-x-1 px-3 py-1 rounded-full bg-gray-800 text-white text-sm font-medium hover:bg-gray-700 transition"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12 .297c-6.63 0-12 5.373-12 12 
                   0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
                   0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61
                   -.546-1.385-1.333-1.754-1.333-1.754-1.089-.744.083-.729.083-.729
                   1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 
                   3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.93
                   0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176
                   0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405
                   1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23
                   3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91
                   1.23 3.22 0 4.61-2.805 5.625-5.475 5.92
                   .42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286
                   0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297
                   c0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>

          <!-- Live Demo Link -->
          <a 
            v-if="project.demo" 
            :href="project.demo.trim()" 
            target="_blank"
            class="flex items-center space-x-1 px-3 py-1 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10
                       10-4.486 10-10S17.514 2 12 2zm0 18
                       c-4.418 0-8-3.582-8-8s3.582-8 8-8
                       8 3.582 8 8-3.582 8-8 8z"/>
              <path d="M12 6a6 6 0 100 12 6 6 0 000-12z"/>
            </svg>
            <span>Live Demo</span>
          </a>
        </div>
      </div>

      <p class="text-gray-700 text-sm mb-3">{{ project.description }}</p>

      <div class="flex flex-wrap gap-1 mt-3">
        <span 
          v-for="tech in project.tech" 
          :key="tech"
          class="px-2 py-1 bg-gray-100 text-xs rounded-full"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: Object,
  index: Number
})

// Check if image exists
const hasValidImage = computed(() => {
  return props.project.images &&
         Array.isArray(props.project.images) &&
         props.project.images.length > 0 &&
         props.project.images[0] &&
         props.project.images[0].trim() !== ''
})

// Eye button logic (click opens Live Demo first, then GitHub)
const handleImageClick = () => {
  const demoUrl = props.project.demo?.trim()
  const githubUrl = props.project.github?.trim()

  if (demoUrl) window.open(demoUrl, '_blank')
  else if (githubUrl) window.open(githubUrl, '_blank')
}
</script>
