const mathTests = (a, b) =>{
    if(a===b){
        console.log ("Os números "+a+" "+b+" são iguais\n");
    }
    else{
        return "Os números "+a+" "+b+" não são iguais\n"; 
    }
    if(a+b<10){
        console.log("Sua soma é "+(a+b)+" que é menor que 10 e menor que 20");
    }
    else if(a+b>10 && a+b<20){
        console.log("Sua soma é "+(a+b)+" que é maior que 10 e menor que 20");
    }
    else if(a+b==10){
        console.log("Sua soma é "+(a+b)+" que é igual a 10 e menor que 20");
    } 
    else if(a+b==20){
        console.log("Sua soma é "+(a+b)+" que é maior que 10 e igual a 20");
    }
    else{
        console.log("Sua soma é "+(a+b)+" que é maior que 10 e maior que 20");
    }
}

mathTests(1, 2);
mathTests(10, 30);
mathTests(10, 10);