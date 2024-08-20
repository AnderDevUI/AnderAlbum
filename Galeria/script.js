// Add to script.js
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});

prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
});

// Welcome animation
window.addEventListener('load', function() {
    const welcomeContainer = document.querySelector('.welcome-container');
    setTimeout(() => {
        welcomeContainer.style.opacity = '0';
        setTimeout(() => {
            welcomeContainer.style.display = 'none';
        }, 1000); // Match this duration with the CSS transition duration
    }, 3000); // Show the welcome message for 3 seconds
});


// Hearts animation
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
    document.querySelector('.hearts-container').appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

// Movimiento de la vaca
const vaca = document.querySelector('.vaca');
const vacaContainer = document.querySelector('.vaca-container');

let vacaWidth = vaca.offsetWidth;
let vacaHeight = vaca.offsetHeight;
let x = 0;
let y = 0;
let dx = 2; // Velocidad horizontal
let dy = 2; // Velocidad vertical

function updatePosition() {
    x += dx;
    y += dy;

    // Obtener el tamaño del contenedor
    const containerWidth = vacaContainer.offsetWidth;
    const containerHeight = vacaContainer.offsetHeight;

    // Rebote horizontal
    if (x + vacaWidth > containerWidth || x < 0) {
        dx = -dx;
    }

    // Rebote vertical
    if (y + vacaHeight > containerHeight || y < 0) {
        dy = -dy;
    }

    vaca.style.transform = `translate(${x}px, ${y}px)`;

    requestAnimationFrame(updatePosition);
}

// Iniciar la animación
updatePosition();



window.addEventListener('load', function() {
    const audio = document.getElementById('background-audio');

    function playAudio() {
        audio.volume = 0.2; // Ajusta el volumen si es necesario (0.0 a 1.0)
        audio.play().then(() => {
            console.log("Audio is playing.");
        }).catch(error => {
            console.error("Error al reproducir el audio:", error);
        });
    }

    // Intentar reproducir el audio al cargar
    playAudio();

    // Detectar si el navegador permite la reproducción automática
    audio.addEventListener('canplaythrough', () => {
        console.log("Audio can play through.");
    });

    // Intentar una segunda vez con un evento de interacción
    window.addEventListener('click', () => {
        playAudio();
    });
});