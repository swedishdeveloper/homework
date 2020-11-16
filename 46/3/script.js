const animal = { species: { "swim": true }, name: "Billy", age: 5 };
console.log(animal);
//Ett sätt
animal.age++;
console.log(`Djurets ålder: ${animal.age} år`);
//Nollställa åldern
animal.age = 5;
//Ett annat sätt
animal["age"]++;
console.log(`Djurets ålder: ${animal.age} år`);
