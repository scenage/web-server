const request = require('postman-request')

const forecast =  (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0039a8b003fbedc35ef0c3bb2c0fd837&query=' + lat + ',' + long + '&units=f'
    request({ url, json: true}, (error, { body } = {}) => {
        if (error) {
            callback ('Unable to connect to the location services!', undefined)
        } else if (body.success === false) {
            callback ('Unable to find location. Try another search!', undefined)
        } else {
            callback (undefined, {
                temperature: body.current.temperature,
                weather: body.current.weather_descriptions,
                location: body.location.name
            })
        }
    })
}

module.exports = forecast