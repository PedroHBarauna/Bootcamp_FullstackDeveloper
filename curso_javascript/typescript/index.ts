// //tipação de variáveis

// function soma(a: number ,b: number){
//     return a+b;
// }

// // console.log(soma(`a`, `b`));// já da erro
// console.log(soma(1, 2));

// //types e interfaces( funcionam como as structs do C, onde definimos estruturas de dados para lidar com o código)

// //interfaces

// interface IAnimal{
//     nome: string;
//     tipo: 'terrestre' | 'aquático';
//     domestico: boolean;
//     executarRugido(alturaEmDecibeis: number): void;
// }

// interface IFelinos extends IAnimal {
//     visaoNoturna: boolean;
// }

// const animal: IAnimal = {
//     nome: 'elefante',
//     tipo: 'aquático',
//     domestico: false,
//     executarRugido: (alturaEmDecibeis) => {console.log(`${alturaEmDecibeis}dB`)}
// }

// const felino: IFelinos = {
//     nome: 'lince',
//     tipo: 'terrestre',
//     visaoNoturna: true,
//     domestico: false,
//     executarRugido: (alturaEmDecibeis) => {`${alturaEmDecibeis}dB`},
// }

// console.log(animal.nome);
// animal.executarRugido(5);

// //types

// interface ICanino extends IAnimal{
//     porte: 'pequeno' | 'médio' | 'grande';
// }

// type IDomestico = IFelinos | ICanino; // podemos juntar(&) ou deixar apenas um ou outro(|)

// const animalCanino: IDomestico = {
//     domestico: true,
//     nome: 'cachorro',
//     porte: 'pequeno',
//     tipo: 'terrestre',
//     executarRugido: (alturaEmDecibeis) => {console.log(`${alturaEmDecibeis}dB`)}
// }

//tratando inputs e outros elementos html

// const input = document.getElementById('text') as HTMLInputElement;

// input.addEventListener('input', (event) => {
//     const i = event.currentTarget as HTMLInputElement;
//     console.log(i.value);
// })

//generic Types

// function substituindoApendiceALista<T>(array: T[], value: T){
//     return array.map(() => value);
// }

// const array = [1,2,3,4,5,6];

// console.log(substituindoApendiceALista(array, 1)) 
// console.log(substituindoApendiceALista(array, 2))
// console.log(substituindoApendiceALista(['A', 'C', 'D'], 'B'))

//condicionais a partir dos parâmetros

// interface IUsuario{
//     id: string;
//     email: 'string';
// }

// interface IAdmin extends IUsuario{
//     cargo: 'gerente' | 'coordenador' | 'Supervisor'
// }

// function redirecione(usuario: IUsuario | IAdmin){
//     if('cargo' in usuario){
//         //redirecionar para área de administração
//     }
    

//     //redirecionar para área do usuário
// }

//utilizando o ?

// interface IUsuario{
//     id: string;
//     email: 'string';
//     cargo?: 'gerente' | 'gerente' | 'coordenador' | 'Supervisor'
// }

// function redirecione(usuario: IUsuario){
//     if(usuario.cargo){
//         //redirecionar(usaurio.cargo)
//     }
    

//     //redirecionar para a área do usuário
// }

//utility types https://www.typescriptlang.org/docs/handbook/utility-types.html

interface Cachorro {
    readonly nome: string;
    readonly idade: number;
    readonly parqueFavorito?: string;
}

// type CachorroSomenteLeitura = {
//     readonly [I in keyof Cachorro]-?: Cachorro[I];//podemos retirar os elementos opcionais colocando -? após a iteração
// }

class MeuCachorro implements Readonly<Cachorro> {
    nome;
    idade;
    parqueFavorito;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }    
}

const cao = new MeuCachorro('Apolo', 14); 
cao.idade = 8;
console.log(cao);