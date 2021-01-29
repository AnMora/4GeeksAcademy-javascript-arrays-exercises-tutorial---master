var arr = [4,5,734,43,45];
//Se modifica 

//*****************
// Your code here
// you need to loop 10 times, for example, using a for loop
// for(let i = 0; i<10;i++){
//         your loop content here   
// }
//*****************
//Se cambia i por counter
for(let counter = 0; counter < 10; counter++){
    arr.push(Math.floor(100*Math.random()));
}
/* 
while(arr.length <= 6){
    arr.push(Math.floor(100*Math.random()));
}
*/
console.log(arr);