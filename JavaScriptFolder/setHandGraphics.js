import Player from "./player.js";

function setHandGraphics(player) {
    const handList = document.getElementById('hand');

    // Clear existing cards (optional but recommended)
    handList.innerHTML = '';

    player.hand.forEach(card => {
        // Create wrapper div
        


        //wrapper for img
        const cardBox = document.createElement('div');
        cardBox.classList.add('handCardBox');

        // Create image
        const img = document.createElement('img');
        img.classList.add('PHGraphic');
        img.src = card.imgAddress;
        img.alt = 'Playing card';

        //Create button
        const button = document.createElement('button');
        button.classList.add('setCard');
        if(card.type === 'pokemon'){
            button.textContent = 'Play Pokemon';
            button.addEventListener('click', () => {
                pendingPlacement = {
                    card,
                    handIndex: player.hand.indexOf(card),
                    player
                }

                //We can call a function that will highlight available options
                console.log(card)
            });
        }
        if(card.type === 'energy'){
            button.textContent = 'Play Energy';
        }if(card.type === 'trainer'){
            button.textContent = 'Activate';
        }

        // Nest img inside div
        
        cardBox.appendChild(button);

        // Add to hand container
        handList.appendChild(cardBox);
        cardBox.appendChild(img);
    });
}

export { setHandGraphics };

