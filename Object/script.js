// Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//   nome: 'Nome pessoa',
//   idade: 0,
//   andar() {
//     console.log(this.nome + ' andou');
//   }
// }

function Pessoa(nomeFornecido, idadeFornecida) {
 this.nome = nomeFornecido;
 this.idade = idadeFornecida;
  this.andar = function() {
    console.log(this.nome + ' andou');
  }
}
// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const joao = new Pessoa('João', 20);
const Maria = new Pessoa('Maria', 25);
const Bruno = new Pessoa('Bruno', 15);


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom (seletor) {
  const element = document.querySelectorAll(seletor);
  this.elements = element;

  this.addClass = function(classe){
    element.forEach((event) => {
      event.classList.add(classe)
    })
  }
  this.removeClass =  function(classe){
    element.forEach((event) => {
      event.classList.remove(classe)
    })
}}

const listaItens = new Dom('li')
listaItens.addClass('ativo')
listaItens.removeClass('ativo')
