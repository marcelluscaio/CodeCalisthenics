//For all numbers less or equal to n, you must return the difference between the sum of all the numbers divisible by 3 and the sum of even numbers.

const n = parseInt(Math.floor(Math.random() * 10000));

const numbersDivisibleBy3 = [];
const evenNumbers = [];

for(i=0; i<=n; i++){
    if(i%3 ===0){
        numbersDivisibleBy3.push(i)
    }

    if(i % 2 === 0){
        evenNumbers.push(i)
    }
};

function getSum(array){
    return array.reduce((acc, number) => acc + number, 0)
};

const sumDivisibleBy3 = getSum(numbersDivisibleBy3);
const sumEven = getSum(evenNumbers);

const difference = sumDivisibleBy3 - sumEven;

console.log(difference);