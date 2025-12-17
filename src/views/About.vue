<template>
  <div class="min-h-screen pt-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Hero -->
      <div class="text-center mb-16 animate-fadeInUp">
        <h1 class="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
          About <span class="text-gradient">Me</span>
        </h1>
        <p class="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
          I'm a passionate developer who loves turning ideas into reality through code
        </p>
      </div>

      <!-- Main Grid -->
      <div class="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <!-- Image -->
        <div class="space-y-6 animate-fadeInLeft">
          <div class="flex justify-center">
            <div class="relative group">
              <img src="/profile.jpeg" alt="Md Rifat Shikdar"
                   class="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-2xl transition-transform group-hover:scale-105">
              <div class="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>

        <!-- Text -->
        <div class="space-y-6 animate-fadeInRight">
          <div class="card">
            <h2 class="text-2xl font-bold text-[var(--text-primary)] mb-4">My Journey</h2>
            <p class="text-[var(--text-secondary)] leading-relaxed mb-4">
              I'm <span class="font-semibold text-[var(--accent-blue)]">Md Rifat Shikdar</span>, a Junior Software Engineer at
              <span class="font-semibold text-[var(--accent-purple)]">OrangeBD</span> with a BSc in Computer Science from AIUB (CGPA 3.60).
              My passion lies in building innovative web applications and exploring cutting-edge technologies like
              <span class="font-semibold text-[var(--accent-green)]">AI, Machine Learning, and Data Science</span>.
            </p>
            <p class="text-[var(--text-secondary)] leading-relaxed mb-4">
              With <span class="font-semibold text-[var(--accent-blue)]">1+ years</span> of experience, I specialize in Laravel, PHP, JavaScript, ASP.NET, and C#.
              I thrive in <span class="font-semibold text-[var(--accent-purple)]">agile environments</span>.
            </p>
            <p class="text-[var(--text-secondary)] leading-relaxed">
              I'm constantly learning — currently mastering Vue.js 3 and pushing the boundaries of web development.
            </p>
          </div>
        </div>
      </div>

      <!-- Values -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-center text-[var(--text-primary)] mb-12 animate-fadeInUp">What Drives Me</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="card card-hover text-center animate-fadeInUp" style="animation-delay: 0.2s;">
            <div class="w-16 h-16 bg-gradient-to-br from-[var(--accent-blue)] to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-[var(--text-primary)] mb-4">Innovation</h3>
            <p class="text-[var(--text-secondary)]">Pushing boundaries with new tech.</p>
          </div>
          <div class="card card-hover text-center animate-fadeInUp" style="animation-delay: 0.4s;">
            <div class="w-16 h-16 bg-gradient-to-br from-[var(--accent-green)] to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-[var(--text-primary)] mb-4">Collaboration</h3>
            <p class="text-[var(--text-secondary)]">Agile teams, shared success.</p>
          </div>
          <div class="card card-hover text-center animate-fadeInUp" style="animation-delay: 0.6s;">
            <div class="w-16 h-16 bg-gradient-to-br from-[var(--accent-purple)] to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-[var(--text-primary)] mb-4">Problem Solving</h3>
            <p class="text-[var(--text-secondary)]">Elegant solutions, real impact.</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center animate-fadeInUp">
        <div class="bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] rounded-2xl shadow-xl p-8 text-white">
          <h3 class="text-2xl font-bold mb-4">Let's Build Something Amazing</h3>
          <p class="text-blue-100 mb-6">I'm open to new opportunities and collaborations.</p>
          <router-link to="/contact" class="inline-flex items-center px-8 py-4 bg-white text-[var(--accent-blue)] font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
            Get In Touch
            <svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>