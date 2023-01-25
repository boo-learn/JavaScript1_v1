// Напишите функцию, находящую среднее арифметическое всех аргументов
// Функция должна вызываться с любым количеством аргументов

function average(...args) {
let sum = 0;
for (let arg of args) sum += arg;
return sum / args.length
}


console.log(average(3, 4, 8))
console.log(average(1, 4, 5, -3, 8, 4))
console.log(average(-10, 12, 6.3, -5.5, 7, 0.2))
