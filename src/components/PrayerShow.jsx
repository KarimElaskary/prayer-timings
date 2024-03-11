import React from 'react'

const PrayerShow = ({ time, prayer }) => {
  return (
    <div className='flex flex-col gap-4 p-[80px] w-[200px] rounded-lg bg-green-400 items-center'>
      <h1>{prayer}</h1>
      <p>{time}</p>
    </div>
  )
}

export default PrayerShow
