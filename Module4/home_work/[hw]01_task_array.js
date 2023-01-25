// Дан массив имен.
// Выведите все имена в одну строку через запятую

//names = ["Иван", "Ирина", "Вячеслав", "Василий", "Петр"]

// TODO: your code here

// Пример вывода:
// Иван, Ирина, Вячеслав, Василий, Петр
let names = ["Иван", "Ирина", "Вячеслав", "Василий", "Петр"]
let result = ""
 for (let i = 0; i < names.length - 1; i++) {
result += names[i] + ", " 
 }
 result += names[names.length - 1];
    console.log(result)
