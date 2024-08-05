import React, { useState, useEffect } from 'react';
import './App.css';
import Background from './Background';
import Navbar from './Navbar';

function App() {
  const [starSign, setStarSign] = useState(localStorage.getItem('starSign') || null);
  const [showForm, setShowForm] = useState(!starSign);

  const handleSubmit = (event) => {
    event.preventDefault();;
    const month = event.target.month.value;
    const day = event.target.day.value;

    const calculatedStarSign = window.calculateStarSign(month, day);

    setStarSign(calculatedStarSign);
    localStorage.setItem('starSign', calculatedStarSign);
    setShowForm(false);
  };

  return (
    <div className="App">
      <Navbar />
      <Background>
        {showForm ? (
          <form onSubmit={handleSubmit} className='starSignForm'>
            <h1 id='input-text'>PLEASE ENTER YOUR DAY AND MONTH OF BIRTH</h1>
            <div className='input-item'>
              <label htmlFor='month'>Month:</label>
              <input type='text' id='month' name='month' />
            </div>

            <div className='input-item'>
              <label htmlFor='day'>Day:</label>
              <input type='number' id='day' name='day' />
            </div>

            <button type='submit'>Submit</button>
          </form>
        ) : (
          <h1 id='text'>
            WELCOME<br/>
            <span id='starsign'>{starSign}</span>
          </h1>
        )}
      </Background>
    </div>
  );
}

export default App;
