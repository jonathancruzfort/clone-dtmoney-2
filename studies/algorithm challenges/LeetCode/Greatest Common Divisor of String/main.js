// var gcdOfStrings = function(str1, str2) {
//     let largestStringMatch = ''
//     const stringsMatch = []

//     for(let i = 0; i < str2.length; i++) {
//         if(str1.includes(str2.substring(0, i+1))){
//             stringsMatch.push(str2.substring(0, i+1))
//         }
//     }


//     for(let i = stringsMatch.length - 1; i >= 0; i--) {
//         if(str1.length % stringsMatch[i].length === 0
// && str2.length % stringsMatch[i].length === 0) {
//             largestStringMatch = stringsMatch[i]
//             break
//         }
//     }

//     return largestStringMatch
// };

// var gcdOfStrings = function(str1, str2) {
//     let largestStringMatch = ''

//     for(let i = 0; i < str2.length; i++) {
//         const partialString = str2.substring(0, i+1)

//         if(str1.includes(partialString) 
//             && str1.length % partialString.length === 0
//             && str2.length % partialString.length === 0
//         ) {
//             largestStringMatch = partialString 
//         }

//     }

//     console.log(largestStringMatch)

//     return largestStringMatch
// };

// var gcdOfStrings = function(str1, str2) {
//     let GCD = 1

//     for(let i = 1; i <= str1.length; i++) {
//         if( i > GCD
//             && str1.length % i === 0
//             && str2.length % i === 0) {
//                 GCD = i
//             }
//     }

//     let stringsMatch = ''

//     for(let i = 1; i <= str1.length; i++) {
//         stringsMatch += str2.substring(0, GCD)
//         if(stringsMatch.length === str1.length) break
//     }

//     return str1.includes(stringsMatch) ? str2.substring(0, GCD) : ""
// };

var gcdOfStrings = function (str1, str2) {
    let largestStringMatch = ''

    for (let i = 1; i <= str2.length; i++) {
        const word = str2.substring(0, i)

        if (word.padEnd(str1.length, word) === str1
            && word.padEnd(str2.length, word) === str2
            && str1.length % word.length === 0
            && str2.length % word.length === 0)
            largestStringMatch = word
    }

    return largestStringMatch
};

console.log(gcdOfStrings('ABCABC', 'ABC')) // 'ABC'
console.log(gcdOfStrings('ABABAB', 'ABAB')) // 'AB'
console.log(gcdOfStrings('LEET', 'CODE')) // ''
console.log(gcdOfStrings('ABCDEF', 'ABC')) // ''
console.log(gcdOfStrings('AAAAAAAAA', 'AAACCC')) // ''
console.log(gcdOfStrings('AA', 'A')) // 'A'