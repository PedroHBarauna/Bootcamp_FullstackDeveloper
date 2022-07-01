function filtraPares(arr){
    return arr.filter(function(item){
        return item % 2 === 0; 
    })
}

const arr = [1,3,5,6,7,8,9];

console.log(filtraPares(arr));