/*For each pair of characters of the text, swap the two characters.
input adfert

output daeftr

*/


const t = readline();

const arrayString = t.split('');

const result = [];

arrayString.forEach((letter, index) => {
    if(index === arrayString.length - 1 && arrayString.length % 2 === 1){
        result.push(letter)
    } else if(index%2 ===0){
        result[index + 1] = letter;
    } else if(index%2 ===1){
        result[index - 1] = letter;
    }

});

console.log(result.join(''));