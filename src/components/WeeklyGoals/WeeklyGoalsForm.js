import React, { useState, useEffect, useRef } from 'react';
import './WeeklyGoals.scss';

function WeeklyGoalsForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='goal-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='goal-input edit'
          />
          <button onClick={handleSubmit} className='goal-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a goal'
            value={input}
            onChange={handleChange}
            name='text'
            className='goal-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='goal-button'>
            Add Goal
          </button>
        </>
      )}
    </form>
  );
}

export default WeeklyGoalsForm;