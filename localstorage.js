//Salvando dados tipo String
localStorage.setItem("name", "Jorge")

//Pegar dados inseridos
const name = localStorage.getItem("name")
console.log(name)

//Salvando dados tipo Objeto
//Convertendo Objetos em String com Stringfy e Salvando
const person = {
    nome: "Felipe",
    idade: 28,
    trabalho: "programador"
}

localStorage.setItem("person", JSON.stringify(person))

//Pegando dados
//convertendo de String para Opbjeto
const getPerson = localStorage.getItem("person")
const personToObject = JSON.parse(getPerson)
console.log(personToObject)
console.log(personToObject.trabalho)

//Deixando a busca sofisticada
//caso não tenha os dados, retorna uma mensagem
if (!name) {
    console.log("Nenhum nome encontrado")
}

//remover item
localStorage.removeItem("name")

//apagar todos os itens
localStorage.clear()
