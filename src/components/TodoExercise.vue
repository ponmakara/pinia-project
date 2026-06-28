<script setup>
import { useTodoStore } from '@/stores/useTodoStore'
import { ref } from 'vue'

const todoStore = useTodoStore()
const newTodoTitle = ref('')
</script>

<template>
  <div class="exercise">
    <h2>Todo List</h2>
    <div class="add-todo">
      <input v-model="newTodoTitle" type="text" placeholder="Enter new todo" @keyup.enter="todoStore.addTodo(newTodoTitle); newTodoTitle = ''">
      <button @click="todoStore.addTodo(newTodoTitle); newTodoTitle = ''">Add Todo</button>
    </div>
    <div class="stats">
      <p><strong>Total:</strong> {{ todoStore.totalTodos }}</p>
      <p><strong>Completed:</strong> {{ todoStore.completedTodos.length }}</p>
      <p><strong>Pending:</strong> {{ todoStore.pendingTodos.length }}</p>
    </div>
    <ul class="todo-list">
      <li v-for="todo in todoStore.todos" :key="todo.id" :class="{ completed: todo.completed }">
        <input type="checkbox" :checked="todo.completed" @change="todoStore.toggleTodo(todo.id)">
        <span>{{ todo.title }}</span>
        <button @click="todoStore.deleteTodo(todo.id)" class="delete-btn">Delete</button>
      </li>
    </ul>
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
  content: '✅';
  font-size: 1.25rem;
}
.add-todo {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}
.add-todo input {
  padding: 0.5rem 0.75rem;
  width: 200px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 0.875rem;
  background: #f9fafb;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: #1f2937;
}

.add-todo input:focus {
  outline: none;
  border-color: #6366f1;
  background: white;
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
}

.add-todo input::placeholder {
  color: #9ca3af;
}
.add-todo button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.add-todo button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
}
.stats {
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  padding: 0.75rem 1rem;
  border-radius: 12px;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  border: 1px solid #e5e7eb;
}
.stats p {
  margin: 0;
  font-size: 0.75rem;
  color: #6b7280;
  font-weight: 500;
}
.stats strong {
  font-size: 1.125rem;
  font-weight: 700;
  color: #6366f1;
  display: block;
  margin-top: 0.25rem;
}
.todo-list {
  list-style: none;
  padding: 0;
}
.todo-list li {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  background: #f9fafb;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #e5e7eb;
}

.todo-list li:hover {
  background: #f3f4f6;
  border-color: #d1d5db;
}
.todo-list li.completed span {
  text-decoration: line-through;
  opacity: 0.6;
}
.todo-list li input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.todo-list li span {
  flex: 1;
  margin-left: 0.5rem;
  font-size: 0.875rem;
  color: #374151;
  font-weight: 500;
}
.delete-btn {
  margin-left: auto;
  padding: 0.375rem 0.75rem;
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);
  font-size: 0.75rem;
}

.delete-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);
}
</style>
