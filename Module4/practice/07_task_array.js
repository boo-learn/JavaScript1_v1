// Дано 3 массива заполненные произвольными целыми числами.
// Найдите количество элементов, которые встречаются во всех трех .

let numbers1 = [2, -5, 0, 4, 7, 6];
let numbers2 = [4, 12, 7, 2];
let numbers3 = [10, 0, 2, 16, -6, 4];

let numers12 = [];
let numers123 = [];

for (let number1 of numbers1){
    for (let number2 of numbers2){
        if (number1 == number2){
            common.push(number1);
            break;
        }
    }
}

for (let number of commons){
    for (let number3 of numbers3){
        if (number == number2){
            common.push(number1);
            break;
        }
}
}