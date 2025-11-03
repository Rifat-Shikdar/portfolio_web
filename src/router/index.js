import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Experience from '../views/Experience.vue'
import Projects from '../views/Projects.vue'
import Skills from '../views/Skills.vue'
import Resume from '../views/Resume.vue'
import Contact from '../views/Contact.vue'
import Achievements from '../views/Achievements.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/achievements',
    name: 'Achievements',
    component: Achievements
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router