const MeuArray = [1,2,3,4,5]

function verificaTamanho (num, arr){
    try{
        if(!num || !arr) throw new ReferenceError("Envie os Parâmetros");
    
        if(typeof arr!=='object') throw new TypeError("Não é um Array");
    
        if(typeof num!=='number') throw new TypeError("Não é um Número");
    
        if(arr.length!==num) throw new RangeError("Tamanho Inválido");

        return arr;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Este erro é um Reference Error");
            console.log(e.message);
        }
        else if(e instanceof TypeError){
            console.log("Este erro é um TypeError");
            console.log(e.message);
        }
        else if(e instanceof RangeError){
            console.log("Este erro é um RangeError");
            console.log(e.message);
        }
        else{
            console.log("Ocorreu um erro desconhecido", e);
        }
    }
}   

console.log(verificaTamanho());
console.log(verificaTamanho(2, 2));
console.log(verificaTamanho('2', MeuArray));
console.log(verificaTamanho(4, MeuArray));
console.log(verificaTamanho(5, MeuArray));