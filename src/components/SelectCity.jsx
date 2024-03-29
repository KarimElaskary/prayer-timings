import React from 'react'

const SelectCity = ({ onSubmit, city, setCity }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault()
    onSubmit(city)
  }

  const handleChange = (event) => {
    setCity(event.target.value)
  }

  return (
    <div className='mt-[100px] lg:mt-0'>
      <form onSubmit={handleFormSubmit}>
        <select value={city} onChange={handleChange}>
          <option value='Cairo'>القاهره</option>
          <option value='Alexandria'>الاسكندريه</option>
          <option value='Disouq'>دسوق</option>
        </select>
      </form>
    </div>
  )
}

export default SelectCity
