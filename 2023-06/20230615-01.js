/*The input is a Roda, something like
---R-L-R-L-RR----------------LR
*/

const R = readline();

const roadArray = R.split('');

let directions = '';

let amountForward = 0;

roadArray.forEach(roadPart => {
    if(roadPart==='-'){
        amountForward++
    } else if(roadPart==='R'){
        amountForward > 0 && console.log(`Go ${amountForward} blocks Forward`);
        amountForward = 0;
        console.log('Turn Right');
    } else if(roadPart==='L'){
        amountForward > 0 && console.log(`Go ${amountForward} blocks Forward`);
        amountForward = 0;
        console.log('Turn Left');
    }
});

console.log('You ve reached your destination')