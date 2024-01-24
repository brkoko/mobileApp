<script setup>
  import NavBar from "@/components/NavBar.vue";
  import Footer from "@/components/Footer.vue";   
  import LeftCompare from "@/components/LeftCompare.vue";   
  import RightCompare from "@/components/RightCompare.vue";   
</script>

<template>
    <NavBar/>
  <div class="split-screen">
    <div class="left-section">
      <LeftCompare/>
    </div>
    <div class="vertical-line"></div>
    <div class="right-section">
      <RightCompare/>      
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
