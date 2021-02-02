var arr = [45,67,87,23,5,32,60];

var arr1 = []
//Your code here.
for(var i = arr.length-1; i >= 0; i--){
    arr1.push(arr[i]);
}

//console.log('Initial array: ' + arr);
console.log('Final array: ' + arr1);