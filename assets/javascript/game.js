var words = ["naruto", "bleach", "luffy", "kurosaki", "gon", "alchemist", "hunter", "bankai", "kamehameha", "dragon", "saiyan", "vegeta", "goku", "rasengan", "mugetsu", "bazooka", "navy", "marines", "roger"];

function blankWord(word) {
    var blank = [];
    for (var i = 0; i < word.length; i++) {
        blank.push("-");
    }
    return blank;
}

document.onkeyup = function (event) {
    var key = event.key;
    console.log(key);

    var computerWord = words[Math.floor(Math.random() * words.length)];
    console.log(computerWord);

    var dashWord = blankWord(computerWord);
    console.log(dashWord);

    if(computerWord.indexOf(key) > -1) {
        dashWord[computerWord.indexOf(key)] = key;
        console.log(dashWord);
    }

}