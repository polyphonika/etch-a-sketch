// Create 256 divs - create initial div then append 64 times

const gridSize = 16

const container = document.getElementById('grid-container');

for (let i=0; i<(gridSize**2); i++) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    container.appendChild(pixel);
}

// Handle Drawing
const pixels = document.querySelectorAll('.pixel');

pixels.forEach(element => {
    element.addEventListener('mouseenter', function(e) {
        addPixelColour(e)
    })
});

function addPixelColour(e) {
    e.target.classList.add('drawn');    
}


