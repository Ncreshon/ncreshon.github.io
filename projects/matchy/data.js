/** 
 * Part 1
 * 
 * In this file, we're going to practice 
 * creating and accessing data structues.
 * 
 * See the README for detailed instructions, 
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species ="Scorpaphin";
animal['name'] = 'Lester';
animal.noises = [];
console.log(animal);
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = "moo";
noises.push("quack");
noises.unshift('bark');
noises[noises.length] = "meow";
console.log(noises.length);
console.log(noises[noises.length -1]);
console.log(noises);
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
animal['noises'].push("woof");
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * dot or bracket notation
 * 2. What are the different ways of accessing elements on arrays?
 * indexing
 * *******************************************************************
 */

/* ******************************************************************* 
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself 
 * a rest when you can! Grab a drink and have a think! 
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);
var duck = {species: "Duck", name: "Jerome", noises: ['quack', "honk", "sneeze", 'woosh']};
animals.push(duck);
console.log(animals);

var hippophant = {species: "Hippophant", name: "Ginger", noises: ['purr',"splash"]};
animals.push(hippophant);

var parrot = {species: "Bird", name: "Percy", noises: ["squawk", "gooble"]};
animals.push(parrot);
console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//We are choosing an array as our data structure because we are only 
//the friends and no other information//

var friends = [];
function randomAnimal()
{ return animals[Math.floor(Math.random() * animals.length)];}

var newAnimal = randomAnimal();
friends.push(newAnimal.name);
console.log(friends);

animal['friends'] = friends;
console.log(animal);
/** 
 * Nice work! You're done Part 1. Pat yourself on the back and 
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.animal = animal;
    module.exports.noises = noises;
    module.exports.animals = animals;
    module.exports.friends = friends;
    module.exports.getRandom = getRandom;
}
