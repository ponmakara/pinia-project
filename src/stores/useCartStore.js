import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const products = ref([
    { id: 1, name: 'Laptop', price: 999, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&h=200&fit=crop' },
    { id: 2, name: 'Phone', price: 699, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop' },
    { id: 3, name: 'Tablet', price: 499, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=200&h=200&fit=crop' },
    { id: 4, name: 'Headphones', price: 199, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop' }
  ])
  const cart = ref([])

  const totalItems = computed(() => cart.value.length)
  const totalPrice = computed(() => cart.value.reduce((total, item) => total + item.price, 0))

  function addToCart(product) {
    cart.value.push(product)
  }

  function removeFromCart(productId) {
    cart.value = cart.value.filter(item => item.id !== productId)
  }

  function clearCart() {
    cart.value = []
  }

  return { products, cart, totalItems, totalPrice, addToCart, removeFromCart, clearCart }
})
