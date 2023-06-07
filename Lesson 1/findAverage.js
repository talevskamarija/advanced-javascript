// Calculate the average of the elements, empty arrays shoul return 0
function sum(arr) {
    return arr.reduce((a, b) => a + b)
}

function calculate_average(arr) {
    return arr.length > 0 ? sum(arr)/arr.length : 0;
}

console.log('Average is:', calculate_average([1, 3, 5]));