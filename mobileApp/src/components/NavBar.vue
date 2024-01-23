<template>
    <div class="navbar">
      <div class="logo">My Logo</div>
      <div class="nav-items">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/compare" class="nav-link">Compare</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  // You can include any necessary setup logic here
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(to right, #6488ff, #2949e9); /* Modified gradient */
    color: white;
    padding: 10px;
    border-radius: 10px; /* Optional: Add border-radius for a rounded look */
  }
  
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .nav-items {
  display: flex;
  align-items: center;
  justify-content: center; /* Center items horizontally */
  margin-left: auto;
  margin-right: auto;
}

.nav-link {
  text-decoration: none;
  color: white;
  font-size: 1rem;
  padding: 8px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin: 0 10px; /* Adjust horizontal margin between links */
}
  
  .nav-link:hover {
    background-color: #3b38f2;
  }
  </style>
  