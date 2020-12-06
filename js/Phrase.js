class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        const placeholderList = document.querySelector('ul');
        const individualLetters = this.phrase.split('');

        individualLetters.forEach(letter => {
            const placeholderLetter = document.createElement('li');

            placeholderLetter.className = letter !== ' ' ? `hide letter ${letter}` : 'space';
            placeholderLetter.textContent = letter;

            placeholderList.appendChild(placeholderLetter);
        });
    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        }
        return false;
    }

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        const lettersToUnhide = document.querySelectorAll(`.${letter}`);

        lettersToUnhide.forEach(letterElement => letterElement.className = `show letter ${letter}`);
    }
}
