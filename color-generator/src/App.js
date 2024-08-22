import React, { useState } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#f15025').all(10))

  const handleSubmist = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setList(error)
    } catch (e) {
      setError(e)
    }
  }
  return (
    <>
      <section className='container'>
        <h3>
          color generator
        </h3>
        <form onSubmit={handleSubmist}>
          <input
            type='text'
            value={color}
            onChange={e => setColor(e.target.value)} 
            placeholder='#f15025'
            className={`${error ? 'error' : null}`}
          />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((e, i) => {
          return (
            <SingleColor 
              key={i}
              {...e}
              index={i}
              hexColor={e.hex}
            />
          )
        })}
      </section>
    </>
  )
}

export default App
