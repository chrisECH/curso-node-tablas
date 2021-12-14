
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear(); 


//console.log('base: yargs', argv.b, argv.l);


/* const [,,arg3 = 'base=5'] = process.argv;
const [ , base] = arg3.split('='); */



// const base = 5;

 crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch(err => console.log(err));