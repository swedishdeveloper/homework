
## Bakgrund

Koden nedan

````javascript
let str = ''
for (let i = 0; i < 10; i++) {
    str = str + '*'
}

console.log(str)
````
ritar ut

````
**********
````

Kodraden nedan

````javascript
let str = ''
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < i; j++) {
        str = str + '*'
    }
    str = str + '\n' // Lägg till en radbrytning
}

console.log(str)
````

Ritar ut

````
*
**
***
****
*****
******
*******
********
*********
**********
````

## Din uppgift

**Genom att modifiera koden ovan**, försök rita ut följande former. Experimentera och fundera! Om du inte lyckas med allt, experimentera och se vad som händer! Lämna in något i alla fall!


*Mellanslag mellan varje*
````
* * * * *
````

*Upp och nedvänd triangel*
````
**********
*********
********
*******
******
*****
****
***
**
*
````

*Kvadrat*
````
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
````

*Romb*
````
* * * * *
 * * * * *
  * * * * *
   * * * * *
    * * * * *
````

Kom på fler former! Pyramid? Ett hus med tak?
