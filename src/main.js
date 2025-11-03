import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')

// Global Dark Mode (sync with Navbar)
const html = document.documentElement
const savedTheme = localStorage.getItem('darkMode')
if (savedTheme === 'true') {
  html.classList.add('dark')
}

window.addEventListener('load', () => {
  const loader = document.getElementById('loader')
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = '0'
      setTimeout(() => loader.remove(), 300)
    }, 800)
  }
})