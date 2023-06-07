function twoNumbersSum(array, expectedSum) {
    for(let i = 0; i < array.length; i++) {
        let elemetToFind = expectedSum - array[i];

        if(array.includes(elemetToFind) && array.indexOf(elemetToFind) !== i) {
            return [i, array.indexOf(elemetToFind)];
        }
    }
}

console.log(twoNumbersSum([1, 3, 7, 2], 4));