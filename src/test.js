const nlp = require('compromise');

let doc = nlp('she sells seashells by the seashore.')
doc.verbs().toPastTense()
console.log(doc.text());
// 'she sold seashells by the seashore.'

const term = ['logo', 'review', 'photography', 'accessibility'].find((term) => {
    return 'what is my review score'.includes(term)
})

console.log (`you are talking about ${term} arent you`);

const GG = /\b(review|photography|logo|information architecture|brand standard|design quality)(s|es|ies)?\b/gi;



console.log('hello mr jello reviews man i like your photography and information architecture'.match(GG))