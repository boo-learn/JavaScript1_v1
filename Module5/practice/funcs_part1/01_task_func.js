// Напишите функцию, возвращающую наибольшее из четырех чисел

function max4(n1, n2, n3, n4){
    if (n1>n2 && n1>n3 && n1>n4) 
        return n1
    else if (n2>n3 && n2>n4) 
        return n2
    else if (n3>n4) 
        return n3
    else
        return n4
}


// Тестируем функцию
console.log(max4(5, 6, 12, 7))
console.log(max4(-10, -12, -4, -9))
console.log(max4(2.5, 2.6, 2.6, 2.4))
console.log(max4(-2.5, 0, -1.2, -0.4))
console.log(max4(-2, -2, -2, -2))
