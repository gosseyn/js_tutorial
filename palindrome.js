

// Reverses a string

/*function reverse(string) {
    //return string.split("").reverse().join("");
    return Array.from(string).reverse().join("");
} */



/*function emailParts(string) {
    tab = string.split("@");
    let userName = tab[0].toLowerCase();
    let domainName = tab[1].toLowerCase();
    return `user name : ${userName}, domain name : ${domainName}`;
}*/

// Ajoute la fonction reverse() à toutes les chaînes :
String.prototype.reverse = function reverse() {
    return  Array.from(this).reverse().join("");
}



// transformer palindrome en méthode
// Définition de l'objet Phrase :
function Phrase(content){
    this.content = content;
    
    //Exercice : retourne une version en maj du contenu
    this.louder = function () {
        return this.content.toUpperCase();
    }

      /* Exercice : fonction processor */
    this.processor = function processor(string) {
        return string.toLowerCase();
    }

     /* et on refactorise */

    // Retourne le contenu formalisé pour le test palindrome
    this.processedContent  = function processedContent() {
        return this.processor(content);
    }
    
    // retourne vraie si la Phrase est un palindrome
    
    this.palindrome = function palindrome() {
	/*let processedContent = this.content.toLowerCase();*/
	return this.processedContent() === this.processedContent().reverse();
    }
}


/* function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;

    // Retourne la TRADUCTION formatée pour le test
    this.processedContent = function processedContent() {
        return this.processor(translation);
    }

}

TranslatedPhrase.prototype = new Phrase();

let frase = new TranslatedPhrase("recognize", "reconocer");

console.log(frase.palindrome());

let napoleonsLament = new Phrase("Able was I ere I saw Elba");
console.log(napoleonsLament);
console.log(napoleonsLament.palindrome());

*/

/* Exercice ajouter la fonction blank à la classe String qui signale une chaîne vide

function testEmpty(string) {
    if(string.match(/^$/) || string.match(/^\s+$/))
	return "chaine vide !";
    else
	return "chaine non vide !";
}

String.prototype.blank = function() {
 if(this.match(/^$/) || this.match(/^\s+$/))
	return true;
    else
	return false;
}
*/
