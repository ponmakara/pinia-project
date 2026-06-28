import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('products', () => {
  const products = ref([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 }
  ])

  function addProduct(product) {
    products.value.push(product)
  }

  function removeProduct(productId) {
    products.value = products.value.filter(product => product.id !== productId)
  }

  function getProductById(productId) {
    return products.value.find(product => product.id === productId)
  }

  return { products, addProduct, removeProduct, getProductById }
})
