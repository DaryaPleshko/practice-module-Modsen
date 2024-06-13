// Создайте функцию fetchAndProcessData, которая загружает данные с сервера с
// помощью async/await. Если запрос завершается успешно, функция должна
// вернуть данные. Если происходит ошибка, функция должна обработать её и вернуть
// сообщение об ошибке.

async function fetchAndProcessData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (!response.ok) throw new Error(`Error, status: ${response.status}`);
        console.log(data);
    } catch (error) {
        console.log(`Ошибка: ${error.message}`);
    }
}

fetchAndProcessData('https://api.example.com/data');
fetchAndProcessData('http://ip-api.com/json');