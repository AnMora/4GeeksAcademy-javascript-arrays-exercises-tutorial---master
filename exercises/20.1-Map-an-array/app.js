var arrayOfCelsiusValues = [-2,34,56,-10];

//hay dos formas para llamar una funcion
//ar arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value){
var arrayOfFahrenheitValues = arrayOfCelsiusValues.map((value, index) => {
//var arrayOfFahrenheitValues = arrayOfCelsiusValues.map(value => {
	
    //add your code here and return the new value
    console.log(index);
	return ((value*9)/5)+32;
});

console.log(arrayOfFahrenheitValues);