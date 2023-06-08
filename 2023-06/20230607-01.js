/*You are in a room with happy people and sad people. You wish to measure how happy the room is.
To do this, you decide to add one point for each happy face and remove one for each sad face.

The possible emoticons are the following.
Happy:
=)
^_^

Sad:
:(
>_<

The final score may be a negative number.*/

const faces = '=) ^_^ :( ^_^ :( >_< >_<';

const arrayFaces = faces.split(' ');
let happiness = 0;

arrayFaces.forEach(face => {
    if(face=== "=)" || face === "^_^"){
        happiness++
    } else if(face=== ":(" || face === ">_<"){
        happiness--;

    }

})