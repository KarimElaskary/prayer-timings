import React, { useState, useEffect } from 'react'
import PrayerList from './components/PrayerList'
import SelectCity from './components/SelectCity'
import getTime from './api'

const App = () => {
  const [city, setCity] = useState('Cairo')
  const [time, setTime] = useState({})

  const handleSubmit = async (city) => {
    const result = await getTime(city)
    setTime(result)
  }

  const handleChangeCity = (city) => {
    setCity(city)
  }

  useEffect(() => {
    handleSubmit(city)
  }, [city])

  return (
    <div className='flex flex-col items-center gap-[200px]'>
      <PrayerList time={time} />
      <SelectCity
        onSubmit={handleSubmit}
        city={city}
        setCity={handleChangeCity}
      />
    </div>
  )
}

export default App
