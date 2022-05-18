// kebap-case (no permitido en JS)
//const last-name = 'Doe';
// snake_case (recomendado en otros lenguajes como Phyton)
const last_name = 'last_name';
// PascalCase (recomendado en Js para las clases)
const LastName ='LastName';
// camelCase (recomendado en JS para las variables y funciones)
const lastName = 'lastName';
document.write (lastName);
const person = 'Joe Doe', carName = 'Volvo', price = 200;
let x; //Creando variable (indefinido)
x = 5; //Asigna valor, de tipo numerico entero y valor 5
x = "Texto"; //Asigna valor, de tipo string y valor Texto.
const variable1 = 1/0; // valor infinity (solo operaciones con numeros)
const variable2 = parseFloat('prueba'); //NaN (conversion incorrecta a numerica)
let variable4;
//undefined
console.log(variable4);
//error
console.log(variable_nodeclarada);
// VAR Y LET
var alert1 ='5';
//permitido
var alert1 = '';
let alert2 = 5;
//no permitido porque ya se declaro antes
// let alert2= 5;
alert2 = 6  

// EJERCICIO 164-165
let a=1, b=3, c=7;
console.log(a+b+c); //variables sumadas a+b+c= 1+3+7=11
c=13; //cambio valor de numero
console.log(a+b+c); //variables sumadas a+b+c= 1+3+13=17

//EJERCICIO ARRAY
const semana=["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
console.log(semana[0]);
console.log(semana[1]);
console.log(semana[2]);
console.log(semana[3]);
console.log(semana[4]);
console.log(semana[5]);
console.log(semana[6]);
//Lenght para arrays
console.log(semana.lenght);

//1.-CONVERSION DE STRING A NUMBER
const a = parseInt('2');
const b = +'2'
const c = +'d'
const d = ('2')

//2.-CONVERSION DE NUMBER A STRING
const a = 2;
console.log(a.toString());
console.log(String(a));

//3.-CONVERSION DE BOOLEAN A STRING
const a = false;
console.log(a.String(a))
console.log(false.toString())
