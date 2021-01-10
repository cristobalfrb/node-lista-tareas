
const descripcion = {
    demand: true,
    alias: 'd',
    description: 'Descripcion de la tarea por hacer',
}

const completado = {
    alias: 'c',
    default: true,
    description: 'Define tareas por completado',
}

const filtro = {
    type: 'boolean',
    alias: 'f',
    description: 'Filtra la lista de tareas por completadas'
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
    .command('listar', 'Listar las tareas actuales',{
        filtro
    })
    .help()
    .argv;

module.exports = {
    argv //Utilizar el const argv para otros archivos
}