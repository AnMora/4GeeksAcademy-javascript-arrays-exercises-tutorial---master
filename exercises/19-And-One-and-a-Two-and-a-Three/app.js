//este es un objecto
let contact = {
    fullname: "Jane Doe",
    phone: "321-321-4321",
    email: "test@test.com"
}

// este es un arreglo let arr = [];

//let key es cualquier nombre
//hace referencia al objecto, es la que se va recorrer el objecto
for(let key in contact){
    // Code goes here
    console.log(key + " : " + contact[key]);
}