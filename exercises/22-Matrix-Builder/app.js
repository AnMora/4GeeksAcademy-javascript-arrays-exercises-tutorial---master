// Code goes here

/*
function matrixBuilder(item){
    let arr = [];
    for(let x = 0; x < item; x++){
        for (let y = 0; y < item; y++) {
            let addX = Math.floor(Math.random()*1);
            let addY = Math.floor(Math.random()*1);
            arr.push([x][y]);         
        }
    }
}
*/

//No usar un for porque la idea es reemplazar el for por un map

let number = Math.floor(Math.random()*2);
const matrix = new Array(5).fill(0).map(() => new Array(5).fill(number));

// do not change anything from this line down
//console.log(matrixBuilder(5))
console.log(matrix);