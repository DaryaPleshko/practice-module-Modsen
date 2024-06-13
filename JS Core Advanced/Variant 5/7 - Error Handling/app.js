// Напишите функцию, которая использует блок try-catch для перехвата и обработки ошибки
// «ReferenceError» при доступе к неопределенной переменной.

const accessUndefinedVariable = () => {
    try {
        console.log(nonExistentVariable);
    } catch (error) {
        console.log("Перехвачена ошибка ReferenceError: переменная не определена.");
    }
}