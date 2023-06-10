/*
Input
A number of steps n for which the water(symbol for water) will pour down.
NEXT LINE will be the water pouring down the next step.

Input
5
_


Output
_
 _
  _
   _
    _

*/
const n = 5;
const water = '$';

for(i=0; i<n; i++){
    let result = '';
    for(j=0; j<i; j++){
        result+=' ';
    }
    result+=water;
    
    console.log(result);
}
