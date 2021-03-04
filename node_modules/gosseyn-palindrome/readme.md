# L'objet Phrase (avec un détecteur de palindome)

Exemple de module NPM créé dans le cadre de [Learn Enough Javascript To Be Dangerous] (https://www.learnenough.com/javascript-tutorial)

Le module s'utilise comme suit :

```
$ npm install --global gosseyn-palindrome
$ vim test.js
let Phrase = require("gosseyn-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true

```
