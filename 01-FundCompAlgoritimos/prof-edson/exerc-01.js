<!-- Criaando Array -->
var frutas = ["Banana", "Laranja", "Maçã", "Manga", "Uva"];
console.log ("-------------------------------------");
console.log ("Length: "+frutas.length); // 5
console.log ("-------------------------------------");

<!-- Acessar um item (index) no Array -->
var primeiro = frutas[0];
console.log ("Primeira fruta: "+primeiro); // Banana
console.log ("-------------------------------------");
var ultimo = frutas[frutas.length - 1];
console.log ("Última fruta: "+ultimo); // Uva
console.log ("-------------------------------------");

<!-- Iterar todos os itens de um Array -->
frutas.forEach(function(item, index, array) {
  console.log(item, index);
  console.log ("-------------------------------------");
});

<!-- Adicionar um item ao final do Array -->
var novaFruta = frutas.push('Limão');
console.log ("PUSH - Nova fruta inserida final ["+frutas+"]"); // Banana,Laranja,Maçã,Manga,Uva,Limão
console.log ("-------------------------------------");

<!-- Remover um item do final do Array -->
var ultimaFruta = frutas.pop(); // remove "Limão" do final
console.log ("POP - Última fruta removida ["+frutas+"]"); // Banana,Laranja,Maçã,Manga,Uva
console.log ("-------------------------------------");

<!-- Remover um item do início do Array -->
var primeiraFruta = frutas.shift(); // remove "Banana" do início
console.log ("SHIFT - Primeira fruta removida ["+frutas+"]"); // Laranja,Maçã,Manga,Uva 
console.log ("-------------------------------------");

<!-- Adicionar um item ao início do Array -->
var novaFruta = frutas.unshift('Morango');
console.log ("UNSHIFT - Nova fruta inserida no inicio ["+frutas+"]"); // Morango,Laranja,Maçã,Manga,Uva 
console.log ("-------------------------------------");

<!-- Encontrar o índice de um item no Array -->
var pos = frutas.indexOf('Maçã');
console.log ("INDEXOF - Índice da fruta Maçã: "+pos); // 2
console.log ("-------------------------------------");

<!-- Remover um item pela posição do índice -->
var itemRemovido = frutas.splice(pos, 1); // remove Maçã
console.log ("SPLICE - Fruta removida pela posição/indice ["+frutas+"]"); // Morango,Laranja,Manga,Uva
console.log ("-------------------------------------");

<!-- Copiar um Array -->
var copiarFrutas = frutas.slice(); // copia o array
console.log ("SLICE - Cópia do Array ["+copiarFrutas+"]"); // Morango,Laranja,Manga,Uva
console.log ("-------------------------------------");
