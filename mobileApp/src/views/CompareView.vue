<script setup>
    import AutoComplete from 'primevue/autocomplete';
    import NavBar from "@/components/NavBar.vue";
    import Footer from "@/components/Footer.vue";   
    import LeftCompare from "@/components/LeftCompare.vue";   
    import RightCompare from "@/components/RightCompare.vue";   
    import { ref } from 'vue';
   
    

    const value = ref("");
    const items = [
    {
      "id": 1,
      "img": "https://image.alza.cz/products/SAMO0246c5/SAMO0246c5.jpg?width=230&height=230",
      "name": "Samsung",
      "model": "S24",
      "description": "blbost iphone lepsi",
    },
    {
      "id": 2,
      "img": "https://image.alza.cz/products/SAMO0246c5/SAMO0246c5.jpg?width=230&height=230",
      "name": "Apple",
      "model": "iPhone 12",
      "description": "Great iPhone",
    }
  ];

    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    
</script>

<template>
    <NavBar/>
    
    
  <div class="split-screen">
    <div class="left-section">
    
      <LeftCompare/>
      <div>
        Left Section Contentasddddddddddddd
      </div>
    </div>
    <div class="vertical-line"></div>
    <div class="right-section">
      <RightCompare/>      
    <div>
        Right Section Content
      </div>
    </div>
  </div>
    <Footer/>
</template>   

<style scoped>
.split-screen {
  display: flex;
  height: 100vh;
}

.left-section,
.right-section {
  flex: 1;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.vertical-line {
  position: absolute;
  top: 100px;
  bottom: 0;
  width: 2px;
  background-color: #4171f5; /* You can change the color as needed */
  left: 50%;
  transform: translateX(-50%);
}
</style>
