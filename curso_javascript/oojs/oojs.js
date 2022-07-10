class Animal{
    constructor(type='animal'){//contrutor da classe, pode ser passado um type default
        this.type = type;
    }

    get type(){//retorna o tipo
        return this._type;
    }

    set type (val){//
        this._type=val.toUpperCase();
    }

    makesound(){
        console.log('Making Animal Sound');
    }
}


// let a = new Animal('mamífero', 'onça');
// let b = new Animal('', 'onça');

// console.log(a.type, a.name);
// console.log(b.type, b.name);

class Cat extends Animal{
    constructor(){
        super('gato');//manda para uma classe acima, ou seja a classe pai, o valor.
    }
    makesound(){
        super.makesound()//reescrevendo o método pai, para escrever meow
        console.log('Meow!');
    }
}

let c= new Cat();
console.log(c.type);
console.log(c.makesound());

/* Outro Exemplo para get*/
// class Boletim {
//     constructor(participacao, prova, trabalho){
//         this.participacao = participacao,
//         this.prova = prova,
//         this.trabalho = trabalho
//     }
//     get media() {
//         return parseInt((this.participacao + this.prova + this.trabalho) / 3)
//     }
// }

// let boletimSemestral = new Boletim(8, 6, 7.5)
// console.log(boletimSemestral.media) //7

// /*Outro exemplo para set */

// class Aluno {
//     constructor(nome, curso, semestre){
//         this.nome = nome,
//         this.curso = curso,
//         this.semestre = semestre
//     }
//     set nomeAluno(nomeAluno) {
//         this.nome = nomeAluno
//     }
// }

// let lucas = new Aluno('', 'Engenharia', 5)
// lucas.nomeAluno = 'Lucas'
// console.log(lucas.nome) //Lucas