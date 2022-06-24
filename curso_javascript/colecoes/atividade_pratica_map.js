function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value==='Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz','Admin');
usuarios.set('Pedro','User');
usuarios.set('Yago','Admin');
usuarios.set('Fernanda','User');
usuarios.set('José','User');
usuarios.set('Cátia','User');

console.log(getAdmins(usuarios));