// Transforme un tableau de chaines en tableau des chaines en minuscules et
// unies par des tirets

let states = ["Kansas", "Nebraska","North Dakota", "South Dakota"];

// Retourne une chaîne "url-friendly"
// Exemple "North Dakota"--> "north-dakota"
function urlify(string) {
   return string.toLowerCase().split(/\s+/).join("-");
}


// urls : version impérative :
function imperativeUrls(elements) {
    let urls = [];
    elements.forEach(function(element) {
        urls.push(urlify(element));
    });
    return urls;
}
console.log(imperativeUrls(states));

function functionalUrls(elements) {
    return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

/* Exercice 

function example(elements) {
    return elements.map(element => `https://example.com/${urlify(element)}`);
}
console.log(example(states));
*/

// singles : Version Impérative
function imperativeSingles(elements) {
    let singles = [];
    elements.forEach(element => {
	if(element.split(/\s+/).length === 1) {
	    singles.push(element);
	}
    });
    return singles;
}
console.log(imperativeSingles(states));

// singles : Version fonctionnelle :

function functionalSingles(elements) {
    return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

/* Exercices 

function filterDakInc(elements) {
   return  elements.filter(element => element.includes("Dakota"));
}

function filterDakReg(elements) {
    return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(filterDakInc(states));

console.log(filterDakReg(states));

*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function imperativeSum(elements) {
    let total = 0;
    elements.forEach(function(n) {
	total += n;
    })
    return total;
}

console.log(imperativeSum(numbers));

function functionalSum(elements) {
    return elements.reduce((total, n) => {return total += n;});
}

console.log(functionalSum(numbers));

// transforme un tableau de chaines en un
// tableau associatif clé = chaine, valeur = nombre de cars

function imperativeLengths(elements) {
    let  lengths = {};
    elements.forEach(function(element) {
	lengths[element] = element.length;
    });
    return lengths;
}
console.log(imperativeLengths(states));

function functionalLengths(elements) {
    return elements.reduce((lengths, state) => {
	lengths[state] = state.length;
	return lengths;
    },{});
}
console.log(functionalLengths(states));

/* Exercices */
// multiplie les éléments d'un tableau
function functionalMult(elements) {
    return elements.reduce((total,n) => { return total *= n});
}
console.log(functionalMult(numbers));


function functionalLengthsOneLine(elements) { return elements.reduce((lengths, state) => {lengths[state] = state.length; return lengths},{})};

console.log(functionalLengthsOneLine(states));











