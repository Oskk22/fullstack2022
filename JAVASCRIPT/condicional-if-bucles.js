//CONDICIONALES IF + SWITCH
//EJERCICIOS 2 PAGINA 168 
let a=2, b=4, c=3, d=5;
suma1=a+b;
suma2=c+d;
if (suma1 > suma2) {
    document.write("la suma de a + b es mayor que la suma de c + d");
}
else if (suma1 < suma2) {
    document.write("la suma de a + b es menor que la suma de c + d");
}
else {
   document.write("la suma de a + b es menor o igual que la suma de c + d");
}

if (hora >=9) {
    document.write("")
}
else if (hora <=14) {
    document.write("")
}

//EJERCICO 3 CALCULO ANGULOS TRIANGULOS
let angulo1=60; angulo2=50; angulo3=70;
let triangulo = angulo1 + angulo2 + angulo3;
if (triangulo == 180) {
    document.write("Los angulos forman 180 grados del triangulo");
}
else {
    document.write("No es un triangulo");
}

//EJERCICIO 4 
 

//EJERCICIO 5
let x=1, y=2, z=3;
if (x>y && x>y) {
    document.write("X es la mayor");
}
else if (y>z) {
    document.write("Y es la mayor");
}
else {
    document.write("No hay mayor única");
}

//EJERCICIO 6
Es a

//EJERCICIO 7
Es b

//BUCLES
//EJERCICIO 8
for (let i = 1; i <= 50; i++) {
    console.log(i);
}

//EJERCICIO 9
for (let i = 0; i <= 10; i++) {
    document.write("5x" + i + = + 5*1 + "<br>");
}

//EJERCICIO 10
var palabra = prompt("Escribe cualquier palabra:","Escribe aqui");
for (let i = 0; i < 10; ii++) {
    document.write(palabra + "<br>");
}

//EJERCICIO 11
var numero = prompt("Escribe cualquier numero positivo:", "Escribe aqui");
for (let i = numero; i >= 0; i--) {
    document.write( i + "<br>");
}