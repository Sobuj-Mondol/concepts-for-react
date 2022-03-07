const numbers = [10, 20, 30, 40, 50];
const student = {
    name:'Sobuj',
    age:20,
    hobi: ['music', 'play', 'video']
};
// 1. template string
const about = `my name is ${student.name}, age of ${student.age}, has number ${number[2]}, also liked hobi ${student.hobi[0]}`;
console.log(about);
// 2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = num => num % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}
// spread operator
const newNumbers = [...numbers];
// const newNumbers = numbers;
numbers.push(100);
numbers.push(100);
numbers.push(100);
console.log(number);
console.log(newNumbers);

// create a new array from an older array and add an element
const currentNumber = [...numbers, 60];
console.log(number);
console.log(newNumbers);
console.log(currentNumber);