const container = document.getElementById('container');
const popupButton = document.querySelector('.popupButton');
const r = document.querySelector(':root');

popupButton.addEventListener('mousedown', () => {
    container.innerHTML = '';
    let userInput = prompt("How many boxes wide would you like the grid to be?\n(must be <100)");
    if (userInput < 100) {
        boxLoop(userInput);
        setBoxWidth(userInput);
    }
});

function boxLoop(userInput) {
    const boxesToCreate = userInput ** 2;
    for(let i = 0; i < boxesToCreate; ++i) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        row.addEventListener('mouseover', () => {
            row.classList.add('colorChange');
        });
    }
}

function setBoxWidth(userInput) {
    const widthPercent = (((615 - (2 * (userInput-1))) / userInput) / 615) * 100 + '%';
    r.style.setProperty('--widthPercent', widthPercent);
}
