const myMap = new Map();

myMap.set('fruit', 'apple');
console.log(myMap);
// apple => fruit

console.log(myMap.get('fruit'));
//fruit

myMap.delete('apple');

myMap.get('apple');
console.log(myMap);
// {}