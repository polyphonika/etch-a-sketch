// Create 256 divs - create initial div then append 64 times

const container = document.getElementById('container');

for (let i=0; i<(16*16); i++) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    container.appendChild(pixel);
}
