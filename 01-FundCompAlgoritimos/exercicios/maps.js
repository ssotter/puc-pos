const contacts = new Map();
contacts.set('Jessie', {phone: '213-555-1234', address: '123 N ist Ave'});

// verifica de existe e retorna true se encontrar
console.log(contacts.has('Jessie')); // esperado true

// retorna um elemento do Map
console.log(contacts.get('Hilary')); // esperado indefinido

// adicionado contato Hilary
console.log(contacts.set('Hilary', {phone: '617-555-4321', address: '321 S 2nd St'}));

// retorna um elemento do Map
console.log(contacts.get('Jessie')); // esperado exibir os dados de Jessie

// deletar elemento do Map
console.log(contacts.delete('Raymond')); // esperado false
console.log(contacts.delete('Jessie')); // esperado true

// verifica o tamanho do Map
console.log(contacts.size); // esperado 1

// iterar o Map com forEach
const map1 = new Map();

map1.set(0, 'zero');
map1.set(1, 'um');

map1.forEach(function (value, key){
    console.log(key + ' = ' + value)
});