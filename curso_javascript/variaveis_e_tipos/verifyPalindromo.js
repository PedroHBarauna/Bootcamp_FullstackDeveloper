//solução um

const verifyPalindromo = (string) => {
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;

}
//solução dois

const verifyPalindromo2 = (string) => {
    if(!string) return "string inexistente";

    for(let i=0;i<string.length/2;i++){
        
    }

    return string === palindromoReverse;

}


console.log(verifyPalindromo('ABA'));
console.log(verifyPalindromo2('ABA'));