<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 pt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Header -->
      <div class="text-center mb-16 animate-fadeInUp">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          My <span class="text-gradient">Skills</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          A comprehensive overview of my technical expertise and proficiency levels
        </p>
      </div>

      <!-- Skills Categories -->
      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Technical Skills -->
        <div class="space-y-8">
          <div class="bg-white rounded-2xl shadow-xl p-8 animate-fadeInLeft">
            <h2 class="text-2xl font-bold text-gray-900 mb-8">Technical Skills</h2>
            <div class="space-y-6">
              <div v-for="skill in technicalSkills" :key="skill.name" class="skill-item">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-lg font-medium text-gray-800">{{ skill.name }}</span>
                  <span class="text-sm font-semibold px-3 py-1 rounded-full"
                        :class="getSkillLevelClass(skill.level)">
                    {{ skill.level }}
                  </span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-3 progress-bar">
                  <div class="h-3 rounded-full transition-all duration-1000 ease-out"
                       :class="getSkillBarClass(skill.level)"
                       :style="`width: ${skill.percentage}%`">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Tools & Frameworks -->
          <div class="bg-white rounded-2xl shadow-xl p-8 animate-fadeInLeft" style="animation-delay: 0.2s;">
            <h2 class="text-2xl font-bold text-gray-900 mb-8">Tools & Frameworks</h2>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="tool in tools" :key="tool.name" 
                   class="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3"
                     :class="tool.bgColor">
                  <span class="text-lg">{{ tool.icon }}</span>
                </div>
                <div>
                  <div class="font-medium text-gray-900">{{ tool.name }}</div>
                  <div class="text-sm text-gray-600">{{ tool.category }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Soft Skills & Experience -->
        <div class="space-y-8">
          <!-- Core Competencies -->
          <div class="bg-white rounded-2xl shadow-xl p-8 animate-fadeInRight">
            <h2 class="text-2xl font-bold text-gray-900 mb-8">Core Competencies</h2>
            <div class="grid grid-cols-1 gap-4">
              <div v-for="competency in competencies" :key="competency.name"
                   class="flex items-start p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
                <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">{{ competency.name }}</h3>
                  <p class="text-sm text-gray-700 mt-1">{{ competency.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Learning Journey -->
          <div class="bg-white rounded-2xl shadow-xl p-8 animate-fadeInRight" style="animation-delay: 0.2s;">
            <h2 class="text-2xl font-bold text-gray-900 mb-8">Current Learning</h2>
            <div class="space-y-6">
              <div v-for="item in currentLearning" :key="item.name" class="learning-item">
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center">
                    <div class="w-3 h-3 rounded-full mr-3"
                         :class="item.status === 'Active' ? 'bg-green-500 animate-pulse' : 'bg-blue-500'">
                    </div>
                    <span class="font-medium text-gray-900">{{ item.name }}</span>
                  </div>
                  <span class="text-sm px-2 py-1 rounded-full"
                        :class="item.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'">
                    {{ item.status }}
                  </span>
                </div>
                <p class="text-sm text-gray-600 ml-6">{{ item.description }}</p>
              </div>
            </div>
          </div>

          <!-- Achievements -->
          <div class="bg-white rounded-2xl shadow-xl p-8 animate-fadeInRight" style="animation-delay: 0.4s;">
            <h2 class="text-2xl font-bold text-gray-900 mb-8">Achievements</h2>
            <div class="space-y-4">
              <div v-for="achievement in achievements" :key="achievement.title" 
                   class="flex items-start p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-l-4 border-yellow-500">
                <div class="text-2xl mr-4">{{ achievement.icon }}</div>
                <div>
                  <h3 class="font-semibold text-gray-900">{{ achievement.title }}</h3>
                  <p class="text-sm text-gray-700 mt-1">{{ achievement.description }}</p>
                  <span class="text-xs text-gray-500">{{ achievement.year }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills Chart Section -->
      <div class="mt-16 bg-white rounded-2xl shadow-xl p-8 animate-fadeInUp">
        <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">Technology Proficiency Overview</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="relative inline-flex items-center justify-center w-32 h-32 mb-4">
              <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              <div class="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                <span class="text-2xl font-bold text-blue-600">85%</span>
              </div>
            </div>
            <h3 class="text-lg font-semibold text-gray-900">Backend Development</h3>
            <p class="text-sm text-gray-600">Laravel, PHP, ASP.NET Core</p>
          </div>
          
          <div class="text-center">
            <div class="relative inline-flex items-center justify-center w-32 h-32 mb-4">
              <div class="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
              <div class="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                <span class="text-2xl font-bold text-green-600">75%</span>
              </div>
            </div>
            <h3 class="text-lg font-semibold text-gray-900">Frontend Development</h3>
            <p class="text-sm text-gray-600">Vue.js, JavaScript, HTML/CSS</p>
          </div>
          
          <div class="text-center">
            <div class="relative inline-flex items-center justify-center w-32 h-32 mb-4">
              <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
              <div class="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                <span class="text-2xl font-bold text-purple-600">70%</span>
              </div>
            </div>
            <h3 class="text-lg font-semibold text-gray-900">DevOps & Tools</h3>
            <p class="text-sm text-gray-600">Git, APIs, Microservices</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const technicalSkills = ref([
  { name: 'Laravel / PHP', level: 'Expert', percentage: 90 },
  { name: 'JavaScript', level: 'Intermediate', percentage: 75 },
  { name: 'Vue.js 3', level: 'Intermediate', percentage: 70 },
  { name: 'ASP.NET Core / C#', level: 'Intermediate', percentage: 72 },
  { name: 'HTML/CSS', level: 'Expert', percentage: 88 },
  { name: 'MySQL / Databases', level: 'Proficient', percentage: 80 },
  { name: 'RESTful APIs', level: 'Proficient', percentage: 85 },
  { name: 'Git / Version Control', level: 'Proficient', percentage: 82 }
])

const tools = ref([
  { name: 'Laravel', icon: '🏗️', category: 'Framework', bgColor: 'bg-red-100' },
  { name: 'Vue.js', icon: '💚', category: 'Frontend', bgColor: 'bg-green-100' },
  { name: 'Bootstrap', icon: '🎨', category: 'CSS Framework', bgColor: 'bg-purple-100' },
  { name: 'Postman', icon: '📮', category: 'API Testing', bgColor: 'bg-orange-100' },
  { name: 'Git', icon: '📝', category: 'Version Control', bgColor: 'bg-gray-100' },
  { name: 'MySQL', icon: '🗄️', category: 'Database', bgColor: 'bg-blue-100' },
  { name: 'VS Code', icon: '💻', category: 'IDE', bgColor: 'bg-indigo-100' },
  { name: 'Docker', icon: '🐳', category: 'DevOps', bgColor: 'bg-cyan-100' }
])

const competencies = ref([
  {
    name: 'RESTful API Design',
    description: 'Designing and implementing scalable, maintainable APIs following REST principles'
  },
  {
    name: 'Agile Development',
    description: 'Experienced in working with agile methodologies and cross-functional teams'
  },
  {
    name: 'Database Optimization',
    description: 'Proficient in query optimization and database performance tuning'
  },
  {
    name: 'Responsive Web Design',
    description: 'Creating mobile-first, responsive web applications for all devices'
  },
  {
    name: 'Secure Authentication',
    description: 'Implementing robust authentication and authorization systems'
  },
  {
    name: 'Microservices Architecture',
    description: 'Understanding of distributed systems and microservices patterns'
  }
])

const currentLearning = ref([
  {
    name: 'Advanced Vue.js 3',
    description: 'Diving deeper into Composition API, Pinia state management, and advanced patterns',
    status: 'Active'
  },
  {
    name: 'Machine Learning with Python',
    description: 'Exploring ML algorithms and their practical applications in web development',
    status: 'Active'
  },
  {
    name: 'Cloud Computing (AWS)',
    description: 'Learning cloud deployment and serverless architectures',
    status: 'Planning'
  },
  {
    name: 'Docker & Containerization',
    description: 'Mastering containerization for development and deployment',
    status: 'Active'
  }
])

const achievements = ref([
  {
    title: 'BSc in Computer Science - CGPA 3.60',
    description: 'Graduated from American International University-Bangladesh with excellent academic performance',
    year: '2023',
    icon: '🎓'
  },
  {
    title: 'Junior Software Engineer at OrangeBD',
    description: 'Successfully transitioned from academic learning to professional software development',
    year: '2023',
    icon: '💼'
  },
  {
    title: 'Multiple Successful Projects',
    description: 'Delivered 7+ projects including e-commerce platforms and web applications',
    year: '2023-2024',
    icon: '🚀'
  }
])

const getSkillLevelClass = (level) => {
  switch (level) {
    case 'Expert': return 'bg-green-100 text-green-800'
    case 'Proficient': return 'bg-blue-100 text-blue-800'
    case 'Intermediate': return 'bg-yellow-100 text-yellow-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

const getSkillBarClass = (level) => {
  switch (level) {
    case 'Expert': return 'bg-gradient-to-r from-green-400 to-green-600'
    case 'Proficient': return 'bg-gradient-to-r from-blue-400 to-blue-600'
    case 'Intermediate': return 'bg-gradient-to-r from-yellow-400 to-yellow-600'
    default: return 'bg-gradient-to-r from-gray-400 to-gray-600'
  }
}
</script>