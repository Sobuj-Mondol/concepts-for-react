// 1. How to declare a variable using let and const
const fatherName = 'uttom';
let season = 'rainy';
season = 'winter';
// 2. condition
// 6 basic condition: >,<,===,!==,<=,>=
// multiple conditions: &&, ||
if(fatherName === 'Uttom' || season === 'rainy'){

}
else if(fatherName === 'uttom'){

}
else{

};
// 3. array declare
// index, length, push, pop
const numbers = [10, 20, 30, 40, 50];
numbers[0] = 5;
// 4. for loop
for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}
// 5. function
function multiple (num1, num2){
    const multi = num1 * num2;
    return multi;
}
multiple(10,10);
// 6. object
const student = {
    name:'Sobuj',
    age:20,
    hobi: 'music'
};
// 3 ways to access property by name
const myVariable = 'age';
console.log(student.age); // direct by property
console.log(student['age']) // access via property name string
console.log([myVariable]) // access via property name in a variable
