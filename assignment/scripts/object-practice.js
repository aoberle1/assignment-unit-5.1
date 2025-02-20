console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: 'Adam',
  lastName: 'Oberle',
  hasSiblings: true,
  shoeCount: 4,
  favThreeFoods: [ 'Apples', 'Bananas', 'Dragonfruit' ]
};
// console log to display properties of object me
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
// creating variable called fullName, uses .operator to access properties of me object
let fullName = me.firstName + ' ' + me.lastName;
console.log( 'My full name is:', fullName );



/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
// using array index value to log first food in array property of object
console.log( 'My first favorite food is:', me.favThreeFoods[0] );
// using array length to find last index of array property of object
console.log( 'My last favorite food is:', me.favThreeFoods[me.favThreeFoods.length-1])


/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
console.log( `We currently have ${me.shoeCount} pairs of shoes!`);
// adding 1 to the property of me.shoeCount (also works with incrementing using ++ rather than +1)
// shorthand of me.shoeCount++ also accomplishes same task
me.shoeCount = me.shoeCount + 1
// console log to display our updated shoeCount property
console.log( `We got another pair of shoes so now we have ${me.shoeCount} pairs of shoes!` );

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
// using .operator to assign new object property
me.favoriteColor = 'Blue';
// console logging new property added to object
console.log( me );
console.log( `My favorite color is ${me.favoriteColor}`)