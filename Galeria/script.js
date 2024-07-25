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
