const str ="En un lugar de la mancha";
const str2 = "En otro lugar";
const ultimoStr1= str1.length-1; //guarda 23
const ultimoStr2= str2.length-1; //guarda 12

if ((str1.charAt(0) == str2.charAt(0)) && (str1.charAt(u1) == str2.charAt(u2))) {
    document.write("Los dos stings tienen la primera letra igual")
}

else {
    document.write("Tienen la primera letra diferente")
}

//EJERCICIO 3   
let ejercicio3 = "abc lorem ipsum abc solor sit ametabc"
ejercicio3.indexOf("abc")

if ((ejercicio3.indexOf("abc") != -1) &&
(ejercicio3.indexOf("abc") !=0) &&) {
    console.log("Existe ABC dentro del string");
}
else {

}

//Se podria hacer con slice del 1 al lenght -2
//Ejercicio 4:

let stringPos = "Hola buenas"
let pos = 3;
if (condition) {
    console.log("La letra anterior es igual");
}
else if (condition) {
    console.log("La letra posterior es igual");
}
else {
    console.log("No son iguales las letras anterior y posterior");
}

//EJERCICIO 7:

const text = "Hola buenas";
text = text.slice(0, -1);
console.log(text);
