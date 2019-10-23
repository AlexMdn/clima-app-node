const axios = require('axios');

const getclima =  async (lat, lng) => {

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=37729799b299a969a3b1738a0bea751c&units=metric`);
    
    return resp.data.main.temp;
}

module.exports = {
    getclima
}