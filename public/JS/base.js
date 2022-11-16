const nome = "Paulo Resende";
let nome2 = "";
let pessoaDefault = {
    nome: "Paulo Resende",
    idade: "29",
    trabalho: "Advogado"
}

let nomes = ["Paulo", "Pedro", "André"];
let pessoas = [
    {
        nome: "Paulo",
        idade: "29",
        trabalho: "Advogado"
    },
    {
        nome: "Pedro",
        idade: "29",
        trabalho: "Advogado"
    },
    {
        nome: "André",
        idade: "29",
        trabalho: "Advogado"
    }
];


function alterarNome () {
    nome2 = "moça legal"
    console.log("Valor alterado")
console.log(nome2)
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome")
    console.log(nome2)
    

}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
console.log(pessoa.nome);

console.log("Idade:");
console.log(pessoa.idade);

console.log("Trabalho:");
console.log(pessoa.trabalho);
}

console.log(pessoas);

console.log(nomes[0]);


function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}


function imprimirPessoas() {
    pessoas.forEach((item) => {
        console.log("------------IMPRIMIR-----------")
        console.log("nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);

        console.log("Trabalho:");
        console.log(item.trabalho);
    })
}

adicionarPessoa({
    nome: "Charles",
    idade: "29",
    trabalho: "Advogado"
});


imprimirPessoas();
//imprimirPessoa(pessoaDefault);
//recebeEalteraNome("João Silva");
//recebeEalteraNome("Maria Silva")
//alterarNome();