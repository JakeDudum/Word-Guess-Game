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

function makeString(arr) {
    var str = "";
    for (var j = 0; j < arr.length; j++){
        str = str + arr[j];
    }
    return str;
}

function update(id, value) {
    document.getElementById(id).textContent = value;
}

var computerWord = words[Math.floor(Math.random() * words.length)];

var dashWord = blankWord(computerWord);

update("currentWord", makeString(dashWord));

var lettersGuessed = [];

document.onkeyup = function (event) {
    var key = event.key;
    console.log(key);

    console.log(computerWord);

    if (guessesLeft > 0 && lettersGuessed.indexOf(key) < 0) {
        lettersGuessed.push(key);
        update("lettersGuessed", makeString(lettersGuessed));
        if (computerWord.indexOf(key) > -1) {
            console.log(lettersGuessed);
            for (var i = 0; i < computerWord.length; i++) {
                if (computerWord[i] === key) {
                    dashWord[i] = key;
                    console.log(dashWord[i]);
                }
                update("currentWord", makeString(dashWord));
            }
        }
        else {
            guessesLeft--;
            update("numOfGuesses", guessesLeft);
            if (guessesLeft === 0) {
                computerWord = newWord();
                dashWord = blankWord(computerWord);
                guessesLeft = 12;
                lettersGuessed = [];
                update("currentWord", makeString(dashWord));
                update("numOfGuesses", guessesLeft);
                update("lettersGuessed", makeString(lettersGuessed));
            }
        }
    }
}