{
    const Ejercicios = {
        gestor: "Entrenador",
        cliente: "4",
        mensaje: "No te saltes ninguno",
        transferencia: "1000",
    }

    const Rutinas = {
        gestor: "Entrenador",
        cliente: "3",
        mensaje: "Sé constante",
        transferencia: "2000",
    }

    const Dietas = {
        gestor: "Nutricionista",
        cliente: "2",
        mensaje: "Siguela y no la dejes",
        transferencia: "3000",
    }

    const Suplementos = {
        gestor: "Nutricionista",
        cliente: "1",
        mensaje: "En las horas determinadas",
        transferencia: "4000",
    }

    console.log(Ejercicios);
    console.log(Rutinas);
    console.log(Dietas);
    console.log(Suplementos);
}

    const objetos = ['Ejercicios', 'Rutinas', 'Dietas', 'Suplementos'];
        console.log(objetos);

    const datos = ['gestor', 'cliente', 'mensaje', 'transferencia'];
        console.log(datos);

    const objetos1 = {
        1: 'Ejercicios',
        2: 'Rutinas',
        3: 'Dietas',
        4: 'Suplementos'
        };
        const array = [];
        
        for(var i in objetos1) {
            array.push([i,objetos1[i]]);
        }
        console.log(array)
    
    setTimeout(() => {
        console.log('Entrena con energia');
    }, 5000);

    setInterval(() => {
        console.log('Hard Trainig')
    }, 5000)