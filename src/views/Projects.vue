<template>
  <div class="min-h-screen bg-gray-50 pt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <!-- Header -->
      <div class="text-center mb-16 animate-fadeInUp">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          My <span class="text-gradient">Projects</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          A showcase of my work at OrangeBD and personal explorations
        </p>
      </div>

      <!-- Tabs -->
      <div class="flex flex-wrap justify-center gap-4 mb-12 animate-fadeInUp" style="animation-delay: 0.2s;">
        <button 
          v-for="tab in mainTabs" 
          :key="tab.value"
          @click="activeMainTab = tab.value"
          class="px-6 py-3 rounded-full font-medium transition-all duration-300"
          :class="activeMainTab === tab.value 
            ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
            : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md'">
          {{ tab.label }}
        </button>
      </div>

      <!-- PROJECTS GRID -->
      <div class="grid lg:grid-cols-2 gap-8 mb-16">
        <ProjectCard 
          v-for="(project, index) in displayedProjects" 
          :key="project.title"
          :project="project"
          :index="index"
        />
      </div>

      <!-- Additional Projects Note -->
      <div class="text-center mt-16 animate-fadeInUp">
        <div class="bg-white rounded-2xl shadow-lg p-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">More Projects Coming Soon!</h3>
          <p class="text-gray-600 mb-6">
            I'm constantly working on new projects and exploring innovative technologies.
          </p>
          <router-link 
            to="/contact"
            class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Let's Discuss Your Project
            <svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </router-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'

const activeMainTab = ref('all')

const mainTabs = [
  { label: 'All Projects', value: 'all' },
  { label: 'Company Projects', value: 'company' },
  { label: 'Personal Projects', value: 'personal' }
]

// ALL your projects (exactly as you provided)
const allProjects = [
  {
    title: 'Sanvees by Tony',
    subtitle: 'E-Commerce Platform',
    description: 'Built comprehensive admin panel features for shop management, orders, product variants, warehouse operations, and inspections using Laravel 11 and RESTful APIs. Optimized Eloquent queries to boost user experience and streamline workflows.',
    features: [
      'Advanced admin panel with role-based access',
      'Product variant management system',
      'Order tracking and management',
      'Warehouse operations integration',
      'Performance-optimized queries'
    ],
    tech: ['Laravel 11', 'RESTful API', 'Eloquent ORM', 'MySQL', 'PHP'],
    category: 'Company',
    status: 'Running',
    year: '2025',
    client: 'OrangeBD',
    images: ['/projects/Sanvees.PNG', '/projects/Sanvees_admin.PNG'],
    github: false,
    demo: 'https://sanvees.com'
  },
  {
    title: 'PetBD',
    subtitle: 'Pet Services Platform',
    description: 'Developed secure authentication and registration system with Laravel Passport for a comprehensive pet services platform. Delivered reliable backend logic using Eloquent for seamless user interactions in agile development settings.',
    features: [
      'Secure user authentication with Laravel Passport',
      'Pet profile management',
      'Service booking system',
      'Real-time notifications',
      'Mobile-responsive design'
    ],
    tech: ['Laravel', 'Laravel Passport', 'Eloquent', 'Vue.js', 'MySQL'],
    category: 'Company',
    status: 'Completed',
    year: '2023',
    client: 'OrangeBD',
    images: ['/projects/petbd.PNG'],
    github: false,
    demo: 'https://petbd.orangebd.com'
  },
  {
    title: 'Prottaysha',
    subtitle: 'Donation Platform',
    description: 'Created comprehensive CRUD operations and responsive UI using Laravel Blade, HTML, CSS, Bootstrap, JavaScript, and Ajax. Streamlined donation processes to enhance user engagement for meaningful causes across all devices.',
    features: [
      'Secure donation processing',
      'Campaign management',
      'Real-time donation tracking',
      'Responsive design for all devices',
      'Admin dashboard for monitoring'
    ],
    tech: ['Laravel Blade', 'Bootstrap', 'Ajax', 'JavaScript', 'MySQL'],
    category: 'Company',
    status: 'Completed',
    year: '2023',
    client: 'OrangeBD',
    images: ['/projects/pro.PNG'],
    github: false,
    demo: 'https://prottaysha.org/'
  },
  {
    title: 'Simple Auth [Laravel & Vue]',
    subtitle: 'Authentication System',
    description: 'A modern PHP-based website built with Laravel 11 and Vue.js 3, implementing secure authentication and comprehensive CRUD operations. Seamlessly blends robust backend logic with reactive front-end components.',
    features: [
      'JWT-based authentication',
      'Vue.js 3 Composition API',
      'Real-time data updates',
      'Modern UI/UX design',
      'API-first architecture'
    ],
    tech: ['Laravel 11', 'Vue.js 3', 'JWT', 'Inertia.js', 'Tailwind CSS'],
    category: 'Personal',
    status: 'Completed',
    year: '2024',
    client: 'Personal',
    // images: ['/projects/simple-auth.jpg'],
    images: false,
    github: 'https://github.com/Rifat-Shikdar/OrangeBdProject',
    demo: false
  },
  {
    title: 'ASP.NET Core Employee Management',
    subtitle: 'Full-Stack Application',
    description: 'A comprehensive full-stack application built with ASP.NET Core Web API, MVC, Entity Framework, and Dapper. Implemented Repository Pattern and Ajax for dynamic UI, showcasing enterprise-level development skills.',
    features: [
      'Clean Architecture implementation',
      'Repository and Unit of Work patterns',
      'Entity Framework with Dapper integration',
      'Role-based authorization',
      'Real-time dashboard updates'
    ],
    tech: ['C#', 'ASP.NET Core', 'Entity Framework', 'Dapper', 'SQL Server'],
    category: 'Personal',
    status: 'Completed',
    year: '2023',
    client: 'Personal',
    // images: ['/projects/employee-mgmt.jpg'],
    images: false,
    github: 'https://github.com/Rifat-Shikdar/OrangeBdProject',
    demo: false,
    isDotNet: true
  },
  {
    title: 'Three-Tier Web API',
    subtitle: 'Scalable Backend Architecture',
    description: 'A robust three-tier API architecture built with ASP.NET Core and C#, focusing on modular design principles to support enterprise-ready backend solutions with optimized data handling and scalability.',
    features: [
      'Three-tier architecture (Presentation, Business, Data)',
      'Dependency Injection container',
      'Custom middleware pipeline',
      'Comprehensive error handling',
      'API versioning and documentation'
    ],
    tech: ['C#', 'ASP.NET Core', 'Three-Tier Architecture', 'Swagger', 'AutoMapper'],
    category: 'Personal',
    status: 'Completed',
    year: '2023',
    client: 'Personal',
    images: false,
    github: 'https://github.com/Rifat-Shikdar/OrangeBdProject',
    demo: false,
    isDotNet: true
  }
]

const companyProjects = allProjects.filter(p => p.category === 'Company')
const dotNetProjects = allProjects.filter(p => p.category === 'Personal' && p.isDotNet)
const otherPersonalProjects = allProjects.filter(p => p.category === 'Personal' && !p.isDotNet)

const displayedProjects = computed(() => {
  if (activeMainTab.value === 'all') return allProjects
  if (activeMainTab.value === 'company') return companyProjects
  // Personal projects including .NET and others
  return [...dotNetProjects, ...otherPersonalProjects]
})
</script>