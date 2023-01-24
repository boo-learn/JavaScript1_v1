// Дан массив из n элементов, заполненный произвольными целыми числами в диапазоне от -100 до 100.
// Вывести на экран сумму всех положительных элементов кратных двум.

// TODO: your code here
let numbers = [10, 7, -11, 6, -4, 0];
let sum = 0; 
for (let number of numbers) {
    if (number > 0 && number % 2 == 0) {
        sum += number;   
    }
}
console.log(sum);
