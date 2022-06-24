const pessoa1 = {
    
    nome: 'Pedro',
    idade: 20,
}

const pessoa2 = {
    
    nome: 'Yago',
    idade: 252,
}

function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade+anos} anos de idade.`;
}
console.log(calculaIdade.call(pessoa1, 30));
console.log(calculaIdade.apply(pessoa2, [27]));

let pessoa3 = calculaIdade.bind({anos: 10, nome:'Amanda', idade:40});

console.log(pessoa3());