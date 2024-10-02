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
    e.target.classList.add('drawn');        
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


