// DOM en JavaScript para crear un contador de visitas 
// para una página web.
// Usaremos el localStorage para almacenar el número de visitas
let contadorVisitas = localStorage.getItem('contadorVisitas');

// Si no existe el contador, inicializamos en 0
if (contadorVisitas === null) {
    contadorVisitas = 0;
} else {
    contadorVisitas = parseInt(contadorVisitas);
}

// Incrementamos el contador
contadorVisitas++;

// Guardamos el nuevo valor en localStorage
localStorage.setItem('contadorVisitas', contadorVisitas);

// Mostramos el valor en el DOM
document.getElementById('contador').innerText = contadorVisitas + ' veces';