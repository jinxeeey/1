document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.header__menu');
    const overlay = document.querySelector('.menu-overlay');
    const menuButton = document.querySelector('.header__menu-button'); // Assuming you have a menu toggle button
    
    menuButton.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
    
    overlay.addEventListener('click', function() {
      menu.classList.remove('active');
    });
  });
  