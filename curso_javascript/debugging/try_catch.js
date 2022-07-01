const verifyPalindromo = (string) => {
    if(!string) throw "string inexistente";

    return string === string.split("").reverse().join("");
}

function tryCatchExample(string){
    try{
        verifyPalindromo(string);
    }
    catch(e){
        console.log(e); // manipulação do erro. pode ser usado throw.
    }
}

tryCatchExample('');