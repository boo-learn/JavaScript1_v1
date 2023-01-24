// Даны два целых числа.
// Вывести список всех чисел кратных трем в диапазоне между заданными числами.

//let first_number = int(input())     // Первое число
//let second_number = int(input())    // Второе число

// TODO: your code here
let first_number = Number(prompt())     // Первое число
let second_number = Number(prompt())    // Второе число
if (first_number > second_number)
{
[first_number,second_number] = [second_number,first_number];
}
for (let i = first_number; i <= second_number; i++)
{if (i % 3 == 0) {
console.log(i);
}
}
