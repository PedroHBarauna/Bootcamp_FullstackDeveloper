const verifyPalindromo = (string) => {
    if(!string) throw "string inexistente";

    return string === string.split("").reverse().join("");
}

function tryCatchExample(string){
    try{
        verifyPalindromo(string);
    }
    catch(e){
        throw e; // manipulação do erro. pode ser usado throw.
    }
    finally{
        console.log('A string enviada foi: '+string);
    }
}

tryCatchExample('');