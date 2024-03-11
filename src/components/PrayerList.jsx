import React from 'react'
import PrayerShow from './PrayerShow'

const PrayerList = ({ time }) => {
  return (
    <div className='flex flex-col lg:flex-row-reverse gap-5 items-center mt-[200px]'>
      <PrayerShow prayer='الفجر' time={time.Fajr} />
      <PrayerShow prayer='الشروق' time={time.Sunrise} />
      <PrayerShow prayer='الظهر' time={time.Dhuhr} />
      <PrayerShow prayer='العصر' time={time.Asr} />
      <PrayerShow prayer='المغرب' time={time.Maghrib} />
      <PrayerShow prayer='العشاء' time={time.Isha} />
    </div>
  )
}

export default PrayerList
