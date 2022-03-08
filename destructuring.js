//1. array destructuring
const numbners = [42, 65];
const x = numbers[0];
const y = menubars[1];
// বিকল্প
const [x, y] = [42, 65];
//
const [x, y] = numbers;
// boxify
function boxify(num1, num2){
    const nums = [num1, num2];
    return nums;
}
// function call
console.log(boxify(10, 20));
// object destructuring
const {name, age} = {name: 'potol', age: 12};
const {name, age} = {name: 'potol',id: 1254, salary:5000, age: 12};
//
const employee = {
    id: 'vs code',
    designation: 'developer',
    machine: 'HP',
    languages: ['html', 'css', 'js'],
    specification: {
        name: 'abdul',
        weight: 50,
        height: 66,
        address: 'vuter goli'
    }
}
//
const {designation, machine} = employee;
const {name, address} = employee.specification;

