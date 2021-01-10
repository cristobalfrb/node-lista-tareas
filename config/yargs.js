const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer',
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Define com complatada o pendiente la tarea',
}

//Creacion de los comandos
const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra la tarea completamente', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv //Utilizar el const argv para otros archivos
}