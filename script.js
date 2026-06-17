let array = [12, 45, 7, 23, 89, 34, 11];

 



function findMax(array) {
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
}





function findSum(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}






function printOdd(array) {
    console.log("Odd Numbers:");

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            console.log(array[i]);
        }
    }
}





console.log("Maximum Number =", findMax(array));
console.log("Sum of Elements =", findSum(array));
printOdd(array);