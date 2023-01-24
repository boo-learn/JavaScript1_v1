// Дан массив из n элементов, заполненный произвольными целыми числами в диапазоне от -10 до 10.
// Вывести на экран сумму всех элементов.

// TODO: your code here
let arr = [];
let sum = 0;
let n = Number(prompt("n"));
for (let i = 0; i < n; i++) {
arr[i] = Number(prompt("элемент массива"))
}
for (let el of arr) {
sum += el;
}
console.log(sum);
