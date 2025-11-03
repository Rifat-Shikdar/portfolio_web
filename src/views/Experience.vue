<template>
  <div class="min-h-screen bg-gray-50 pt-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="text-center mb-16 animate-fadeInUp">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          My <span class="text-gradient">Experience</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          My professional journey and educational background in software development
        </p>
      </div>

      <div class="relative">
        <div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform md:-translate-x-0.5"></div>
        
        <div class="space-y-12">
          <!-- Junior Software Engineer -->
          <div class="relative flex items-center animate-fadeInLeft">
            <div class="absolute left-6 md:left-1/2 w-4 h-4 bg-blue-500 border-4 border-white rounded-full shadow-lg transform md:-translate-x-2 z-10"></div>
            <div class="ml-16 md:ml-0 md:w-1/2 md:pr-12">
              <div class="bg-white rounded-2xl shadow-xl p-8 card-hover">
                <div class="flex items-center mb-4">
                  <img src="/logos/orangebd.png" alt="OrangeBD" class="w-10 h-10 object-contain mr-3" />
                  <a href="https://orangebd.com" target="_blank" class="text-blue-600 font-semibold hover:underline">OrangeBD</a>
                  <span class="mx-2 text-gray-400">•</span>
                  <span class="text-sm text-gray-500">2023 – Present</span>
                </div>
                <h2 class="text-2xl font-bold text-gray-900 mb-2">Junior Software Engineer</h2>
                <!-- Rest of your existing content -->
                <div class="space-y-4">
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-2">Key Responsibilities:</h3>
                    <ul class="space-y-2">
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-gray-700">Built scalable web applications using Laravel, PHP, JavaScript, and ASP.NET Core</span>
                      </li>
                      <!-- Add other points as needed -->
                    </ul>
                  </div>
                  <div class="bg-blue-50 rounded-lg p-4">
                    <h4 class="font-semibold text-blue-900 mb-2">Key Achievements:</h4>
                    <ul class="text-sm text-blue-800 space-y-1">
                      <li>• Successfully delivered 5+ production applications</li>
                      <li>• Improved application performance by 40%</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Education -->
          <div class="relative flex items-center animate-fadeInRight">
            <div class="absolute left-6 md:left-1/2 w-4 h-4 bg-purple-500 border-4 border-white rounded-full shadow-lg transform md:-translate-x-2 z-10"></div>
            <div class="ml-16 md:ml-0 md:w-1/2 md:ml-auto md:pl-12">
              <div class="bg-white rounded-2xl shadow-xl p-8 card-hover">
                <div class="flex items-center mb-4">
                  <img src="/logos/aiub.png" alt="AIUB" class="w-10 h-10 object-contain mr-3" />
                  <span class="text-purple-600 font-semibold">American International University-Bangladesh</span>
                  <span class="mx-2 text-gray-400">•</span>
                  <span class="text-sm text-gray-500">2019 – 2023</span>
                </div>
                <h2 class="text-2xl font-bold text-gray-900 mb-2">BSc in Computer Science</h2>
                <div class="grid grid-cols-2 gap-4 mt-4">
                  <div class="text-center p-4 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg">
                    <div class="text-2xl font-bold text-purple-600">3.60</div>
                    <div class="text-sm text-gray-600">CGPA</div>
                  </div>
                  <div class="text-center p-4 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg">
                    <div class="text-2xl font-bold text-blue-600">4</div>
                    <div class="text-sm text-gray-600">Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>