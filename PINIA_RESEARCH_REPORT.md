# Pinia Research Report

## 4️⃣ Installation & Setup

### Prerequisites
- Node.js version 16 or higher
- npm version 7 or higher
- A Vue 3 project created with Vite or Vue CLI

### Step 1: Create a Vue 3 Project
```bash
npm create vite@latest my-app -- --template vue
cd my-app
npm install
```

### Step 2: Install Pinia
```bash
npm install pinia
```

After installation, pinia appears in package.json under dependencies:
```json
"dependencies": {
  "pinia": "^2.1.0",
  "vue": "^3.3.0"
}
```

### Step 3: Register Pinia in main.js
```javascript
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.mount('#app')
```

### Step 4: Organize the stores/ Folder
Create a src/stores/ directory and give each store its own file:
```
src/
├── components/
├── stores/
│   ├── useAuthStore.js
│   ├── useCartStore.js
│   └── useProductStore.js
├── views/
├── App.vue
└── main.js
```

### Step 5: Use a Store in a Component
```javascript
<script setup>
import { useCounterStore } from '@/stores/useCounterStore'
const counter = useCounterStore()
</script>

<template>
  <p>Count: {{ counter.count }}</p>
  <button @click='counter.increment'>Add</button>
</template>
```

## 5️⃣ Best Practices for Using Pinia

### 1. Use Composition API Style (Setup Stores)
Prefer the Composition API style with `defineStore` and setup functions over the Options API style. This provides better TypeScript support, more flexibility, and aligns with modern Vue 3 practices.

**Why:** Better code organization, improved TypeScript inference, and easier refactoring.

```javascript
// ✅ Good - Composition API style
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() { count.value++ }
  return { count, doubleCount, increment }
})

// ❌ Avoid - Options API style (legacy)
export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() { this.count++ }
  }
})
```

### 2. Organize Stores by Domain/Feature
Group related state and logic into domain-specific stores rather than having one large store. This follows the single responsibility principle and makes your codebase more maintainable.

**Why:** Better separation of concerns, easier testing, and improved code reusability.

```javascript
// ✅ Good - Separate stores by domain
stores/
├── useAuthStore.js      // Authentication logic
├── useCartStore.js      // Shopping cart logic
├── useProductStore.js   // Product management
└── useUserStore.js      // User profile data

// ❌ Avoid - One giant store
stores/
└── useMainStore.js      // Everything in one place
```

### 3. Use Computed Properties for Getters
Leverage Vue's `computed` for derived state instead of manually calculating values. This ensures reactivity and performance optimization.

**Why:** Automatic caching, reactivity, and better performance.

```javascript
// ✅ Good - Use computed for getters
const doubleCount = computed(() => count.value * 2)
const fullName = computed(() => `${firstName.value} ${lastName.value}`)

// ❌ Avoid - Manual calculations
function getDoubleCount() {
  return count.value * 2
}
```

### 4. Keep Actions Pure When Possible
Design actions to be pure functions when possible, especially for state updates. Avoid side effects like API calls directly in actions unless necessary.

**Why:** Easier testing, predictable behavior, and better debugging.

```javascript
// ✅ Good - Pure action
function updateName(newName) {
  name.value = newName
}

// ❌ Avoid - Side effects in state updates
function updateName(newName) {
  name.value = newName
  api.logUpdate(newName)  // Side effect
  localStorage.setItem('name', newName)  // Side effect
}
```

### 5. Use TypeScript for Type Safety
When using TypeScript, define interfaces for your state and return types. This provides compile-time checking and better IDE autocomplete.

**Why:** Catch errors early, better developer experience, and self-documenting code.

```javascript
// ✅ Good - With TypeScript
interface UserState {
  name: string
  age: number
  email: string
}

export const useUserStore = defineStore('user', () => {
  const name = ref<string>('')
  const age = ref<number>(0)
  const email = ref<string>('')
  
  function updateName(newName: string): void {
    name.value = newName
  }
  
  return { name, age, email, updateName }
})
```

### Additional Best Practices

**6. Use Descriptive Store Names**
Name your stores with clear, descriptive names that indicate their purpose. Use the `use` prefix convention.

**7. Lazy Load Stores When Needed**
Pinia stores are lazy-loaded by default, meaning they're only created when first used. Take advantage of this for better performance.

**8. Avoid Direct State Mutation Outside Actions**
While Pinia allows direct state mutation, it's better to update state through actions for consistency and easier debugging.

**9. Use Store Composition**
Combine multiple stores when needed. Stores can use other stores, allowing for complex state management while keeping concerns separated.

**10. Document Your Stores**
Add JSDoc comments to document the purpose of your store, its state, actions, and getters.

## 💻 Practice Exercises Completed

### Exercise 1: Counter Store ✅
- State: `count`
- Actions: `increment()`, `decrement()`, `reset()`
- Getter: `doubleCount`
- Display: Current count, double count, and buttons

### Exercise 2: User Store ✅
- State: `name`, `age`, `email`
- Actions: `updateName()`, `updateAge()`, `updateEmail()`
- Display: User information with update form

### Exercise 3: Todo List ✅
- State: `todos` (with id, title, completed)
- Actions: `addTodo()`, `deleteTodo()`, `toggleTodo()`
- Getters: `completedTodos`, `pendingTodos`, `totalTodos`
- Features: Add, delete, toggle todos, display statistics

### Exercise 4: Shopping Cart ✅
- State: `products`, `cart`
- Actions: `addToCart()`, `removeFromCart()`, `clearCart()`
- Getters: `totalItems`, `totalPrice`
- Display: Product list, cart, totals

### Exercise 5: Theme Store ✅
- State: `darkMode`
- Action: `toggleTheme()`
- Display: Theme toggle button with visual feedback

## 📤 Project Structure

```
pinia-project/
├── src/
│   ├── components/
│   │   ├── CounterExercise.vue
│   │   ├── UserExercise.vue
│   │   ├── TodoExercise.vue
│   │   ├── CartExercise.vue
│   │   └── ThemeExercise.vue
│   ├── stores/
│   │   ├── useCounterStore.js
│   │   ├── useUserStore.js
│   │   ├── useTodoStore.js
│   │   ├── useCartStore.js
│   │   ├── useThemeStore.js
│   │   ├── useAuthStore.js
│   │   └── useProductStore.js
│   ├── views/
│   ├── App.vue
│   └── main.js
├── package.json
├── vite.config.js
└── PINIA_RESEARCH_REPORT.md
```

## 🚀 Running the Application

```bash
npm install
npm run dev
```

The application will be available at `http://localhost:5173/`
