var lista = [];

function push() {
    var adiciona = lista.push(item.value);
    document.getElementById("resultado").innerHTML = 'Item adicionado ao final do Array ' + item.value;
    document.getElementById("list").innerHTML = 'Array [' + lista + ']';
}

function pop() {
    var remove = lista.pop(item.value);
    document.getElementById("resultado").innerHTML = 'Item removido do final do Array ' + item.value;
    document.getElementById("list").innerHTML = 'Array [' + lista + ']';
}

function unshift() {
    var addInicio = lista.unshift(item.value);
    document.getElementById("resultado").innerHTML = 'Item adicionado ao inicio do Array ' + item.value;
    document.getElementById("list").innerHTML = 'Array [' + lista + ']';
}

function shift() {
    var removeInicio = lista.shift(item.value);
    document.getElementById("resultado").innerHTML = 'Item removido do inicio do Array ' + item.value;
    document.getElementById("list").innerHTML = 'Array [' + lista + ']';
}

function pos() {
    var removePos = lista.indexOf(itemRemover.value);
    console.log(removePos);
    var itemRemovido = lista.splice(removePos, 1);
    console.log(itemRemovido.value);
    document.getElementById("resultado").innerHTML = 'Item removido do Array ' + itemRemover.value;
    document.getElementById("list").innerHTML = 'Array [' + lista + ']';
}