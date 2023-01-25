// Напишите функцию, возвращающую наибольшее из двух чисел

function max2(n1, n2) {
   if (n2 > n1) {
    return n2
}
else {
    return n1
}
}
}


// Тестируем функцию
console.log(max2(5, 6));
console.log(max2(-10, -12));
console.log(max2(2.5, 2.6));
console.log(max2(-2.5, 0));
console.log(max2(0, -2.5));
