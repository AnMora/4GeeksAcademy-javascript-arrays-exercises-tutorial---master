let names = ['Alice','Bob','Marry','Joe','Hilary','Stevia','Dylan'];

let prepender = names.map(item => {
	return 'My name is: '+ item;
});
console.log(prepender);