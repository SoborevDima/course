const prices = [120, 950, 430, 1100, 50, 2000, 310];
let total = 0;

for (const price of prices) {
    if (price < 500) {
        total += price;
    }
}

console.log("Сумма недорогих товаров:", total);


const tasks = [
  { title: "Купить молоко", completed: true },
  { title: "Полить цветы", completed: false },
  { title: "Написать код", completed: true },
  { title: "Покормить кота", completed: false },
  { title: "Убраться", completed: true }
];

let completedCount = 0;

for(const task of tasks) {
    if (task.completed === true) {
        completedCount++;
    }
}

console.log("Выполнено задач:", completedCount);


const students = [
  { name: "Анна", grade: 9 },
  { name: "Игорь", grade: 5 },
  { name: "Елена", grade: 10 },
  { name: "Олег", grade: 4 },
  { name: "Мария", grade: 8 }
];

let topStudentsCount = 0;

for (const student of students) {
    if (student.grade >= 8) {
        topStudentsCount++;
    }
}

console.log("Количество отличников:", topStudentsCount);