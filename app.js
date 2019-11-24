const argv = require('./config/yargs').argv;

const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(`${ archivo }`))
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e));

        break;
    default:
        console.log("Comando no reconocido");
}
// let base = '20';
// condole.log(argv.base)

// console.log(process.argv);
// let argv = process.argv;
// let parameter = argv[2];
// let base = parameter.split('=')[1];
// let data = ''

// for (let index = 1; index <= 10; index++) {
//     data += `${index} * ${base} = ${ base * index}\n`;

// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${base} ha sido creado!`);
// });