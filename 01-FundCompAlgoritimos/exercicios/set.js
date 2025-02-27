var meuSet = new Set();

meuSet.add(1); // meuSet [1}]
meuSet.add(5); // meuSet [1, 5]
meuSet.add(5); // 5 ja foi inserido antes meuSet [1, 5]
meuSet.add('texto'); // meuSet [1, 5, 'texto']

var o = {a:1, b:2};
meuSet.add(o);

meuSet.add({a:1, b:2}); // o esta referenciando outro objeto

console.log(meuSet.has(1)); // esperado true
console.log(meuSet.has(3)); // esperado false
console.log(meuSet.has(Math.sqrt(25))); // esperado true
console.log(meuSet.has('Texto'.toLowerCase)); // esperado true
console.log(meuSet.has(o)); // esperado true

console.log(meuSet.size); // esperado 5

meuSet.delete(5); // esperado removido o 5 do set
console.log(meuSet);

console.log(meuSet.has(5)); // esperado false pois o 5 foi deletado

console.log(meuSet.size);  // esperfado 4

console.log(meuSet); // esperado Set { 1, 'texto', { a: 1, b:2 }, { a: 1, b:2 } }