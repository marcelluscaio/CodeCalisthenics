/*An array A contains N integers. One of them is said the Prevailing Element if it occurs in A at least floor(N/2) + 1 times.
You have to identify the Prevailing Element if it exists.*/
const count = parseInt(readline());
let numbers = [];
const minimumAmount = Math.floor(count/2) + 1;

for (let i = 0; i < count; i++) {
    const n = parseInt(readline());
    numbers.push(n);
}
const uniqueValues = Array.from(new Set(numbers));
uniqueValues.filter(uniqueValue => {
   let occurences = 0
   numbers.forEach(number => number === uniqueValue && occurences++);
   return occurences >=minimumAmount && uniqueValue
})