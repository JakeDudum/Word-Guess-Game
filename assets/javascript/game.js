var words = ["naruto", "bleach", "luffy", "kurosaki", "gon", "alchemist", "hunter", "bankai", "kamehameha", "dragon", "saiyan", "vegeta", "goku", "rasengan", "mugetsu", "bazooka", "navy", "marines", "roger"];

function blankWord(word) {
    var blank = "";
    for (var i = 0; i < word.length; i++) {
        blank = blank + "-";
    }
    return blank;
}

document.onkeyup = function (event) {
    var key = event.key;
    console.log(key);

    var computerWord = words[Math.floor(Math.random() * words.length)];
    console.log(computerWord);


}