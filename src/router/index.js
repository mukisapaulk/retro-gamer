import { createRouter, createWebHistory } from 'vue-router'
import PuzzleGame from '../components/PuzzleGame.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', 
      name: 'Puzzle', 
      component: PuzzleGame },
  ],
})

export default router



