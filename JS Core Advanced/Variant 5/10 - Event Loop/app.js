// Напишите функцию, принимающую параметр data. Функция всегда должна
// возвразать Promise. В случае, если параметр возвращает не число, верните Promise reject
// с ошибкой 'Error'. В случае, если параметр возвращает нечетное число, то верните
// Promise через одну секунду c результатом 'Odd'. Если параметр возвращает четное
// число, то верните Promise через две секунды c результатом 'Even'.