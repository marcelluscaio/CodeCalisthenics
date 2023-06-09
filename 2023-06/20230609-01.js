/*Gregory was born on February 29. He therefore celebrates his birthday on the 29th every 4 years, when it's a leap year. In other years, he celebrates it on the 28th.

You are given Gregory's age age, his year of birth year, and you must return the number of times he celebrated his birthday on the 29th.

The year of birth doesn't count

Hint: to be a leap year, the year must be:

-Divisible by 4 and not divisible by 100
-Divisible by 4, by 100 and by 400*/


function isLeap(year){
    let isLeap = false;
    if((year%4 === 0 && year%100 !== 0) || (year%4 ===0 && year%100 === 0 && year%400 ===0)){
        isLeap = true
    }
    return isLeap;
}

let birthdayLeap = 0;

for(i=1; i<=age; i++){
    if(isLeap(year+i)){
        birthdayLeap++
    }

}


console.log(birthdayLeap);
