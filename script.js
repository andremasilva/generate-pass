const characters = ["A", "B", "C", "D", "E", "F", "G", "H",
    "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
    "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d",
    "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~",
    "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
    "_", "-", "+", "=", "{", "[", "}", "]", ",", "|",
    ":", ";", "<", ">", ".", "?", "/"
];

let passwordLength = 15;
let pass1 = document.getElementById('pass1-el');
let pass2 = document.getElementById('pass2-el');

const randomCharacter = () => {
    let randomI = Math.floor(Math.random() * characters.length)
    return characters[randomI]
}

const randomPass = () => {
    let randomPassword = '';
    let randomPassword2 = ''
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += randomCharacter()
        randomPassword2 += randomCharacter()

    }
    pass1.textContent = randomPassword
    pass2.textContent = randomPassword2
}


