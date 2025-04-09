function bonAppetit(bill, k, b) {
    bill.splice(k, 1)
    
    const sum = bill.reduce((acc, cur) => acc += cur/2, 0);

    sum === b
        ? console.log("Bon Appetit")
        : console.log(b - sum)
}

bonAppetit([3, 10, 2, 9], 1, 12);
bonAppetit([3, 10, 2, 9], 1, 7);
