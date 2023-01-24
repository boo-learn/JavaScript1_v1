// Дан массив из n элементов, заполненный произвольными целыми числами в диапазоне от -10 до 10.
// Вывести на экран сумму всех положительных элементов.

// TODO: your code here
let fruits = [2, -2, 4, 5];
let sum = 0;
for (let iterator of fruits) {
    if (iterator > 0) {
        sum += iterator;
    }
}
console.log(sum);
