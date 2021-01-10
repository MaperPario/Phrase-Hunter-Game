const gameOverlay = document.querySelector('#overlay');

let game;
document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

const qwertyKeyBoard = document.querySelector('#qwerty');
qwertyKeyBoard.addEventListener('click', (event) => {
    if (event.target.className === 'key') {
        game.handleInteraction(event.target);
    }
});

document.addEventListener('keyup', (event) => {
    const isOverlayVisible = gameOverlay.style.display === 'block';
    if (isOverlayVisible) {
        return;
    }
    const buttons = Array.from(document.querySelectorAll('#qwerty button'));
    const matchingButton = buttons.find(button => {
        return button.textContent === event.key;
    });

    if (!matchingButton) {
        return;
    }

    game.handleInteraction(matchingButton);
});
