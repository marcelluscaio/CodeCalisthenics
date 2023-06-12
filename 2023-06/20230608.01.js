/*Sum the alphabet index of each character in the given word.*/



const arrayWord = s.split('');
let sum = 0;

arrayWord.forEach(letter => {
    const position = letter.toUpperCase().charCodeAt(0);
    sum += position - 64;
})

console.log(sum);