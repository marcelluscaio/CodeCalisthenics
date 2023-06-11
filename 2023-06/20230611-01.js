/*
The arithmetic mean (or mean or average) is the most commonly used and readily understood measure of central tendency. In statistics, the term average refers to any of the measures of central tendency. The arithmetic mean is defined as being equal to the sum of the numerical values of each and every observation divided by the total number of observations.

For this mission, you are given a non-empty list of natural numbers. You must compute their arithmetic mean.
*/


const N = parseInt(readline());
var inputs = readline().split(' ');
let sum = inputs.reduce((num, acc) => parseInt(num) + parseInt(acc), 0);
const result = sum / N;