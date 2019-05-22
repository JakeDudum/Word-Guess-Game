var words = ["naruto", "bleach", "luffy", "kurosaki", "gon", "alchemist", "hunter", "bankai", "kamehameha", "dragon", "saiyan", "vegeta", "goku", "rasengan", "mugetsu", "bazooka", "navy", "marines", "roger"];

document.onkeyup = function (event) {
    var key = event.key;

    var computerWord = words[Math.floor(Math.random() * words.length)];

    
}