import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const name = ref('')
  const age = ref(0)
  const email = ref('')

  function updateName(newName) {
    name.value = newName
  }

  function updateAge(newAge) {
    age.value = newAge
  }

  function updateEmail(newEmail) {
    email.value = newEmail
  }

  return { name, age, email, updateName, updateAge, updateEmail }
})
