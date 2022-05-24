//EJERCICIO 1
let numeros = [0,1,2,3,4,5];
for (let i = 0; i < numeros.length; i++>) {
    console.log(numeros[i])
}

for (let numero of numeros) {
    console.log(numero);
}

//EJERCICIO 2
let colores = ["amarillo", "azul", "rojo"]
for (let color of colores) {
    console.log(color);
}

//EJERCICIO 3
let frutas = ["pera", "manzana", "kiwi"]
for (let fruta of frutas) {
    console.log(frutas.push("piña"));
    console.log (frutas);
}

//EJERCICIO 4
let elementos1 = ["mar", "cielo", "rio", "nubes", "lluvia", "sol"];
let elementos2 = ["oceano", "cielo", "rio", "nubes", "lluvia", "sol"];
let contador=0;
for (let element1 of elementos1);
    for (let element2 of elementos2) {
        if (element1==element2) {
            contador++; 
        }
    }
console.log("El numero " + contador);

//EJERCICIO 5
let tierra = ["mar", "rio", "sol", "oceano", "nubes"];
let tierra2 = tierra.slice(1,3);
console.log(tierra2);