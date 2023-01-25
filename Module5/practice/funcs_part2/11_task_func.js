// Используя функцию average() из предыдущей задачи, найдите среднее арифметическое всех элементов массива

function average(...args) {
    // TODO: тело из предыдущей задачи
}


function gen_array(size, at=-10, to=10){
    let results = []
    for (let i=0; i<size; i++){
        let randomInt = Math.floor(Math.random() * (to - at + 1) + at);
        results.push(randomInt);
    }
    return results
}


myArray = gen_list(10);
let result = average(myArray);
console.log(`result = ${result}`);