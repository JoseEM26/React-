document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
  
    menuToggle.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
  
    // Cerrar el menú al hacer clic en cualquier parte fuera de él
    document.addEventListener('click', function(event) {
      const isClickInsideMenu = menu.contains(event.target);
      const isClickInsideToggle = menuToggle.contains(event.target);
  
      if (!isClickInsideMenu && !isClickInsideToggle) {
        menu.classList.remove('active');
      }
    });
  
    // Mostrar u ocultar submenú al hacer clic en un elemento con submenú
    const menuItemsWithSubmenu = document.querySelectorAll('.menu > li');
  
    menuItemsWithSubmenu.forEach(item => {
      const submenu = item.querySelector('.submenu');
  
      if (submenu) {
        item.addEventListener('click', function() {
          submenu.classList.toggle('active');
        });
      }
    });
  });
  