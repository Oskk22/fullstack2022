//EJERCICIO 1 DECLARAR FUNCION FLECHA
const sumar = (x,y) => {
    return x + y;
};
const restar = (x,y) => {
    return x - y;
};
const multiplicar = (x,y) => {
    return x * y;
};
const dividir = (x,y) => {
    return x / y;
};

console.log(sumar(1,2));
console.log(restar(1,2));
console.log(multiplicar(1,2));
console.log(dividir(1,2));

//EJERCICIO 2 DECLARAR FUNCION FLECHA SIMPLIFICADA
const sumar = (x,y) => x + y;
const restar = (x,y) => x - y;
const multiplicar = (x,y) => x * y;
const dividir = (x,y) => x / y;

console.log(sumar(1,2));
console.log(restar(1,2));
console.log(multiplicar(1,2));
console.log(dividir(1,2));

//setTimeout y setInterval funciones asincronas
setTimeout(() => {
    console.log('Esta funcion se ejecuta despues de 5 segundos')
}, 5000);

setInterval(() => {
    console.log('Esta funcion se ejecuta cada 5 segundos')
}; 5000);


//Anidacion de dunciones asincronas
setTimeout(() => {
    console.log('Hola');
    setTimeout(() => {
        console.log('Adios');
    }; 500);
}; 1000)
console.log('Buenos dias'); 

//EJERCICIO 5-178PAG
setTimeout(() => {
    console.log(sumar(4,2, (resultado) => {
        console.log(resultado)
    }));
}, 1000);
setTimeout(() => {
    console.log(restar(3,1, (resultado) => {
        console.log(resultado)
    }));
}, 2000);
setTimeout(() => {
    console.log(multiplicar(5,7, (resultado) => {
        console.log(resultado)
    }));
}, 3000);
setTimeout(() => {
    console.log(dividir(6,8, (resultado) => {
        console.log(resultado)
    }));
}, 4000);

