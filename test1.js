/* Nathan Samano
 * CMP237 JavaScript
 * Solves Problems 0,1,2,3,4
 */

// 0) Three basic types of control flow (if, while, for)

// 1) declare variable with a value then change the value with control statement
// and print

// 2) declare a funtion both ways and use them

// 3) array of objects, extract info from and print info

// 4) nested scope

// create an array with initial values
var arr = [0, 1, 2, 3];

// delcare animal object
function Animal() {
  var name;
  var sound;
  var isMammal;
}

// create cat and bird animal objects
var cat  = new Animal();
var bird = new Animal();

// set the values of a cat object
function setCat(animal) {
  animal.name = "cat";
  animal.sound = "meow";
  animal.isMammal = true;
}

// set the values of a bird object
function setBird(animal) {
  animal.name = "bird";
  animal.sound = "chirp";
  animal.isMammal = false;
}

// print all the values for cat
var printCat = function() {
  print(cat.name + "\n" + cat.sound + "\n" + cat.isMammal);
}

// print all the values for bird
var printBird = function() {
  print(bird.name + "\n" + bird.sound + "\n" + bird.isMammal);
}

// call set functions
setCat(cat);
setBird(bird);

// call print functions
printCat();
printBird();

// change the values of arr
var j = 0;
while (arr.length < 5) {
  arr[j] = cat;
  j++;
  arr[j] = bird;
  j++;
}

// print all of arr and demonstrate nested scope
function printArr() {
  for (var i = 0; i < arr.length; i++) {
    print(arr[i].name + " " + arr[i].sound + " " + arr[i].isMammal);
    var someVar = 0;
  }
  print("different scope: " + someVar);
}
printArr();
