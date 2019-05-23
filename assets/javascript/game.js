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

var computerWord = words[Math.floor(Math.random() * words.length)];

var dashWord = blankWord(computerWord);

document.getElementById("currentWord").textContent = makeString(dashWord);

document.onkeyup = function (event) {
    var key = event.key;
    console.log(key);

    console.log(computerWord);

    if (guessesLeft > 0) {
        if (computerWord.indexOf(key) > -1) {
            for (var i = 0; i < computerWord.length; i++) {
                if (computerWord[i] === key) {
                    dashWord[i] = key;
                    console.log(dashWord[i]);
                }
                document.getElementById("currentWord").textContent = makeString(dashWord);
            }
        }
        else {
            guessesLeft--;
            document.getElementById("numOfGuesses").textContent = guessesLeft;
        }
    }

}