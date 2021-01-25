var arr = [4,5,734,43,45];

// Your code here, use the push function and the random function.
function generateArray(arr){
    var auxArray = arr;
    var randomLength = Math.floor(Math.random()*100);
    for(var i = 0;i<randomLength;i++)
        auxArray.push(Math.floor(Math.random()*100));
    return auxArray;
}

console.log(arr);