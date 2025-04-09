var kidsWithCandies = function(candies, extraCandies) {
    const greatestCandies = Math.max(...candies)
    return  candies.map(candie =>
        greatestCandies <= candie + extraCandies)
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)); // [true,true,true,false,true]
console.log(kidsWithCandies([4,2,1,1,2], 1)); // [true,false,false,false,false]
console.log(kidsWithCandies([12,1,12], 10)); // [true,false,true]