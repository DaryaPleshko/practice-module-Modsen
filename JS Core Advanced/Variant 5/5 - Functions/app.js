// Напишите функцию JavaScript для поиска первого неповторяющегося символа 

const findUniqValue = (array) => array.find(num => array.indexOf(num) === array.lastIndexOf(num));

console.log(findUniqValue([1, 5, 4, 6, 5, 4, 3, 1, 7]));