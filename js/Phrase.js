class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        let placeholderList = document.querySelector('ul');
        let individualLetters = this.phrase.split('');
        individualLetters.forEach(letter => {
            let placeholderLetter = document.createElement('li');
            if (letter !== ' ') {
                placeholderLetter.className = `hide letter ${letter}`;
            } else {
                placeholderLetter.className = 'space';
            }
            placeholderLetter.textContent = `${letter}`;
            placeholderList.appendChild(placeholderLetter);
        });
    }

    //method 2
    checkLetter() {

    }

    //method 3
    showMatchedLetter() {

    }
}