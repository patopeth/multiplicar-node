//const fs = require('express'); archivos externos que no vienen con node
//const fs = require('../path');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => {
                console.log(`Archivo creado: ${archivo}`);
            })
            .catch((err) => {
                console.log(err);
            })
        break;

    default:
        console.log('Comando no reconocido');

}
// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

//envio desde consola el parametro haciendo un node app --base=5 por ej

//console.log(argv.limite);