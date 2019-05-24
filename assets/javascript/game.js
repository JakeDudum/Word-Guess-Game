var words = ["naruto", "bleach", "luffy", "kurosaki", "gon", "alchemist", "hunter", "bankai", "kamehameha", "dragon", "saiyan", "vegeta", "goku", "rasengan", "mugetsu", "bazooka", "navy", "marines", "roger"];

var guessesLeft = parseInt(document.getElementById("numOfGuesses").textContent);

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

function makeList (arr) {
    var letters = "";
    letters = arr[0];
    if (arr.length === 1) {
        return letters;
    }
    else {
        for (var k = 1; k < arr.length; k++) {
            letters = letters + ", " + arr[k];
        }
        return letters;
    }
}

function newGame() {
    computerWord = newWord();
    dashWord = blankWord(computerWord);
    guessesLeft = 12;
    lettersGuessed = [];
    update("currentWord", makeString(dashWord));
    update("numOfGuesses", guessesLeft);
    update("lettersGuessed", makeString(lettersGuessed));
}

function update(id, value) {
    document.getElementById(id).textContent = value;
}

var computerWord = words[Math.floor(Math.random() * words.length)];

var dashWord = blankWord(computerWord);

update("currentWord", makeString(dashWord));

var lettersGuessed = [];

var numWins = 0;

document.onkeyup = function (event) {
    var key = event.key;
    var num = event.keyCode;
    document.getElementById("myaudio").play();

    if (guessesLeft > 0 && lettersGuessed.indexOf(key.toLocaleUpperCase()) === -1 && num >= 65 && num <=90) {
        lettersGuessed.push(key.toUpperCase());
        update("lettersGuessed", makeList(lettersGuessed));
        if (computerWord.indexOf(key) > -1) {
            for (var i = 0; i < computerWord.length; i++) {
                if (computerWord[i] === key) {
                    dashWord[i] = key;
                }
                update("currentWord", makeString(dashWord));
            }
            if (dashWord.indexOf("-") === -1) {
                numWins++;
                update("wins", numWins);
                document.getElementById("picture").src = ("assets/images/" + makeString(dashWord) + ".jpg");
                newGame();
            }
        }
        else {
            guessesLeft--;
            update("numOfGuesses", guessesLeft);
            if (guessesLeft === 0) {
                document.getElementById("picture").src = "assets/images/loser.jpg";
                newGame();
            }
        }
    }
}