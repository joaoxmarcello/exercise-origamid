// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

  function Pessoas(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }
  Pessoas.prototype.nomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`
  }
  const joao = new Pessoas('João','Rodrigues',23);

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;
li.click;
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click();

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
