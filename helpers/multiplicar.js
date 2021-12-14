const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta=0) => {
    try {

        let salida = '';
        if(hasta==0) hasta = 10;
        for (let i = 1; i <= hasta; i++){
            const res = base * i;
            salida += `${base} x ${i} = ${res} \n`;
        }
        
        
        if(listar){
            console.log('================'.green);
            console.log('TABLA DEL : ',base)
            console.log('================'.green);
            console.log(salida);
        }
        
        fs.writeFileSync(`./salida/tabla - ${ base }.txt`, salida);

        return `tabla - ${ base }.txt creado`;
    } catch (err) {
        throw err;
    }
}


module.exports = {
    crearArchivo
}
