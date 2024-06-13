// Напишите функцию, принимающую параметр data. Функция всегда должна
// возвразать Promise. В случае, если параметр возвращает не число, верните Promise reject
// с ошибкой 'Error'. В случае, если параметр возвращает нечетное число, то верните
// Promise через одну секунду c результатом 'Odd'. Если параметр возвращает четное
// число, то верните Promise через две секунды c результатом 'Even'.

const checkNumber = (data) => {
    return new Promise((resolve, reject) => {
        if (isNaN(data)) {
            return reject(new Error('Error'));
        }
        setTimeout(() => {
            (data % 2 === 0) ? resolve('Even') : resolve('Odd'), data % 2 === 0 ? 2000 : 1000;
        });
    });
}

checkNumber(4).then(result => console.log(result)).catch(error => console.error(error));
//через 2 секунды в консоли появится 'Even'
checkNumber(3).then(result => console.log(result)).catch(error => console.error(error));
//через 1 секунду в консоли появится 'Odd'
checkNumber('hello').then(result => console.log(result)).catch(error => console.error(error));
//в консоли появится 'Error'