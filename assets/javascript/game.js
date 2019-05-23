var words = ["naruto", "bleach", "luffy", "kurosaki", "gon", "alchemist", "hunter", "bankai", "kamehameha", "dragon", "saiyan", "vegeta", "goku", "rasengan", "mugetsu", "bazooka", "navy", "marines", "roger"];

var guessesLeft = parseInt(document.getElementById("numOfGuesses").textContent);
console.log(guessesLeft);

function blankWord(word) {
    var blank = [];
    for (var i = 0; i < word.length; i++) {
        blank.push("-");
    }
    return blank;
}

function newWord() {
    return words[Math.floor(Math.random() * words.length)];
}

var computerWord = words[Math.floor(Math.random() * words.length)];

document.onkeyup = function (event) {
    var key = event.key;
    console.log(key);

    console.log(computerWord);

    var dashWord = blankWord(computerWord);

    if (guessesLeft > 0) {
        if (computerWord.indexOf(key) > -1) {
            for (var i = 0; i < computerWord.length; i++) {
                if (computerWord[i] === key) {
                    dashWord[i] = key;
                    console.log(dashWord[i]);
                }
            }
        }
        else {
            guessesLeft--;
            document.getElementById("numOfGuesses").textContent = guessesLeft;
        }
    }

}