//task 1
const printName = (name) => "Hi "+name
console.log(printName("john"))

//task 2
const printBill = (name, bill) => {
    return `Hi  ${name} , please pay  ${bill}`;
}
console.log(printBill("john",500))


//task 3

const person = {
    name: "Noam Chomsky",
    age: 92
};

let {name, age} = person;

console.log(name);
console.log(age);