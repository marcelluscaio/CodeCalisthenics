const arr = [6, [6,6,6,6,6,6],  [1,7,3, 1,80,3], [2,3,4, 2,3,4],[4,5,6, 4,5,6], [2,3,4, 2,3,4],[8,8,8,8,8,8]];

function diagonalDifference(arr) {
    const matrixSize = arr[0];
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;
    
    for(i=1; i<=matrixSize; i++){
        for(j=0; j<matrixSize; j++){
            if(j === i-1){
                  console.log(arr[i][j]);
                firstDiagonalSum += arr[i][j];

            } 
            
            if(j === matrixSize-i){
                  console.log(arr[i][j]);
                secondDiagonalSum += arr[i][j]
            }
        }
    }
    console.log(firstDiagonalSum);
    console.log(secondDiagonalSum)
    const result = Math.abs(firstDiagonalSum - secondDiagonalSum);
    return result;
}