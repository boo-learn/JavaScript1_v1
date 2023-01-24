// Дан массив имен.
// Найдите самое длинное имя, если таких имен несколько - выведи любое их них

let names = ["Иван", "Ирина", "Вячеслав", "Василий", "Петр"]

// TODO: your code here
let names = ["Иван", "Ирина", "Вячеслав", "Василий", "Петр"]
let result = '';
let maxLenght = 0;
for (let name of names) {
    if (name.length > maxLenght) {
        maxLenght = name.length;
        result = name;
    }


}
console.log(result);
