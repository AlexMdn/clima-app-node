const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async (direccion) => {
    try {
        const ubicacion = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getclima(ubicacion.lat, ubicacion.lng);
        return `El clima de ${direccion} es de ${temp} °C`;
    } catch (error) {
        return `No se pudo obtener el clima de ${direccion}`;
    }    
}

getInfo(argv.direccion)
.then(console.log)
.catch(console.log);


/*
lugar.getLugarLatLng( argv.direccion)
.then( console.log );
*/

/*
clima.getclima( 20.639999, -103.309998)
.then( console.log )
.catch( console.log );
*/

//argv.direccion
