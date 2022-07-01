const verifyPalindromo = (string) => {
    if(!string) throw "string inexistente";

    return string.split("").reverse().join("") === string;
}
//colocar em um documento web a versão normal e versão com throw