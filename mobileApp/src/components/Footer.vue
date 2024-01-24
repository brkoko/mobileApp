<template>
  
      <footer class="website-footer">
        <div class="footer-content">
          <div class="footer-section">
            <h3 class="footer-heading">About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in augue ut justo consectetur ullamcorper.</p>
          </div>
          <div class="footer-section">
            <h3 class="footer-heading">Contact</h3>
            <p>Email: contact@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 Kostalik</p>
        </div>
      </footer>

  </template>
  
  <style scoped>

  
  .website-footer {
    background: linear-gradient(to right, #6488ff, #2949e9);
    color: white;
    padding: 20px;
    border-radius: 10px;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
  .footer-section {
    width: 45%;
    margin-bottom: 10px;
  }
  
  .footer-heading {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  
  .footer-bottom {
    margin-top: auto; /* Push the footer to the bottom */
    text-align: center;
  }
  </style>
  