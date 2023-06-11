/*Ben and Tom send messages to you describing the temperature in their respective countries.
Ben lives in the USA
Tom lives in the UK
Ben uses Fahrenheit
Tom uses Celsius

Ben and Tom will send you their inputs as one integer each b and t, separated by a space. There will be n such lines of inputs.
For each line, output the string "Higher" if Ben's temperature is higher than Tom's, and output the string "Lower" if Ben's temperature is lower than Tom's. If the temperatures are the same output the string "Same".

Conversion from C Celsius to F Fahrenheit follows the formula C x 9 / 5 + 32 = F*/


const n = parseInt(readline());

const convertFahrenheit = (Fahrenheit) => {
    return ((Fahrenheit - 32) * 5 / 9);
};


for (let i = 0; i < n; i++) {
    var inputs = readline().split(' ');
    const b = parseInt(inputs[0]);
    let benCelsius = convertFahrenheit(b);
    const t = parseInt(inputs[1]);

    if(benCelsius > t){
        console.log('Higher');
    } else if(benCelsius < t){
        console.log('Lower');

    } else if(benCelsius === t){
        console.log('Same');
    }

}
