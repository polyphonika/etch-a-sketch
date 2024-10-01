// Create 256 divs - create initial div then append 64 times

const container = document.getElementById('container');

for (let i=0; i<(16*16); i++) {
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
    // e.target.style.background = 'black';
    // e.target.className = 'pixel drawn'
    e.target.classList.add('drawn');
    
}


