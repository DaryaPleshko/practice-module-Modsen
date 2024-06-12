// Напишите функцию, которая принимает массив и возвращает минимальное число.

const minValOfArray = (array) => {
    if (!array.length) throw new Error(`Массив пустой`);
    return Math.min(...array)
}

console.log(minValOfArray([9, 18, 8, 9, 1, 7, 0, 5, 7]));