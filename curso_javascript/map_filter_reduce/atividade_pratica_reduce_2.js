const lista = [ 
    {
        name: 'laranja',
        preco: 7,
    },
    {
        name: 'maca',
        preco: 5,
    },
    {
        name: 'banana',
        preco: 8,
    },
    {
        name: 'bolacha',
        preco: 6,
    },
    {
        name: 'leite',
        preco: 9,
    },
    {
        name: 'sabao em po',
        preco: 30,
    },
    {
        name: 'cereal',
        preco: 13,
    },
    {
        name: 'toalha',
        preco: 22,
    },
 ]

 const saldoDisponivel = 120;

 function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current){
        console.log(prev);
        console.log(current);
        return prev - current.preco;
    }, saldoDisponivel);
 }
 console.log(calculaSaldo(saldoDisponivel, lista));