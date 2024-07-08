'use strict'



// Variable para mantener el índice de la posición actual del carrusel
let posicion = 0;


// Selecciona el contenedor del carrusel y los botones de siguiente y anterior
const carrouselContainer = document.querySelector('.Carrousel-container');
const siguiente = document.querySelector('.Siguiente');
const anterior = document.querySelector('.Anterior');



// Función para desplazar el carrusel
const desplazarContainer = function(){
     // Mueve el contenedor del carrusel según la posición actual
    carrouselContainer.style.transform = `translateX(-${posicion * (100 / 3)}%)`;
}


// Event listener para el botón "Siguiente"
siguiente.addEventListener('click', function() {
     // Incrementa la posición
    posicion++;
    // Si alcanza el final, vuelve al principio
    if (posicion >= 3) {
        posicion = 0;
    }
    // Mueve el carrusel al nuevo índice
    carrouselContainer.style.transform = `translateX(-${posicion * (100 / 3)}%)`;
    // Desplaza el contenedor
    desplazarContainer()
});

// Event listener para el botón "Anterior"
anterior.addEventListener('click', function() {
    // Decrementa la posición
    posicion--;
    // Si está en el inicio, vuelve al final
    if (posicion < 0) {
        posicion = 2;
    }
      // Mueve el carrusel al nuevo índice
    carrouselContainer.style.transform = `translateX(-${posicion * (100 / 3)}%)`;
     // Desplaza el contenedor
    desplazarContainer()
});



// Intervalo para cambiar automáticamente al siguiente elemento cada 4 segundos
setInterval(function(){
     // Incrementa la posición
    posicion++;
     // Si alcanza el final, vuelve al principio
    if (posicion >= 3) {
        posicion = 0;
    }

    // Desplaza el carrusel al nuevo índice
    desplazarContainer()
} , 4000)







