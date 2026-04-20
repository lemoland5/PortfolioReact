import { useState, useEffect } from 'react'

const getWeatherIcon = (weatherCode) => {
  // WMO Weather interpretation codes
  if (weatherCode === 0 || weatherCode === 1) return '☀️'
  if (weatherCode === 2) return '⛅'
  if (weatherCode === 3) return '☁️'
  if (weatherCode === 45 || weatherCode === 48) return '🌫️'
  if (weatherCode === 51 || weatherCode === 53 || weatherCode === 55) return '🌧️'
  if (weatherCode === 61 || weatherCode === 63 || weatherCode === 65) return '🌧️'
  if (weatherCode === 71 || weatherCode === 73 || weatherCode === 75) return '❄️'
  if (weatherCode === 80 || weatherCode === 81 || weatherCode === 82) return '🌧️'
  if (weatherCode === 85 || weatherCode === 86) return '❄️'
  if (weatherCode === 95 || weatherCode === 96 || weatherCode === 99) return '⛈️'
  return '🌡️'
}

export default function Header() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState({ lat: 51.5074, lon: -0.1278, name: 'London' }) // Default to London

  useEffect(() => {
    const fetchWeather = async () => {
      try {

        // Try to get user's location
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords
              console.log("object");
              console.log(position.coords);
              try {
                // Get location name from coordinates (optional, using default)
                const response = await fetch(
                  `https://api.open-meteo.com/v1/weather?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,relative_humidity_2m,weather_description&timezone=auto`
                )
                const data = await response.json()
                setWeather({
                  temperature: data.current.temperature_2m,
                  weatherCode: data.current.weather_code,
                  humidity: data.current.relative_humidity_2m,
                  description: data.current.weather_description,
                })
                setLoading(false)
              } catch (err) {
                console.error('Weather fetch error:', err)
                setLoading(false)
              }
            },
            () => {
              // Fallback to default location
              fetchDefaultLocationWeather()
            }
          )
        } else {
          fetchDefaultLocationWeather()
        }
      } catch (err) {
        console.error('Error:', err)
        setLoading(false)
      }
    }

    const fetchDefaultLocationWeather = async () => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/weather?latitude=${location.lat}&longitude=${location.lon}&current=temperature_2m,weather_code,relative_humidity_2m,weather_description&timezone=auto`
        )
        const data = await response.json()
        setWeather({
          temperature: data.current.temperature_2m,
          weatherCode: data.current.weather_code,
          humidity: data.current.relative_humidity_2m,
          description: data.current.weather_description,
        })
        setLoading(false)
      } catch (err) {
        console.error('Weather fetch error:', err)
        setLoading(false)
      }
    }

    fetchWeather()
    // Refresh weather every 10 minutes
    const interval = setInterval(fetchWeather, 600000)
    return () => clearInterval(interval)
  }, [location])

  return (
    <header className="header">
      <div className="header-weather">
        {!loading && weather && (
          <div className="weather-widget">
            <span className="weather-icon">{getWeatherIcon(weather.weatherCode)}</span>
            <div className="weather-info">
              <span className="weather-temp">{Math.round(weather.temperature)}°C</span>
              <span className="weather-desc">{weather.description}</span>
            </div>
          </div>
        )}
      </div>
      <div className="header-content">
        <h1 className="logo">Portfolio</h1>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

