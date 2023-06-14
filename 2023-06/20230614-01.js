/*
Challenge By Go Make Things

Let’s imagine you have a string of words.

let message = 'Hey there friend! How are you today?';

We want to create a “secret code” (it won’t be very secret) by reversing each word in the sentence and returning it as a new string.

The end result should look like this.

let secret = 'yeH ereht !dneirf woH era uoy ?yadot';


*/

const message = 'Hey there friend! How are you today?';
const arrayMessage = message.split(' ');

arrayMessage.forEach((word, position) => {
   let reversedWord = '';
   for(i=word.length; i>0; i--){
      reversedWord += word[i-1]
   }
   arrayMessage[position] = reversedWord;
}
)

console.log(arrayMessage);