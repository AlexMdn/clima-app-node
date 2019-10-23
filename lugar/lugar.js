const axios = require('axios');

const getLugarLatLng  = async(dir) => {

    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,    
        headers: {'X-RapidAPI-Key': '31294500f2msh0ec4c2f0eecc4aep1c239djsn5a5946f27546'}
    });

    const resp = await instance.get();

    if( resp.data.Results.length === 0 ){
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return{
        direccion,
        lat,
        lng
    }

    /*
    instance.get()
    .then( resp => {
        console.log(resp.data.Results[0]);
    })
    .catch(err => {
        console.log('Error!!! ', err);
    })
    */
}

module.exports = {
    getLugarLatLng
}

