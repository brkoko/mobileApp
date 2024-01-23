<template>
    <div class="left-section">
      <div class="phone-details">
        <img :src="'https://image.alza.cz/products/SAMO0246c5/SAMO0246c5.jpg?width=230&height=230'" :alt=" ' Image'" class="phone-image">
        <div class="phone-specs">
          <h2>nie </h2>
          <ul>
            <li><strong>Display:</strong>  nie </li>
            <li><strong>Camera:</strong>  nie </li>
            <li><strong>RAM:</strong>  nie</li>
            <!-- Add more specifications as needed -->
          </ul>
        </div>
      </div>
    </div>
  </template>
  

  
  <style scoped>
  .left-section {
    flex: 1;
    height: 100%;
    overflow: hidden;
  }
  
  .phone-details {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  
  .phone-image {
    max-width: 100%;
    height: auto;
    margin-right: 20px;
  }
  
  .phone-specs {
    max-width: 300px; /* Adjust as needed */
  }
  </style>
  