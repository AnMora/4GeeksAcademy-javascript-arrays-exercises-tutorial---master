let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
for (let i = 0; i <= par.length; i++) {
    //console.log(par[i]);
    let letras = par[i].toLowerCase();
    if (letras != ' ') {
        if (counts[letras] == undefined) {
            counts[letras] = 1;
        } else {
            counts[letras] += 1;
        }
    }
};

// trim() toLowerCase()

console.log(counts);