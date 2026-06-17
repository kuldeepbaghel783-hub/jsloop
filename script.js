// Different Variables
let n = 10;
let num = 153;
let sum = 0;
let digitSum = 0;
let armstrongSum = 0;
let factorCount = 0;






for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log("Sum of first " + n + " numbers = " + sum);





console.log("\nTable of " + n);
for (let i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + (n * i));





}








let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log("\n" + num + " is a Prime Number");
} else {
    console.log("\n" + num + " is NOT a Prime Number");
}











console.log("\nFactors of " + num + ":");
for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        console.log(i);
        factorCount++;
    }
}






let temp1 = num;

while (temp1 > 0) {
    digitSum += temp1 % 10;
    temp1 = Math.floor(temp1 / 10);
}

console.log("\nSum of digits of " + num + " = " + digitSum);








let temp2 = num;
let digits = num.toString().length;

while (temp2 > 0) {
    let digit = temp2 % 10;
    armstrongSum += digit ** digits;
    temp2 = Math.floor(temp2 / 10);
}

if (armstrongSum === num) {
    console.log("\n" + num + " is an Armstrong Number");
} else {
    console.log("\n" + num + " is NOT an Armstrong Number");
}