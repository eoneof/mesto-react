import React from 'react';

export default function Card() {
  return (
    <>
      <li
        className='cards-grid__item card'
        data-card-id=''
        data-owner-id=''
        data-created-at=''>
        <button
          className='button card__delete-button'
          type='button'
          name='delete-button'
          title='Удалить'></button>
        <div className='card__image-container'>
          <img className='card__image' />
        </div>
        <div className='card__label'>
          <h2 className='card__title'></h2>
          <div className='card__like-container'>
            <button
              type='button'
              className='button card__like-button'
              name='like-button'
              title='Нравится!'></button>
            <span className='card__like-counter'>0</span>
          </div>
        </div>
      </li>
    </>
  );
}
