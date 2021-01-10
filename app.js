const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        porHacer.crear(argv.descripcion);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log("=== Tarea por Hacer ===".green);
            console.log(tarea.descripcion);
            console.log("Completado: ", tarea.completado);
            console.log("=======================".green);
        }
        break;
    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrar = porHacer.borrar( argv.descripcion );
        console.log(borrar);
        break;
    default:
        console.log("Comando no reconocido");
}