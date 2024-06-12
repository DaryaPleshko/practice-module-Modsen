// Функция принимает два целых числа и должна возвращать true, 
// если первое число без остатка делится на второе.

const calculation = (firstNum, secondNum) => {
    return (firstNum % secondNum === 0) ? true : false;
}

console.log(calculation(10, 2));