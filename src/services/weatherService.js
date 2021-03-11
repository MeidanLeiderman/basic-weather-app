const BASE_API_URL = 'https://www.metaweather.com/api/location';
const CORS_URL = 'http://ml-cors-anywhere.herokuapp.com';


async function fetchWeather(keyword) {

    try {
        // get location id by keyword search
        const locationId = await _getLocationId(keyword)
        // api request by location id to get weather data object
        const weather = await _getWeatherByLocationId(locationId)
        return weather
    } catch (err) {
        console.log('unable to reach meta weather api', err)
    }

}

async function _getWeatherByLocationId(locationId) {
    const response = await fetch(`${CORS_URL}/${BASE_API_URL}/${locationId}`)
    const result = await response.json()
    return result
}

async function _getLocationId(keyword) {
    const response = await fetch(`${CORS_URL}/${BASE_API_URL}/search/?query=${keyword}`)
    const location = await response.json()
    return location[0].woeid
}


export default {
    fetchWeather
}