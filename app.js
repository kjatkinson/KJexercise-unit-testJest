// function fromYenToPound
const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen *0.8;
    return valueInPound;
}
// function fromDollarToYen
const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 156.5;
    return valueInYen;
}

// function "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

//function for sum of 2 numbers
const sum = (a,b) => {
    return a + b
}


console.log(sum(7,3))


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};