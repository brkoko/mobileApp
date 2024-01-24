<script setup>
import { defineProps } from 'vue';
const { phone } = defineProps(['phone']);
console.log(phone);
</script>

<template>
  <div class="card">
    <img  :src="phone.img" alt="Product Image" class="card-img" />
    <div class="card-text">
      <h2 class="card-title">{{ phone.name }}</h2>
      <p class="card-price"> {{phone.price}}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  margin: 10px;
  width: 200px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0px 4px 8px rgba(190, 185, 185, 0.2);
}

.card-img {
  margin-top: 10px;
  margin-left: 9px;
  width: 95%;
  height: 230px;

  
}

.card-text {
  padding: 10px;
}

.card-title {
  font-size: 1rem;
  margin-bottom: 5px;
}

.card-price {
  font-size: 1.5rem;
  color: #555;
}
</style>
