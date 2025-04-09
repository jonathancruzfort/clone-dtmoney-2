var mergeAlternately = function(word1, word2) {
    let mergedString = ''

    const longerStringLength = Math.max(word1.length, word2.length)

    for(let i = 0; i < longerStringLength; i++) {
        if(word1[i]) mergedString+= word1[i]
        if(word2[i]) mergedString+= word2[i]
    }

    return mergedString
};

console.log(mergeAlternately('abc', 'pqr') === 'apbqcr')
console.log(mergeAlternately('abc', 'pqr'), 'apbqcr')

console.log(mergeAlternately('ab', 'pqrs') === 'apbqrs')
console.log(mergeAlternately('ab', 'pqrs'), 'apbqrs')

console.log(mergeAlternately('abcd', 'pq') === 'apbqcd')
console.log(mergeAlternately('abcd', 'pq'), 'apbqcd')