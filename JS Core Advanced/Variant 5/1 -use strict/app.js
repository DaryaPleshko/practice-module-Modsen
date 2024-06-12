// Напишите функцию, которая принимает строку и возвращает массив слов, 
// из которых она состоит. Используйте строгий режим.

'use strict'

const stringToArray = (str) => str.split(' ');

console.log(stringToArray(`Hello , my name is Dasha`));