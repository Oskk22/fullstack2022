const Entrenador = {
    nombre: 'Oscar',
    mayordeedad: true,
    edad: 26,
    domicilio: null,
    aficiones: ['Fitness', 'Futbol'],
    constacia: () => {
        console.log('constancia');
    }
};

console.log(typeof (Entrenador.nombre));
console.log(typeof (Entrenador.mayordeedad));
console.log(typeof (Entrenador.edad));
console.log(typeof (Entrenador.domicilio));
console.log(typeof (Entrenador.aficiones));
console.log(typeof (Entrenador.constacia));
console.log(typeof (Entrenador));
