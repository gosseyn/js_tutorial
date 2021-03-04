
let a = ["ant", "bat", "cat", 42];
a.forEach(function (element) {
    console.log(element);
});

let soliloquy = "To be or not tobe, that is the question:"
Array.from(soliloquy).forEach(function (character) {
    console.log(character);
});

let affiche = (element) => {
    console.log(element);
}

a.forEach(function(element) {
    affiche(element);
});

a.forEach(element => {
    console.log(element);
});
