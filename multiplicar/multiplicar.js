// requires
const fs = require('fs');
const colors = require('colors');

// const fs = require('express');
// const fs = require('./fs');


let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        console.log('===================='.green);
        console.log(`========tabla de ${base}============`.green);
        console.log('===================='.green);

        if (!Number(base) || !Number(limite)) {
            reject('El valor introducido no es un numero');
            return;
        }

        let data = ''

        for (let index = 1; index <= limite; index++) {
            data += `${index} * ${base} = ${ base * index}\n`;

        }
        resolve(data);
    })
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject('El valor introcuido no es un numero');
            return;
        }

        let data = ''

        for (let index = 1; index <= limite; index++) {
            data += `${index} * ${base} = ${ base * index}\n`;

        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(` tabla-${base}.txt`.green)

        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}