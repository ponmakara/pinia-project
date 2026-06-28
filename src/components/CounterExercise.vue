<script setup>
import { useCounterStore } from '@/stores/useCounterStore'
const counter = useCounterStore()
</script>

<template>
  <div class="exercise">
    <h2>Counter Store</h2>
    <p>Current count: <strong>{{ counter.count }}</strong></p>
    <p>Double count: <strong>{{ counter.doubleCount }}</strong></p>
    <div class="buttons">
      <button @click="counter.increment">Increment</button>
      <button @click="counter.decrement">Decrement</button>
      <button @click="counter.reset">Reset</button>
    </div>
  </div>
</template>

<style scoped>
.exercise {
  background: white;
  padding: 1.5rem;
  margin-bottom: 0;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04), 0 8px 16px rgba(0, 0, 0, 0.08);
  color: #1f2937;
  border: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.exercise:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06), 0 12px 24px rgba(0, 0, 0, 0.12);
  transform: translateY(-2px);
}
.exercise h2 {
  color: #111827;
  margin: 0 0 1rem 0;
  font-size: 1.25rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: -0.025em;
}

.exercise h2::before {
  content: '📊';
  font-size: 1.25rem;
}
.exercise p {
  font-size: 0.875rem;
  margin: 0.5rem 0;
  color: #4b5563;
  line-height: 1.5;
}
.exercise strong {
  font-size: 1.125rem;
  font-weight: 700;
  color: #6366f1;
}
.buttons {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}
.buttons button {
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3);
  position: relative;
  overflow: hidden;
}

.buttons button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.buttons button:hover::before {
  left: 100%;
}
.buttons button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
}
.buttons button:active {
  transform: translateY(0);
}
</style>
