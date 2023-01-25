// Перепишите функция average на стрелочную функцию
let average = (...args) => {
    sum = 0;
    for (const number of args) {
        sum += number
    }
    return sum/args.length
}
