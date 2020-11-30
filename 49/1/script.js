let str
//Mellanslag mellan varje
str = ''
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < i; j++) {
        str += '* '
    }
}
console.log(str)
//Upp och nedvänd triangel
str = ''
for (let i = 10; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        str += '*'
    }
    str += '\n' // Lägg till en radbrytning
}
console.log(str)
//Kvadrat
str = ''
for (let i = 5; i > 0; i--) {
    for (let j = 0; j < 5; j++) {
        str += '* '
    }
    str += '\n' // Lägg till en radbrytning
}
console.log(str)
//Romb
str = ''
for (let i = 0; i < 5; i++) {
    str += ' '.repeat(i);
    str += "* ".repeat(5);
    str += '\n' // Lägg till en radbrytning
}
console.log(str)
//Pyramid
str = ''
for (let i = 1; i <= 5; i++) {
    str += ' '.repeat(5 - i);
    str += '*'.repeat(i * 2 - 1)
    str += '\n' // Lägg till en radbrytning
}
console.log(str)
