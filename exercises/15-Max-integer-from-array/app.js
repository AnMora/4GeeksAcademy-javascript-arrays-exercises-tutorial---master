var myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];

function myFunction(){
    let number = 0;
    for( let i = 0; i < myArray.length; i++){
        if(myArray[i] > number){
            number = myArray[i];
        }
    }
    return number;
}

console.log(myFunction());