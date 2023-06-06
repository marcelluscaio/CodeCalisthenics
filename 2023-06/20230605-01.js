/*Repeat the given string N times and output the result to the console
Input
lines 1:N - number of times to repeat
lines 2: the line to be repeated
Output
string repeated N times, but if N=0 output 'empty'*/

const N = parseInt(readline());
const string = readline();
let result = "empty";
for(i=0; i<N; i++){
    if(i===0){result = ''}
    result += string; 
}

console.log(result);