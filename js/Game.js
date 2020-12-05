class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        const phrases = [
            new Phrase('through the fire and the flames'),
            new Phrase('arrow in the knee'),
            new Phrase('karens of the usa'),
            new Phrase('king of the hill'),
            new Phrase('fortnite sucks')
        ];
        return phrases;
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
                                        //^^code received from stackoverflow^^
        return randomPhrase;
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        document.querySelector('#overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        return document.querySelectorAll('li.hide').length === 0;
    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        this.missed += 1;
        let gameLives = document.querySelector('img[src="images/liveHeart.png"]');
        if (this.missed < 5) {
            gameLives.src = 'images/lostHeart.png';
        } else if (this.missed === 5) {
            this.gameOver(false);
        }
        console.log(this.missed);
    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const gameOverMessage = document.getElementById('game-over-message');
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'block';
        gameOverMessage.textContent = gameWon === true ? 'You won!' : 'You lost. :( Try Again?';
    }

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        button.disabled = true;
        if (!this.activePhrase.phrase.includes(button.textContent)) {
            button.classList = 'wrong';
            this.removeLife(); 
        } 
        if (this.activePhrase.phrase.includes(button.textContent)) {
            button.classList = 'chosen';
            this.activePhrase.showMatchedLetter(button.textContent);
            this.checkForWin();
        }
        if (this.checkForWin() === true) {
            this.gameOver(true);
        }
    }

    /**
    * Resets the game to freshly initialized game
    * Removes li elements in in 'Phrase' ul element
    * Enable onscreen buttons, effectively resetting them for reuse
    * Resets heart images for full-life
    */
    resetGame() {
        
    }
}
