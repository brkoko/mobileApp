<script setup>
  import NavBar from "@/components/NavBar.vue";
  import Footer from "@/components/Footer.vue";
  import { useRoute } from 'vue-router';
  import phoneData from '@/data/phones.json';
  import Gallery from '@/components/Gallery.vue';
  const route = useRoute()
  const phoneId = route.params.id
  const phone = phoneData.find(p => p.id == phoneId)
</script>
<template>
  <div>
    <NavBar />
    <div style="display: flex; margin-right: 20px;">
      <Gallery :phone="phone" />
      <div class="mobile-details">
        <h1>{{ phone.name }}</h1>
        <h2>{{ phone.model }}</h2>
        <p>{{ phone.description }}</p>
        <p class="price">Price: ${{ phone.price }}</p>
      </div>
    </div>
    <Footer/>
  </div>
  </template>
  
  <style scoped>
  .mobile-details {
    max-width: 600px;
    margin: 10px;
    padding: 35px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    flex: 1; /* Take remaining space */
  }
  
  h1 {
    font-size: 1.5rem;
    margin-bottom: 5px;
  }
  
  h2 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #555;
  }
  
  p {
    font-size: 1rem;
    margin-bottom: 10px;
    color: #333;
  }
  
  .price {
    font-size: 1.2rem;
    font-weight: bold;
    color: #3494e6; /* Blue color for the price */
  }
  </style>
  

