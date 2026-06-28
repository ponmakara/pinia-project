<script setup>
import { useCartStore } from '@/stores/useCartStore'
const cartStore = useCartStore()
</script>

<template>
  <div class="exercise">
    <h2>Shopping Cart</h2>
    <div class="products">
      <h3>Products</h3>
      <div class="product-list">
        <div v-for="product in cartStore.products" :key="product.id" class="product-item">
          <img :src="product.image" :alt="product.name" class="product-image">
          <div class="product-details">
            <span class="product-name">{{ product.name }}</span>
            <span class="product-price">${{ product.price }}</span>
          </div>
          <button @click="cartStore.addToCart(product)" class="add-btn">
            <span class="icon">🛒</span> Add to Cart
          </button>
        </div>
      </div>
    </div>
    <div class="cart">
      <h3>Shopping Cart</h3>
      <div v-if="cartStore.cart.length === 0" class="empty-cart">Cart is empty</div>
      <ul v-else class="cart-items">
        <li v-for="item in cartStore.cart" :key="item.id">
          <img :src="item.image" :alt="item.name" class="cart-item-image">
          <div class="cart-item-details">
            <span class="cart-item-name">{{ item.name }}</span>
            <span class="cart-item-price">${{ item.price }}</span>
          </div>
          <button @click="cartStore.removeFromCart(item.id)" class="remove-btn">
            <span class="icon">🗑️</span> Remove
          </button>
        </li>
      </ul>
      <div class="cart-summary">
        <p><strong>Total Items:</strong> {{ cartStore.totalItems }}</p>
        <p><strong>Total Price:</strong> ${{ cartStore.totalPrice }}</p>
        <button v-if="cartStore.cart.length > 0" @click="cartStore.clearCart" class="clear-btn">
          <span class="icon">🧹</span> Clear Cart
        </button>
      </div>
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
  content: '🛒';
  font-size: 1.25rem;
}

.exercise h3 {
  color: #374151;
  margin: 1rem 0 0.75rem 0;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.025em;
}
.products, .cart {
  margin-bottom: 1.5rem;
}
.product-list, .cart-items {
  list-style: none;
  padding: 0;
}
.product-item, .cart-items li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: white;
  border-radius: 12px;
  margin-bottom: 0.75rem;
  gap: 1rem;
  border: 1px solid #e5e7eb;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.product-item:hover, .cart-items li:hover {
  background: #f9fafb;
  border-color: #6366f1;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.15);
  transform: translateY(-2px);
}
.product-item span, .cart-items li {
  font-size: 1.1rem;
  font-weight: 500;
}
.product-image, .cart-item-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 10px;
  border: 2px solid #e5e7eb;
  transition: all 0.3s ease;
}

.product-item:hover .product-image, .cart-items li:hover .cart-item-image {
  border-color: #6366f1;
}

.product-details, .cart-item-details {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.product-name, .cart-item-name {
  font-weight: 600;
  font-size: 0.9375rem;
  color: #111827;
}

.product-price, .cart-item-price {
  color: #6366f1;
  font-weight: 700;
  font-size: 0.9375rem;
  background: linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%);
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
}

.icon {
  margin-right: 0.25rem;
}

.product-item button, .cart-items li button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.product-item button {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3);
  font-size: 0.8125rem;
  border-radius: 8px;
  font-weight: 600;
}
.product-item button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
}
.remove-btn {
  background: rgba(255, 68, 68, 0.9);
  color: white;
}
.remove-btn:hover {
  background: rgba(255, 68, 68, 1);
  transform: scale(1.05);
}
.cart-summary {
  background: white;
  padding: 1.25rem;
  border-radius: 12px;
  margin-top: 1.5rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
.cart-summary p {
  font-size: 0.875rem;
  margin: 0.75rem 0;
  color: #4b5563;
  line-height: 1.5;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart-summary strong {
  font-size: 1.125rem;
  font-weight: 700;
  color: #6366f1;
  background: linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%);
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
}
.clear-btn {
  margin-top: 0.75rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);
  font-size: 0.875rem;
}

.clear-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4);
}
.empty-cart {
  color: #9ca3af;
  font-style: italic;
  font-size: 0.875rem;
  padding: 1rem;
  text-align: center;
}
</style>
