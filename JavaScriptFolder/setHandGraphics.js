import Player from "./player.js";

function setHandGraphics(player) {
    const handList = document.getElementById('hand');

    // Clear existing cards (optional but recommended)
    handList.innerHTML = '';

    player.hand.forEach(card => {
        // Create wrapper div
        const cardBox = document.createElement('div');
        cardBox.classList.add('handCardBox');

        // Create image
        const img = document.createElement('img');
        img.classList.add('PHGraphic');
        img.src = card.imgAddress;
        img.alt = 'Playing card';

        // Nest img inside div
        cardBox.appendChild(img);

        // Add to hand container
        handList.appendChild(cardBox);
    });
}

export { setHandGraphics };

