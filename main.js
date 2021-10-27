//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes.
You can either display all of the values in the object - or, if you want a much tougher challenge,
loop through values(if applicable) to grab each favorite food.

Example 1:
Output This persons favorite pizza is ["Deep Dish","South Side Thin Crust"]...

Example 2 (Harder):
This person has many favorite foods:
Deep Dish, South Side Thin Crust, anything not from taco bell, Portillos Burgers, CHocolate, Vanilla, oreo...

*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

let favFood = (person) => {
    for (let i = 0; i < Object.keys(person).length; i++) {
        console.log(Object.values(person)[i])
    }
}

favFood(person3)

//=======Exercise #2=========//
/*
Write a class for a Person that has attributes for name, age, and arrray of their hobbies.
If should also have a printInfo method that prints the attributes in a formatted string.
Create a method that accepts a parameter to add to a Person's list of hobbies.
Create two people using the 'new' keyword, and print 
both of their infos. Add a hobby to one persons hobby list.
*/

// Create our Person Class here
class Person {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }

    printInfo() {
        console.log(`Name: ${this.name}\nAge: ${this.age}\nHobbies: ${this.hobbies}`);
    }

    addHobby(hobby) {
        this.hobbies.push(hobby);
    }
}

let Taeho = new Person('Taeho', 21, ['Games', 'Basketball'])
Taeho.addHobby('Sleeping')
Taeho.printInfo()
let George = new Person('George', 25, ['Cooking', 'Reading'])
George.printInfo()


// Create the printInfo method

// Create another function for the addHobbies method that takes one parameter

// Adding to the hbbies array...

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const checkLen = (str) => {
    return new Promise( (resolve,reject) => {
        if (str.length > 10) {
            resolve(true)
        }
        else {
            reject(false)
        }
    })
}

checkLen("Chicken")
.then( (result) => {
    console.log("Length of string is greater than 10")
})
.catch( (error) => {
    console.log("Length of string is less than 10")
})


// Codewars problem #1 Shortest Word
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/python
let find_short = (s) => {
    let words = s.split(' ');
    let shortest = words[0];

    for (let i = 0; i < words.length; i++) {
        if (words[i].length < shortest.length) {
            shortest = words[i];
        }
    }
    return shortest;
}

console.log(find_short('What is the shortest word'))


// Codewars problem #2 Reversed Sequence
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/python
let reverse_seq = (n) => {
    arr = [];

    for (let i = n; i > 0; i--) {
        arr.push(i);
    }
    return arr;
}

console.log(reverse_seq(5))