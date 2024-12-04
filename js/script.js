function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.className = 'raindrop';
    raindrop.style.left = `${Math.random() * window.innerWidth}px`;
    raindrop.style.animationDuration = `${Math.random() * 2 + 1}s`; // Raindrops fall at different speeds
    document.querySelector('.top-section').appendChild(raindrop);
    // Remove raindrop after it falls out of view to prevent a memory leak
    setTimeout(() => {
        raindrop.remove();
    }, 3000); // This should match the longest possible duration from animationDuration
}

function createRaindrop2() {
    const raindrop = document.createElement('div');
    raindrop.className = 'raindrop';
    raindrop.style.left = `${Math.random() * window.innerWidth}px`;
    raindrop.style.animationDuration = `${Math.random() * 2 + 1}s`; // Raindrops fall at different speeds
    document.querySelector('.section').appendChild(raindrop);
    // Remove raindrop after it falls out of view to prevent a memory leak
    setTimeout(() => {
        raindrop.remove();
    }, 3000); // This should match the longest possible duration from animationDuration
}


setInterval(createRaindrop, 100); // Adjust for more or less frequent raindrops
setInterval(createRaindrop2, 100); // Adjust for more or less frequent raindrops