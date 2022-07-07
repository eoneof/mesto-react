import React from 'react';

export default function Card(props) {
  const openImageView = () => {
    props.onCardThumbClick(props.cardData);
  };

  const openDeleteConfirmPopup = () => {
    props.onDeleteButtonClick();
  };

  return (
    <>
      <li
        key={props.key}
        className='cards-grid__item card'
        data-card-id={props.cardData._id}>
        <button
          className='button card__delete-button'
          type='button'
          name='delete-button'
          title='Удалить'
          onClick={openDeleteConfirmPopup}>
          Удалить
        </button>
        <div className='card__image-container'>
          <img
            className='card__image'
            src={props.cardData.link}
            alt={props.cardData.name}
            onClick={openImageView}
          />
        </div>
        <div className='card__label'>
          <h2 className='card__title'>{props.cardData.name}</h2>
          {/* FIXME change class names based on state */}
          <div className='card__like-container card__like-container_is-liked'>
            <button
              className='button card__like-button'
              type='button'
              name='like-button'
              title='Нравится!'></button>
            <span className='card__like-counter card__like-counter_visible'>
              {props.cardData.likes.length}
            </span>
          </div>
        </div>
      </li>
    </>
  );
}
