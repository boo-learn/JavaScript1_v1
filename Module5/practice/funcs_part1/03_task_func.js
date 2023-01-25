// Даны координаты двух точек на плоскости.
// Напишите функцию нахождения расстояния между двумя точками.

function distance(x1, y1, x2, y2){
    let res = Math.sqrt(Math.pow((x1 - x2),2) + Math.pow((y1 - y2), 2));
    return res
}


// Тестируем функцию
console.log(distance(2, 4, 2, 9))
console.log(distance(12, 8, 12, -9))
console.log(distance(23, 0, 15, 32))
