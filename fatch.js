// 1. Json > stringfy, parse
const student = {
    name:'Sobuj',
    age:20,
    hobi: ['music', 'play', 'video']
};
const studentJSON = JSON.stringify(student);
console.log(studentJSON);
// normal object
const studentObj = JSON.parse(studentJSON);
console.log(studentObj);
// fetch
fetch ('url')
.then(res => res.json())
.then(data => console.log(data));

// keys, values
const keys = Object.keys(student);
const value = Object.values(student);
// for
const numbers = [10, 20, 30, 40, 50];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);
//add or remove from an array
const products = [
    {name: 'phone', price: 10000, brand: 'iphone', color: 'gold'},
    {name: 'wacth', price: 3000, brand: 'rolex', color: 'gold'},
    {name: 'laptop', price: 150000, brand: 'HP', color: 'silver'},
    {name: 'sunglass', price: 300, brand: 'puma', color: 'black'},
    {name: 'camera', price: 30000, brand: 'nickon', color: 'gray'},
];
//
const newProduct = { name: 'webcam', price: 800, brand: 'Lal'};
//copy products array and then add newProduct
const newProduct = [...products, newProduct]

// create a new array without one specific item
// remove phone means create a new array without the phone
const reamining = products.filter(product => product.name !== 'phone');


