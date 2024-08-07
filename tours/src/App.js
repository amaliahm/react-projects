import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import data from './data'

function App() {

  const [tours, setTours] = useState(data)
  console.log(tours)

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  if (tours.length === 0) {
    return <main>
      <div className='title'>
        <h2>no tours left</h2>
        <button onClick={() => setTours(data)} className='btn'>refresh</button>
      </div>
    </main>
  }

  return <main>
    <Tours tours={tours} removeTour={removeTour} />
  </main>
}

export default App
