const options = {
    includeUpperCase: false,
    includeNumbers: false,
    startsWithLowerCase: true,
    setFirstLetterUpperCase: false
}

// Outils
function uppercaseFirstLetter(value) {
    return value.charAt(0).toUpperCase() + value.slice(1)
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function setContent(id) {
    //Ancien système:
    // const content = strRandom(document.getElementById('userInput').value);
    const content = getRandomKittyName();
    document.getElementById(id).innerHTML = options.setFirstLetterUpperCase ? uppercaseFirstLetter(content) : content;
}

// Main JS
function strRandom(mylength) {
    var a = 10,
        b = 'abcdefghijklmnopqrstuvwxyz',
        c = '',
        d = 0,
        e = '' + b;
    if (options) {
        if (options.startsWithLowerCase) {
            c = b[Math.floor(Math.random() * b.length)];
            d = 1;
        }
        if (mylength) {
            a = mylength;
        }
        if (options.includeUpperCase) {
            e += b.toUpperCase();
        }
        if (options.includeNumbers) {
            e += '1234567890';
        }
    }
    for (; d < a; d++) {
        c += e[Math.floor(Math.random() * e.length)];
    }
    return c;
}

function getRandomKittyName() {
    return allKittyNames[randomIntFromInterval(0, 1099)]
}

function playMeow() {
    let sound = document.getElementById("audio");
    sound.play();
}

function fusion() {
    setContent('pseudo');
    playMeow();
}

//strRandom(document.getElementById('userInput').value