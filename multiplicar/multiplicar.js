const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {


    console.log('================='.green);
    console.log(`===tabla de ${ base }====`.green);
    console.log('================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${i} = ${ base * i } \r\n`);
    }

}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${ base } * ${i} = ${ base * i } \r\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tablas/tabla-${base}.txt`.green);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}