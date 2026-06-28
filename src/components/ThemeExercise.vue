<script setup>
import { useThemeStore } from '@/stores/useThemeStore'
const themeStore = useThemeStore()
</script>

<template>
  <div class="exercise" :class="{ dark: themeStore.darkMode }">
    <h2>Theme Store</h2>
    <p>Current mode: <strong>{{ themeStore.darkMode ? 'Dark' : 'Light' }}</strong></p>
    <button @click="themeStore.toggleTheme">
      {{ themeStore.darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode' }}
    </button>
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

.exercise.dark {
  background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
  color: white;
  border: 1px solid #374151;
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
  content: '🎨';
  font-size: 1.25rem;
}

.exercise.dark h2 {
  color: white;
}
.exercise p {
  font-size: 0.875rem;
  margin: 0.5rem 0;
  color: #4b5563;
  line-height: 1.5;
}
.exercise.dark p {
  color: #d1d5db;
}
.exercise strong {
  font-size: 1.125rem;
  font-weight: 700;
  color: #6366f1;
}
.exercise.dark strong {
  color: #818cf8;
}
.exercise button {
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-top: 1rem;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.exercise button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
}

.exercise.dark button {
  background: linear-gradient(135deg, #fff 0%, #f3f4f6 100%);
  color: #6366f1;
  border: 1px solid #e5e7eb;
}
</style>
