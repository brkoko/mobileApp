<script setup>
  import NavBar from "@/components/NavBar.vue";
  import Footer from "@/components/Footer.vue";
</script>
<template>
  <NavBar/>
 
  <div class="about-page">
    <h1>About Us</h1>
    <p>
      Welcome to our website! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in augue ut justo consectetur ullamcorper.
    </p>
    <p>
      Our mission is to provide valuable information and services to our users. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <h2>Our Team</h2>
    <ul>
      <li>John Doe - CEO</li>
      <li>Jane Smith - CTO</li>
      <li>Bob Johnson - Marketing Manager</li>
    </ul>

    <div class="about-image">
      <img src="https://via.placeholder.com/400" alt="Team Image" />
    </div>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque ligula nec ex venenatis, ac cursus tellus ultrices.
    </p>


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
