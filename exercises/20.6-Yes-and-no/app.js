let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
let arr = [];
let newArray = theBools.map(item => {
    
    if(item == 0 ){
        arr.push('woko');
    }else{
        arr.push('wiki');
    }
    return arr;
});
console.log(newArray);