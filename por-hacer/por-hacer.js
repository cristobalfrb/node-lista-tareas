const fs = require('fs');
const {
    boolean
} = require('yargs');

let listadoPorHacer = [];

const guardarDB = () => {
    //Guardar el listado por hacer trasnformandolo de [] a JSON
    let data = JSON.stringify(listadoPorHacer);
    //Grabar la data dentro del archivo json
    fs.writeFile('bd/data.json', data, (err) => {
        if (err) {
            console.log(err)
        };
    });
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../bd/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {

    //Cargar base de datos para llenar el listadosPorHacer
    cargarDB();

    let porHacer = {
        descripcion: descripcion,
        completado: false,
    };
    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const getListado = (filtro) => {

    cargarDB();
    let listadoNuevo = []

    if (filtro === true) {
        listadoNuevo = listadoPorHacer.filter(tarea => {
            return tarea.completado == true;
        })
        return listadoNuevo;
    } else if (filtro === false) {
        listadoNuevo = listadoPorHacer.filter(tarea => {
            return tarea.completado == false;
        })
        return listadoNuevo;
    } else {
        return listadoPorHacer;
    }


}

const actualizar = (descripcion, completado = true) => {

    cargarDB();
    //Buscar dentro del arreglo 
    let index = listadoPorHacer.findIndex((tarea) => {
        return tarea.descripcion === descripcion;
    });
    //Si el item existe cambiar el completado
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (desc) => {

    cargarDB();
    let actual = listadoPorHacer.length;
    //Buscar la tarea dentro del arreglo segun la descripcion
    listadoPorHacer = listadoPorHacer.filter((tarea) => {
        return tarea.descripcion != desc;
    });

    if (listadoPorHacer.length < actual) {
        guardarDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear, // Utilizar la funcion crear en otros archivos
    getListado,
    actualizar,
    borrar,
}