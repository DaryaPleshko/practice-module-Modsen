// Сделайте цепочку из трех промисов. Пусть первый промис возвращает число. Сделайте
// так, чтобы каждый последующий промис через 3 секунды возводил в квадрат
// результат предыдущего промиса. После окончания манипуляций выведите числовой
// результат в консоль

new Promise(function (resolve, reject) {
    setTimeout(() => resolve(3), 0);

}).then(function (result) {
    console.log(result); 
    return new Promise((resolve, reject) => { 
        setTimeout(() => resolve(result ** 2), 3000);
    });

}).then(function (result) { 
    console.log(result); 
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result  ** 2), 3000);
    });

}).then(function (result) {
    console.log(result); 
});