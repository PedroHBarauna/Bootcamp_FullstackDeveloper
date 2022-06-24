const alunos = [
    {
       nome: 'João',
       nota: 5, 
       turma: '1B', 
    },
    {
        nome: 'Pedro',
        nota: 10, 
        turma: '3D', 
     },
     {
        nome: 'Paulo',
        nota: 7, 
        turma: '2A', 
     },
]

function mediaFinal(alunos, media){
    let alunosQuePassaram=[];
    for(let i=0;i<alunos.length;i++){

        const {nota, nome} = alunos[i];

        if(nota>=media){
            alunosQuePassaram.push(nome);
        }
    }

    return alunosQuePassaram;
}