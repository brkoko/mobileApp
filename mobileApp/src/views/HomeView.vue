<script setup>
import { ref, watch } from "vue";
import Card from "@/components/Card.vue";
import NavBar from "@/components/NavBar.vue";
import phoneData from '@/data/phones.json'

const phones= ref(phoneData)
  const search= ref("") 
  watch(search, () => {
  phones.value = phoneData.filter(phone => phone.name.toLowerCase().includes(search.value.toLowerCase()));
})


</script>

<template>
  <NavBar></NavBar>
  <div class="container">
   
    <header>
      
      <input v-model.trim="search" type="text" placeholder="Search...">
   </header>
   <div class="options-container">
      <Card v-for="phone in phones" 
        :key="phone.id"  
        :phone="phone" 
        @click="$router.push(`/phone/${phone.id}`)"
        
      />
    </div>
 </div>
</template>
<style scoped>
  .container {
    max-width: 1000px;
    margin: 0 auto;
  }
  header{
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
  }
  header h1 {
    font-weight: bold;
    margin-right: 30px;
  }
  header input{
    border: none;
    background-color: bisque;
    padding: 10px;
    border-radius: 5px;


  }
  .options-container{
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
  }
  

  
</style>



