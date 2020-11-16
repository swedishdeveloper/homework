Skapa en **arrow function** med namnet `sumThree` som accepterar tre argument och returnerar summan av dem.

Skapa en **arrow function** med namnet `isZero` som accepterar ett argument och returnerar true/false beroende på om argumentet är lika med noll eller ej

````javascript
sumThree(5, 8, 3) // returnerar 16
````

````javascript
isZero(0)   // returnerar true
isZero(5)   // returnerar false
isZero("0") // returnerar false
````

<details>
<summary>Ledtråd</summary>

### Traditionell funktion
````javascript 
function add100(a) {
  return a + 100
}
````

### Arrow funktion (två olika varianter)

````javascript
const add100 = (a) => {
  return a + 100
}
````

````javascript
const add100 = (a) => a + 100
````
</details>

