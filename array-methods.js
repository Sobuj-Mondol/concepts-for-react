const products = [
    {name: 'phone', price: 10000, brand: 'iphone', color: 'gold'},
    {name: 'wacth', price: 3000, brand: 'rolex', color: 'gold'},
    {name: 'laptop', price: 150000, brand: 'HP', color: 'silver'},
    {name: 'sunglass', price: 300, brand: 'puma', color: 'black'},
    {name: 'camera', price: 30000, brand: 'nickon', color: 'gray'},
];
// 
const color = products.map(product => product.color);
// console.log(color);
//
const brand = products.map(product => product.brand);
// console.log(brand);
// forEach
products.forEach(product => console.log(product));
products.forEach(product => console.log(product.price));
// filter
const pendrive = products.filter(product => product.price <= 5000);
// console.log(pendrive);
// includes
const splingName = products.filter(product => product.name.includes('n'));
console.log(splingName);
//find
const splingName2 = products.find(product => product.name.includes('n'));
console.log(splingName2);


