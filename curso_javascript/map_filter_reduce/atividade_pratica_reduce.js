function somaArray(arr){
    return arr.reduce(function(prev, current){
        return prev + current;
    });
}

const arr = [1, 2, 3, 5, 8, 13, 21];

console.log(somaArray(arr));