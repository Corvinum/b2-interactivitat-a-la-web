window.onload = function() {
  document.getElementById('form-wrapper').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que se recargue la pagina al enviar

    var counter = 5;
    var interval = setInterval(function() {
      this.innerHTML = '<img src="./media/contact/check.png"><p>Mensaje enviado correctamente</br>Devolviendo a la pagina anterior en ' + counter + ' segundo(s)...</p>'; // Replace the form content
      counter--;
      if (counter < 0) {
        clearInterval(interval);
        location.reload(); // Recarga la pagina cuando el contador llegue a 0
      }
    }.bind(this), 1000); // Indicamos que nos referimos al formulario
  });
}