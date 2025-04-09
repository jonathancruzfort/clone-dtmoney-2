function dayOfProgrammer(year) {
    const isJulian = year < 1918
    const isGregorian = year > 1918
    const transitionYear = year == 1918

    switch (true) {
        case isJulian:
            return year % 4 ? `13.09.${year}` : `12.09.${year}`
        case isGregorian:
            return year % 400 === 0 || year % 4 === 0 && year % 100 > 0 ? `12.09.${year}` : `13.09.${year}`
        case transitionYear:
            return '27.09.1918'

    }

}

console.log(dayOfProgrammer(1800));
console.log(dayOfProgrammer(1802));
console.log(dayOfProgrammer(1918));
console.log(dayOfProgrammer(2800));
console.log(dayOfProgrammer(2024));
console.log(dayOfProgrammer(2021));
