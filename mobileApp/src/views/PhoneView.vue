<script setup>
  import NavBar from "@/components/NavBar.vue";
  import Footer from "@/components/Footer.vue";
  import { useRoute } from 'vue-router';
  import phoneData from '@/data/phones.json';
  
  const route = useRoute()
  const phoneId = route.params.id
  const phone = phoneData.find(p => p.id == phoneId)
</script>

<template>
  <div>
    <NavBar />
    <div class="phone-details-container">
      <div class="phone-image">
        <img :src="phone.img" alt="phone picture" srcset="" style="width: 100%; max-width: 400px; height: auto;">
      </div>
      <div class="mobile-details">
        <h2>{{phone.name}}</h2>
        <ul>
          <li><strong>Description:</strong>  {{phone.description}} </li>
          <li><strong>Display:</strong>  {{phone.display}} </li>
          <li><strong>Resolution:</strong>  {{phone.resolution}}</li>
          <li><strong>Size:</strong>  {{phone.size}}</li>
          <li><strong>Camera:</strong>  {{phone.camera}}</li>
          <li><strong>Battery:</strong>  {{phone.battery}}</li>
          <li><strong>Price:</strong>  {{phone.price}}</li>
        </ul>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<style scoped>
.phone-details-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-right: 20px;
}

.phone-image {
  margin-right: 20px;
  margin-bottom: 20px; /* Add space between corners and picture */
}

.phone-image img {
  width: 100%;
  max-width: 400px;
  height: auto;
}

.mobile-details {
  max-width: 600px;
  padding: 35px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  flex: 1;
}

h2 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #555;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

.price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #3494e6; /* Blue color for the price */
}

@media (max-width: 768px) {
  .phone-details-container {
    flex-direction: column;
    
  }

  .phone-image {
    margin-right: 0;
    margin-bottom: 20px;
  }
}
</style>
