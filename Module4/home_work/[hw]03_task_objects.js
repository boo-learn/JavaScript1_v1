// Данные о товарах:
items = [
    {
        "name": "Кроссовки",
        "brand": "adidas",
        "price": 3440
    },
    {
        "name": "Кепка",
        "brand": "reebok",
        "price": 3500
    },
    {
        "name": "Рюкзак",
        "brand": "reebok",
        "price": 4800
    },
    {
        "name": "Шорты",
        "brand": "puma",
        "price": 2500
    },
    {
        "name": "Шорты",
        "brand": "adidas",
        "price": 2750
    },
    {
        "name": "Футболка",
        "brand": "puma",
        "price": 1700
    },
]
// Найдите:
print("Товары на складе представлены брэндами: ")
// Выведите все бренды

// TODO: your code here

print("На складе самый дорогой товар брэнда(ов): ")
// Выведите название бренда самого дорогого товара

let brands = [];
let brandHightCost = '';

let hightPrice = items[0].price;

for (let product of items) {

    brands.push(product.brand);

    if (Number(product.price) > hightPrice) {
        brandHightCost = product.brand;
    }
}

console.log(brands.toString());
console.log(`На складе самый дорогой товар брэнда(ов): ${brandHightCost}`);
