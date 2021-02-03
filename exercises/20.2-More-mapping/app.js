

var myNumbers = [23,234,345,4356234,243,43,56,2];

// your code here
//Esta es la forma mas resumida de realizar este ejemplo
let myFunction = myNumbers.map(item => {
  return item * 3;
});
//Esta variable se le esta almacenando la variable que tiene la funcion 
//aunque no es necesario porque se puede presentar en la consola directamente
//console.log(myFunction);
//pero el testeo lo requiere asi
let newArray = myFunction;
console.log(newArray);