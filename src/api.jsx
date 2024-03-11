import axios from 'axios'

const getTime = async (city) => {
  const response = await axios.get(
    'http://api.aladhan.com/v1/timingsByCity?/',
    {
      params: {
        country: 'Egypt',
        method: 5,
        city: city,
      },
    }
  )
  return response.data.data.timings
}

export default getTime
