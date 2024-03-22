window.addEventListener('load', function() {
  document.getElementById('sun-moon').addEventListener('click', function() {
    var logo = document.getElementById('header-logo'); 

    // Compruebo si el archivo origen es la imagen con tal nombre
    if (this.src.endsWith('sun.png')) {
      // Cambiando al modo oscuro
      this.src = './media/general/moon.png'; // Cambiando icono del modo
      logo.src = './media/general/logo_black.svg'; // Cambiando logo
      //Cambiando colores del botón de contacto
      var btn_contact = document.querySelector('#btn-contact');
      btn_contact.style.backgroundColor = 'black';
      btn_contact.style.color = 'white';
    } else {
      // Cambiando al modo diurno
      var btn_contact = document.querySelector('#btn-contact');

      //Cambiando colores del botón de contacto
      btn_contact.style.backgroundColor = 'white';
      btn_contact.style.color = 'black'

      this.src = './media/general/sun.png'; // Cambiando icono del modo
      logo.src = './media/general/logo_white.png'; // Cambiando logo
    }
  });
});