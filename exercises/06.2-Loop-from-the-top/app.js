var mySampleArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];

// cualquier arreglo siempre comenzará en 0 no en 1
// el -1 es para no salirse del array, para conocer la ultima posicion del array
for(let i = mySampleArray.length-1; i >= 0; i--){
	console.log(mySampleArray[i]);
}