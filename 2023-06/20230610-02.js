/*It is obligatory for the Muslims to make their rows straight and compact and to close the gaps between them. That is done by standing shoulder-to-shoulder and foot-to-foot.
The distance between rows in a mosque can vary depending on the size of the mosque and the preferences of the congregation. However, typically the distance between rows is around 60-80 centimeters (24-32 inches) to allow enough space for people to comfortably kneel and prostrate during prayer.
You are given the length l and the distance d between the rows of a mosque, your task is to calculate the number of rows in this mosque.
*/
const l = parseInt(readline());
const d = parseInt(readline());

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

const answer = Math.floor((l * 100) / d);

console.log(answer);