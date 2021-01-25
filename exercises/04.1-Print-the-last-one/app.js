function generateRandomArray(){
	var auxArray = [];
	var randomLength = Math.floor(Math.random()*100);
	for(var i = 0;i<randomLength;i++) auxArray.push(Math.floor(Math.random()*100));
	return auxArray;	
}
var myStupidArray = generateRandomArray();

//Your code here
var theLastOne = myStupidArray[myStupidArray.length-1];
//Se obtiene con lenght el ultimo elemento y el -1 se se posiciona en ese ultimo y lo muestra
console.log(theLastOne);