function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
}

// Written in ES2015 version 
function createInstructorj(firstName, lastName){
    return {
        firstName,
        lastName
    }
}



var favoriteNumber = 42;
var instructor = {
  firstName: "Colt"
}
instructor[favoriteNumber] = "That is my favorite!"

// Written in ES2015 version
let favoriteNumber = 42;
const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "This is my favorite number!"
}



var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + "says bye!";
    }
}

// Written in ES2015 version
const instructor = {
    firstName: "Colt",
    sayHi(){
        return "Hi";
    },
    sayBye(){
        return this.firstName + " say bye!";
    }
}



// Write a function which generates an animal object. The function should accepts 3 arguments:
// species: the species of animal (‘cat’, ‘dog’)
// verb: a string used to name a function (‘bark’, ‘bleet’)
// noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
// Use one or more of the object enhancements we’ve covered.
const x = createAnimal("dog", "bark", "Wooof!");
x.bark();
const y = createAnimal ("cat", "meow", "Meowwwwww!");
y.meow();

function 