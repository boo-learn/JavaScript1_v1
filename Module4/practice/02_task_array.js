// Дан массив. Вывести элементы списка, пронумеровав их начиная с единицы.
// Каждый элемент должен быть выведен с новой строки.

let fruits = ["яблоко", "банан", "киви", "ананас", "груша"];

// TODO: your code here

for (let index in fruits) {
console.log(`${Number(index) + 1}.${fruits[index]}`)
}
