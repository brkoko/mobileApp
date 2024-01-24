<script setup>
  import NavBar from "@/components/NavBar.vue";
  import Footer from "@/components/Footer.vue";
</script>
<template>
  <NavBar/>
 
  <div class="about-page">
  <h1>About Us</h1>
  <p>
    Welcome to MobileSpecsHub! Your go-to source for comprehensive information on the latest mobile devices. Whether you're a tech enthusiast or a casual shopper, we've got you covered with detailed specifications, reviews, and more.
  </p>
  <p>
    Our mission is to empower users with the knowledge they need to make informed decisions when choosing their next mobile device. From screen resolutions to camera capabilities, we aim to provide accurate and up-to-date information.
  </p>
  <h2>Our Team</h2>
  <ul>
    <li>Boris Kostalik - CEO</li>
  </ul>
  <div class="about-image">
    <img src="https://t4.ftcdn.net/jpg/05/36/24/13/360_F_536241340_GsrsNhcWC0hyTVaJLilNafyDw6fl0cC8.jpg" alt="Team Image" />
  </div>
</div>
<Footer/>
</template>

<style scoped>
.about-page {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

h2 {
  font-size: 1.5rem;
  margin-top: 20px;
  margin-bottom: 10px;
}

p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 15px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 5px;
}

.about-image {
  margin: 20px 0;
}

.about-image img {
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.cta-button {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #3494e6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #2b81cb;
}



@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
