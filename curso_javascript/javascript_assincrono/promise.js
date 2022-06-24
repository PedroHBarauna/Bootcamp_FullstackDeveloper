async function resolvePromise(){
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(()=>{
            resolve(console.log("Resolvida!"));
        }, 2000);
    });

    const resolved = await myPromise
            .then(()=> result + ' passando pelo then')
            .then(()=> result + ' e agora acabou!')
            .catch((err) => console.log(err.message));

    return resolved;
}

//é necessario utilziar o await ao chamar a função no navegador