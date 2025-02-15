// Función para abrir y cerrar el sobre
function abrirCerrarSobre() {
    let carta = document.querySelector(".carta");
    let fondoDifuso = document.querySelector(".fondo-difuso");

    if (carta.style.display === "none" || carta.style.display === "") {
        carta.style.display = "block";
        fondoDifuso.style.display = "block";
    } else {
        carta.style.display = "none";
        fondoDifuso.style.display = "none";
    }
}

// Animación de frases cambiantes
const frases = [
    "Te amo",
    "I love you",
    "Je t'aime",
    "Ti amo",
    "愛してる",
    "사랑해",
    "Nyke jorrāelza ao",
];

let indiceFrase = 0;
const fraseElemento = document.getElementById("frase");

// Mostrar la primera frase al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    fraseElemento.textContent = frases[indiceFrase];
    fraseElemento.style.opacity = 1;
});

// Cambiar frase con animación suave
function cambiarFrase() {
    fraseElemento.style.opacity = 0; // Ocultar frase actual
    setTimeout(() => {
        indiceFrase = (indiceFrase + 1) % frases.length;
        fraseElemento.textContent = frases[indiceFrase];
        fraseElemento.style.opacity = 1; // Mostrar nueva frase
    }, 1000);
}

// Cambiar frase cada 4 segundos
setInterval(cambiarFrase, 4000);

// Función para mover el corazón aleatoriamente por la pantalla
function moverCorazon(corazon) {
    const pantallaAncho = window.innerWidth;
    const pantallaAlto = window.innerHeight;

    // Generar posiciones aleatorias para el corazón
    const posX = Math.random() * (pantallaAncho - 50);
    const posY = Math.random() * (pantallaAlto - 50);

    corazon.style.top = `${posY}px`;
    corazon.style.left = `${posX}px`;
}

// Crear un corazón y agregarlo al DOM
function crearCorazon() {
    const corazon = document.createElement('div');
    corazon.classList.add('corazon');
    document.body.appendChild(corazon);

    // Mover el corazón a una posición aleatoria al cargar
    moverCorazon(corazon);

    // Iniciar el rebote de los corazones
    corazon.style.animation = 'rebote 5s infinite';

    // Repetir movimiento aleatorio cada 10 segundos
    setInterval(() => {
        moverCorazon(corazon);
    }, 4500);
}

// Crear 4 corazones en la pantalla
for (let i = 0; i < 4; i++) {
    crearCorazon();
}

// Lista de canciones
const canciones = [
    { nombre: "Happy Together", ruta: "src/views/Souns/Happy Together.mp3" }, 
    { nombre: "Contigo - Joaquin Sabina", ruta: "src/views/Souns/Contigo - Joaquin Sabina.mp3" },
    { nombre: "La constante - Enrique Bunbury", ruta: "src/views/Souns/La constante - Enrique Bunbury.mp3" },
];

// Obtener el reproductor de audio y el elemento donde se mostrará el nombre de la canción
const audioPlayer = document.getElementById("audio-player");
const nombreCancion = document.getElementById("nombre-cancion");

// Variables para la canción actual
let cancionActual = 0;

// Función para reproducir una canción
function reproducirCancion() {
    audioPlayer.src = canciones[cancionActual].ruta; // Asignar la ruta de la canción
    nombreCancion.textContent = `Reproduciendo: ${canciones[cancionActual].nombre}`; // Mostrar el nombre de la canción
    audioPlayer.play(); // Reproducir la canción
}

// Función para adelantar a la siguiente canción
function siguienteCancion() {
    cancionActual = (cancionActual + 1) % canciones.length; // Avanzar al siguiente índice, y si se llega al final, vuelve al principio
    reproducirCancion();
}

// Función para retroceder a la canción anterior
function anteriorCancion() {
    cancionActual = (cancionActual - 1 + canciones.length) % canciones.length; // Retroceder al índice anterior, y si se llega al inicio, vuelve al final
    reproducirCancion();
}

// Reproducir la primera canción al cargar la página
window.onload = () => {
    reproducirCancion();
};

// Control de volumen
audioPlayer.volume = 0.5; // Volumen inicial (puedes ajustarlo según necesites)

// Event listener para controlar cuando termina la canción y pasar a la siguiente automáticamente
audioPlayer.addEventListener('ended', siguienteCancion);

// Funciones para el control de volumen
audioPlayer.addEventListener('volumechange', function () {
    console.log(`Volumen: ${audioPlayer.volume}`); // Muestra el volumen actual
});
