window.addEventListener('load', function(){
  //Busco el elemento con tal clase
  let preloader = document.getElementsByClassName("preloader")[0];
  preloader.classList.add('preloader-hidden');
  //Le agregp una escucha de evento a ese elemento para la transición de opacidad, para así
  //quitarle la visibilidad.
  preloader.addEventListener("transitionend", function(){
    this.style.visibility="hidden";
  });
});