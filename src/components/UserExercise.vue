<script setup>
import { useUserStore } from '@/stores/useUserStore'
const user = useUserStore()
</script>

<template>
  <div class="exercise">
    <h2>User Store</h2>
    <div class="user-info">
      <p><strong>Name:</strong> {{ user.name || 'Not set' }}</p>
      <p><strong>Age:</strong> {{ user.age || 'Not set' }}</p>
      <p><strong>Email:</strong> {{ user.email || 'Not set' }}</p>
    </div>
    <form class="user-form" @submit.prevent>
      <h3>Update User Information</h3>
      <div class="form-group">
        <label>Name:</label>
        <input v-model="user.name" type="text" placeholder="Enter name">
      </div>
      <div class="form-group">
        <label>Age:</label>
        <input v-model.number="user.age" type="number" placeholder="Enter age">
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input v-model="user.email" type="email" placeholder="Enter email">
      </div>
    </form>
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
  content: '👤';
  font-size: 1.25rem;
}

.exercise h3 {
  color: #374151;
  margin: 1rem 0 0.75rem 0;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.025em;
}
.user-info {
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 1rem;
  border: 1px solid #e5e7eb;
}
.user-info p {
  font-size: 0.875rem;
  margin: 0.5rem 0;
  color: #4b5563;
  line-height: 1.5;
}
.user-info strong {
  font-weight: 700;
  color: #6366f1;
}
.user-form {
  margin-top: 1.5rem;
}
.form-group {
  margin-bottom: 1rem;
}
.form-group label {
  display: inline-block;
  width: 70px;
  font-weight: 600;
  font-size: 0.875rem;
}
.form-group input {
  padding: 0.5rem 0.75rem;
  width: 200px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 0.875rem;
  background: #f9fafb;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: #1f2937;
}

.form-group input:focus {
  outline: none;
  border-color: #6366f1;
  background: white;
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
}

.form-group input::placeholder {
  color: #9ca3af;
}
</style>
