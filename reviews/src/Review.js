import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index, setIndex] = useState(0)
  const {name, job, image, text} = people[index]

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return newIndex > people.length - 1 ? 0 : newIndex
    })
  }

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return newIndex < 0 ? people.length - 1 : newIndex
    })
  }

  const randomPerson = () => {
    let newIndex = Math.floor(Math.random() * people.length - 1)
    if (newIndex === index) {
      newIndex = nextPerson()
    }
    setIndex(newIndex)
  }

  return <article className='review'>
    <div className='img-container'>
      <img src={image} alt={name} className='person-img' />
      <span className='quote-icon'>
        <FaQuoteRight />
      </span>
    </div>
    <h4 className='author'>
      {name}
    </h4>
    <p className='job'>
      {job}
    </p>
    <p className='info'>
      {text}
    </p>
    <div className='btn-container'>
      <button className='prev-btn' onClick={prevPerson}>
        <FaChevronLeft />
      </button>
      <button className='next-btn' onClick={nextPerson}>
        <FaChevronRight />
      </button>
      <button className='random-btn' onClick={randomPerson}>
        suprise me
      </button>
    </div>
  </article>;
};

export default Review;
