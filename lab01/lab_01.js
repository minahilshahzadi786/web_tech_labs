//task1
function addition(a, b) {
    return a + b;
}
let a = Number(prompt("Enter a: "));
let b = Number(prompt("Enter b: "));
alert(" Sum = " + addition(a, b));

//task2
function bitwiseAND(a, b) {
    return a & b;
}
console.log(bitwiseAND(5, 3));

function bitwiseOR(a, b) {
    return a | b;

}
console.log(bitwiseOR(5, 3));

function bitwiseXOR(a, b) {
    return a ^ b;
}
console.log(bitwiseXOR(5, 3));

//task3
function addUp(a) {
    let sum = 0;
    for (let i = 1; i <= a; i++) {
        sum = sum + i;
    }
    return sum;
}
let num = Number(prompt("Enter a number: "));
alert(addUp(num));

//task4
function progressBar(a) {
    let filled = Math.floor(a / 10);
    let empty = 10 - filled;
    return "#".repeat(filled) + "-".repeat(empty);
}
console.log(progressBar(40));
console.log(progressBar(49));
console.log(progressBar(70));

//task5
function minMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return [min, max];
}
console.log(minMax([3, 7, 2, 9, 5]));

//task6
function calculateRepoStats(repos) {

    let stars = repos.map(repo => repo.stars);
    let maxStars = Math.max(...stars);
    let minStars = Math.min(...stars);

    let avgStars = Math.floor(
        stars.reduce((sum, value) => sum + value, 0) / stars.length
    );

    let varianceScore = Math.abs(maxStars - minStars);

    return {
        maxStars,
        minStars,
        avgStars,
        varianceScore
    };
}

const repos = [
    { name: 'repo-a', stars: 12 },
    { name: 'repo-b', stars: 45 },
    { name: 'repo-c', stars: 3 }
];

console.log(calculateRepoStats(repos));

//task7
function calculateFinalPrice(basePrice, taxRate, discountPercentage) {
    let discountedPrice = basePrice * (1 - discountPercentage / 100);
    let tax = discountedPrice * (taxRate / 100);
    let finalPrice = discountedPrice + tax;

    finalPrice = Number(finalPrice.toFixed(2));

    let loyaltyPoints = Math.ceil(finalPrice);

    return {
        finalPrice: finalPrice,
        loyaltyPoints: loyaltyPoints
    };
}

console.log(calculateFinalPrice(1000, 10, 20));

//task8
function paginateData(items, pageNumber, pageSize = 5) {
    let totalPages = Math.ceil(items.length / pageSize);
    let startIndex = (pageNumber - 1) * pageSize;
    let endIndex = startIndex + pageSize;
    let data = items.slice(startIndex, endIndex);

    return {
        data: data,
        currentPage: pageNumber,
        totalPages: totalPages,
        hasNext: pageNumber < totalPages,
        hasPrev: pageNumber > 1
    };
}

const allProducts = [
    'Laptop',
    'Mouse',
    'Keyboard',
    'Monitor',
    'Desk',
    'Chair',
    'Webcam',
    'Headphones'
];

const result = paginateData(allProducts, 2, 3);

console.log(result);


