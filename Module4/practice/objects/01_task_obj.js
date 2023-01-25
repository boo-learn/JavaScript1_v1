// Дан объект, содержащий данные о товаре из магазина
// "price" - цена товара в валюте "currency"
// item_count - количество товара который планирует купить клиент
// Считая,что курс доллара равен dollar_rate
// Вычислите стоимость покупки в долларах

// Информация о товаре
let item = {"name": "Кроссовки", "price": "7540.5", "currency": "rub"}
// Количество товаров
let item_count = 8;
// Курс доллара
let dollar_rate = 74.12;

// TODO: your code here
let cost = item.price * item_count / dollar_rate;
console.log(`Цена в долларах - ${Math.round(cost)}`)