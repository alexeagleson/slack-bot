const nlp = require('compromise');

let doc = nlp('she sells seashells by the seashore.')
doc.verbs().toPastTense()
console.log(doc.text());



const GG = /\b(review|photography|logo|information architecture|brand standard|design quality)(s|es|ies)?\b/gi;



console.log('hello reviews i like your photography and information architecture'.match(GG))