const arr = [ 10, 22, 9, 30, 25, 55, 40, 33, 60, 80 ]

function find(arr) {
    return arr.reduce((acc, cur, idxReduce) => {
        let newArr = []
        for(let i = idxReduce; i < arr.length; i++) {
            if(newArr.length === 0 || arr[i] > newArr[newArr.length-1])
                newArr.push(arr[i])
        }

        if(newArr.length >= acc.length) acc.push(...newArr)

        return acc
    }, []).length
}

console.log(find(arr))