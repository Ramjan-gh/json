const user = { id: 1, name: "Gorib Amir", job: "actor" };
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);


const shop = {
    owner: 'Alia',
    address: {
        street: 'kochu khet',
        city: 'Dhaka',
        coutry: 'BD'
    },
    products: ['laptop', 'phone'],
    revenue: 4500,
    isOpen: true,
    isNew: false
}
stringifiedShop = JSON.stringify(shop);
console.log(shop);
console.log(stringifiedShop);

const shopObject = JSON.parse(stringifiedShop);
console.log(shopObject)