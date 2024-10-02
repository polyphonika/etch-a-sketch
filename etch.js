const container = document.getElementById('grid-container');
const btnCreateGrid = document.getElementById('btn-new-grid');
const btnResetGrid = document.getElementById('btn-reset-grid');

btnCreateGrid.addEventListener('click', promptNewGrid);
btnResetGrid.addEventListener('click', () => drawGrid(16));

function drawGrid(gridSize) {
    deleteGrid(); //clear any existing

    for (let i=0; i<(gridSize**2); i++) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        let calcSize = 1/gridSize*100;        
        pixel.style.width = `${calcSize}%`;
        pixel.style.height = `${calcSize}%`;
        container.appendChild(pixel);
    }

    // Handle Drawing
    const pixels = document.querySelectorAll('.pixel');

    pixels.forEach(element => {
        element.addEventListener('mouseenter', function(e) {
            addPixelColour(e)
        })
    });
}

function deleteGrid() {
    container.innerHTML = '';
}


function addPixelColour(e) {
    // Method 1: Add CSS Class
    e.target.classList.add('drawn');  
    // Method 2: Completely random RGB values
    // e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;      
    // Method 3: Random based on MouseX, Mouse Y        
    // e.target.style.backgroundColor = randomScaling(e);

    // Opacity handling
    const currentOpacity = parseFloat(e.target.style.opacity || 0);
    e.target.style.opacity = Math.min(currentOpacity + 0.1, 1);
}

function randomScaling(e) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Scale e.pageX and e.pageY to fit within 0-255
    const red = Math.floor((e.pageX / width) * 255);
    const green = Math.floor((e.pageY / height) * 255);
    
    // You can add a static or dynamic value for blue, or use a combination
    const blue = Math.floor(((e.pageX + e.pageY) / (width + height)) * 255);
    // const blue = 200;
    
    // Create the RGB value
    const rgb = `rgb(${red}, ${green}, ${blue})`;

    return rgb;
}

function promptNewGrid() {
    let promptSize = prompt('What size grid? eg 64x64, enter 64 (min 10, max 100) > ');
    if (promptSize < 10 || promptSize > 100 || isNaN(promptSize)) {
        promptNewGrid();
    } else {
        drawGrid(promptSize)
    }
}

// Init initial grid on page load
drawGrid(16);


