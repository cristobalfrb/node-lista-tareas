//Archivos requeridos
const fs = require('fs');
const colors = require('colors');
// const fs = require('express');
// const fs = require('./path');

let listarTabla = (base, limite = 10) =>{

    return new Promise((resolve, reject) =>{

        console.log('========================='.green);
        console.log(`Tabla del ${base}`.green);
        console.log('========================='.green);

        if(!Number(base) || !Number(limite)){
            reject('Los valores base y limite deben ser numericos');
            return false;
        }

        for (let i = 1; i <= limite; i++) {
           console.log(`${base} * ${i} = ${base * i} \n`);
        }


    });


}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject('Los valores base y limite deben ser numericos');
            return false;
        }

        let data = "";

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i} \n`);
        }


        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`)
        });
    });
}

module.exports = {
    crearArchivo, //la funcion que se puede exportar
    listarTabla
}