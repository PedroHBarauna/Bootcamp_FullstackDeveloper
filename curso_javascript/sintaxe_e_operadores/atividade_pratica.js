const mathTests = (a, b) =>{
    if(!a || !b) return 'Defina dois números!';

    const firstPhrase = createFirstPhrase(a, b);
    const secondPhrase = createSecondPhrase(a, b);

    return `${firstPhrase} ${secondPhrase}`;

}

const createFirstPhrase = (a,b) => {

    let notEqual = '';

    if(a!==b){
        notEqual = 'não'
    }

    return `Os Números ${a} e ${b} ${notEqual} são iguais.`
}

const createSecondPhrase = (a,b) => {
    let sum = a+b; 

    let result10 ='menor';
    let result20 ='menor';
    
    const compare10 = sum>10;
    const compare20 = sum>20;

    if(compare10){
        result10='maior';
    }

    if(compare20){
        result20='maior';
    }

    return `Sua soma é ${sum}, que é ${result10} que 10 e ${result20} que 20`;
}

console.log(mathTests(5, 5));