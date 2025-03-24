const users = new Map();

function criaUsuario(nome, email, senha) {
  // Criando o objeto usuário
  const usuario = {
    nome: nome,
    email: email,
    senha: senha,
  };

  // Definindo a chave (nome) e o valor (objeto do usuário) no Map
  users.set(nome, usuario);

  // Mostrando o conteúdo do Map no console
  console.log(users);

  // Exibindo os usuários na página HTML
  let userList = "";
  for (let [key, value] of users.entries()) {
    userList += `<li>${value.nome} - ${value.email}</li>`;
  }

  document.getElementById("list").innerHTML = `<ul>${userList}</ul>`;
}

// Chama a função criando o usuário com os dados dos inputs
criaUsuario("Sergio", "ssotter@gmail.com", 1234);
