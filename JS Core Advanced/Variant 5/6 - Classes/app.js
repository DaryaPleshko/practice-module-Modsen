// Создайте класс University со свойствами названия университета и факультетов.
// Включите методы для добавления отдела, удаления отдела и отображения всех
// отделов. Создайте экземпляр класса University, а также реализуйте логику
// добавления и удаления факультетов

class University {
    constructor(name) {
        this.name = name;
        this.departments = [];
    }

    createDepartment(department) {     // Метод для добавления отдела
        if (!this.departments.includes(department)) {
            this.departments.push(department);
            console.log(`Department ${department} added`);
        } else console.log(`Department ${department} already exists`);
    }
    deleteDepartment(department) {     // Метод для удаления отдела
        const index = this.departments.indexOf(department);
        if (index !== -1) {
            this.departments.splice(index, 1);
            console.log(`Department ${department} removed`);
        } else console.log(`Department ${department} not found`);
    }
    getDepartment() {                  // Метод для отображения всех отделов
        if (this.departments.length > 0) {
            console.log('Departments in ' + this.name + ':');
            this.departments.forEach(department => {
                console.log('- ' + department);
            });
        } else console.log('No departments found.');
    }
}

// Создание экземпляра класса University
const myUniversity = new University('BSUIR');

// Добавление факультетов
myUniversity.createDepartment('Computer Science');
myUniversity.createDepartment('Mathematics');
myUniversity.createDepartment('Physics');

// Отображение всех факультетов
myUniversity.getDepartment();

// Удаление факультета
myUniversity.deleteDepartment('Mathematics');

// Отображение всех факультетов после удаления одного из них
myUniversity.getDepartment();