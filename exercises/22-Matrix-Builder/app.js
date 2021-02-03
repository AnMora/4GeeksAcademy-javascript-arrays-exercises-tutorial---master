// Code goes here

const matrixBuilder = (number) => {
    let matriz = [];
    for (let j = 0; j < number; j++) {
        let filas = [];
        for (let i = 0; i < number; i++) {
            let num = Math.round(Math.random()*1);
            filas.push(num);
        }
        matriz.push(filas);
    }
    return matriz;
}
// do not change anything from this line down
console.log(matrixBuilder(5))