import './weather.css'

const weatherDisplay = ({weather}) => {
    return (
        <div className="weather-display">
            <div className="location-container">
                <span className="location">{weather.title}, </span>
                <span className="location-parent">{weather.parent.title}</span>
            </div>
            <span className="weather">{weather.consolidated_weather[0].weather_state_name}</span>
        </div>
    )
}

export default weatherDisplay