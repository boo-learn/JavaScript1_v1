// Напишите функцию, возвращающую наибольшее из четырех чисел

function max4(n1, n2, n3, n4){
    // TODO: your code here
numbers = [n1,n2,n3,n4]; 
maximum = numbers[0];
for (let i = 1; i<4; i++) {
if (numbers[i] > maximum) {
    maximum = numbers[i];
}
}
return maximum
}


// Тестируем функцию
console.log(max4(5, 6, 12, 7))
console.log(max4(-10, -12, -4, -9))
console.log(max4(2.5, 2.6, 2.6, 2.4))
console.log(max4(-2.5, 0, -1.2, -0.4))
console.log(max4(-2, -2, -2, -2))
