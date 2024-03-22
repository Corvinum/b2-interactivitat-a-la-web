window.addEventListener('load', function() {
  let iconos = document.getElementsByClassName("ruta");

  for(let i = 0; i < iconos.length; i++){
    let img = iconos[i].children[0];
    let folder = img.src.split('/').slice(0, -1).join('/');
    let images = Array.from({length: 3}, (_, i) => `${folder}/photo${i + 1}.webp`);
    let currentIndex = 0;
    let intervalId = null;

    img.addEventListener('mouseover', function() {
      if (!this.classList.contains('no-hover')) {
        this.style.transform = "scale(1.4) translateY(-16px)";
      }
    });

    img.addEventListener('mouseout', function() {
      if (!this.classList.contains('no-hover')) {
        this.style.transform = "scale(1) translateY(0)";
      }
    });

    img.addEventListener('click', function() {
      if (this.classList.contains('no-hover')) {
        this.classList.remove('no-hover');
        this.style.width = '';
        this.style.height = '';
        this.parentElement.style.position = '';
        this.parentElement.style.top = '';
        this.parentElement.style.left = '';
        this.parentElement.style.transform = '';
        this.style.borderRadius = '';
        this.style.margin = '';
        this.style.display = '';
        clearInterval(intervalId);
        for(let j = 0; j < iconos.length; j++){
          iconos[j].style.opacity = '1';
          iconos[j].style.visibility = 'visible';
          iconos[j].style.pointerEvents = 'auto';
        }
      } else {
      
        this.classList.add('no-hover');
        this.style.width = '70%';
        this.style.height = '80%';

        let clickedParent = this.parentElement;
        for(let j = 0; j < iconos.length; j++){
          if(iconos[j] !== clickedParent) { 
            iconos[j].style.opacity = '0';
            iconos[j].style.visibility = 'hidden';
            iconos[j].style.pointerEvents = 'none';
          }
        }

        this.style.borderRadius = '0';
        this.style.margin = 'auto';
        this.style.display = 'block';
        this.parentElement.style.position = 'absolute';
        this.parentElement.style.top = '50%';
        this.parentElement.style.left = '50%';
        this.parentElement.style.transform = 'translate(-50%, -50%)';

        intervalId = setInterval(function() {
          img.src = images[currentIndex];
          currentIndex++;
          if(currentIndex == images.length) {
            currentIndex = 0;
          }
        }, 3000);
      }
    });
  }
});