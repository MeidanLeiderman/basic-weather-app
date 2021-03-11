import './App.css';
import { useState } from 'react'
import weatherService from './services/weatherService'
import WeatherDisplay from './modules/weather-display/weather'
import SearchForm from './modules/search-form/form'

function App() {

  const [keyword, setKeyword] = useState('')
  const [currentWeather, setCurrentWeather] = useState(null)
  const searchCity = async (keyword) => {
    const weather = await weatherService.fetchWeather(keyword)
    console.log(weather)
    setCurrentWeather(weather)
  }

  return (
    <div className="App">
      <h1>Basic Weather App</h1>
      <SearchForm keyword={keyword} onKeywordChange={setKeyword} onHandleSubmit={searchCity}/>
      
      {currentWeather && <WeatherDisplay weather={currentWeather}/> }
      {currentWeather===undefined && <p>Unable to find your request</p>}
    </div>
  );
}

export default App;
