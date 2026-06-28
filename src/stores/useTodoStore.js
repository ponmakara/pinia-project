import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref([])

  const completedTodos = computed(() => todos.value.filter(todo => todo.completed))
  const pendingTodos = computed(() => todos.value.filter(todo => !todo.completed))
  const totalTodos = computed(() => todos.value.length)

  function addTodo(title) {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    }
    todos.value.push(newTodo)
  }

  function deleteTodo(id) {
    todos.value = todos.value.filter(todo => todo.id !== id)
  }

  function toggleTodo(id) {
    const todo = todos.value.find(todo => todo.id === id)
    if (todo) {
      todo.completed = !todo.completed
    }
  }

  return { todos, completedTodos, pendingTodos, totalTodos, addTodo, deleteTodo, toggleTodo }
})
