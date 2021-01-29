var arr = [4,5,734,43,45];

// Your code here, use the push function and the random function.
//Funciona con el While
/*while(arr.length <= 6){
    arr.push(Math.floor(100*Math.random()));
}*/

//Para más profesional se pone counter en vez de i
for(let counter = 0; counter < 2; counter++) {
    arr.push(Math.floor(100*Math.random()));
}

console.log(arr);