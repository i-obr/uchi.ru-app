import React from 'react';
import './filter.css';

export default ({ onSortedClick }) => {
  return (
    <div className='filter'>
      <button className='btn  filter__btn' onClick = { onSortedClick } data-type='name'>
        Сортировать по имени
      </button>
      <button className='btn  filter__btn  filter__btn--reset' onClick = { onSortedClick } data-type='reset'>
        Сбросить
      </button>
    </div>
  )
}
