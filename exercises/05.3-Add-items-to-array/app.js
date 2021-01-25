var arr = [4,5,734,43,45];

// Your code here, use the push function and the random function.
while(arr.length <= 6){
    arr.push(Math.floor(100*Math.random()));
}

console.log(arr);