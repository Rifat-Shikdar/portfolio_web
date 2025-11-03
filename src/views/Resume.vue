<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 pt-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="text-center mb-12 animate-fadeInUp">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          My <span class="text-gradient">Resume</span>
        </h1>
        <div class="flex justify-center mt-6">
          <a
            href="/Rifat_Shikdar_Resume.pdf"
            download
            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Download Resume (PDF)
          </a>
        </div>
      </div>

      <div class="grid lg:grid-cols-3 gap-12">
        <div class="lg:col-span-2 space-y-8">
          <!-- Professional Summary -->
          <div class="bg-white rounded-2xl shadow-xl p-8 animate-fadeInLeft">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Professional Summary</h2>
            <p class="text-gray-700 leading-relaxed">
              Junior Software Engineer with 1+ years of experience in Laravel, ASP.NET Core, and Vue.js...
            </p>
          </div>

          <!-- Skills with Proper Icons -->
          <div class="bg-white rounded-2xl shadow-xl p-8 animate-fadeInLeft">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h2>
            <div class="space-y-4">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
                <span>Laravel / PHP</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M9 9H5m14 0V7a2 2 0 10-4 0"></path>
                </svg>
                <span>ASP.NET Core / C#</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h10a2 2 0 002-2v-4a2 2 0 00-2-2h-2m-4 0H9a2 2 0 00-2 2v4a2 2 0 002 2z"></path>
                </svg>
                <span>Vue.js 3 / JavaScript</span>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-8">
          <!-- Contact with Proper Icons -->
          <div class="bg-white rounded-2xl shadow-xl p-8 animate-fadeInRight">
            <h2 class="text-xl font-bold text-gray-900 mb-6">Contact</h2>
            <div class="space-y-4">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href="mailto:rifatshikdar6@gmail.com" class="text-blue-600">rifatshikdar6@gmail.com</a>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>