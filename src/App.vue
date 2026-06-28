<script setup>
import CounterExercise from './components/CounterExercise.vue'
import UserExercise from './components/UserExercise.vue'
import TodoExercise from './components/TodoExercise.vue'
import CartExercise from './components/CartExercise.vue'
import ThemeExercise from './components/ThemeExercise.vue'
</script>

<template>
  <div class="app-container">
    <h1 class="main-title">Pinia Demo</h1>
    <div class="grid-container">
      <ThemeExercise />
      <CounterExercise />
      <UserExercise />
      <TodoExercise />
      <CartExercise class="full-width" />
    </div>
  </div>
</template>

<style>
.app-container {
  padding: 3rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
}

.main-title {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 900;
  color: #333;
  letter-spacing: -1px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
}

.full-width {
  grid-column: 1 / -1;
}

@media (max-width: 1024px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .app-container {
    padding: 2rem 1rem;
  }
  
  .main-title {
    font-size: 2rem;
  }
}
</style>
