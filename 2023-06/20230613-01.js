/*A ticket has a 6 digit number that goes from 000000 to 999999. It is a lucky ticket if the sum of the first three digits is equal to the sum of the last three digits.

You are given N ticket numbers. For each of them your program must output true if a given ticket number is lucky or false if not.*/

const n = parseInt(readline());
for (let i = 0; i < n; i++) {
    const t = readline();
    console.log(isLucky(t))
}

function isLucky(ticket){
    let firstThree = 0;
    let lastThree = 0;
    for(i=0; i<ticket.length; i++){
        if(i<3){
            firstThree += parseInt(ticket[i])
        } else {
            lastThree += parseInt(ticket[i])
        }

    }
    return firstThree === lastThree ? true : false

}