import React from 'react';
import { CurrentUserContext } from './contexts/CurrentUserContext.js';

export default function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const hasLikes = props.cardData.likes.length > 0;
  const isLiked = props.cardData.likes.some(
    (liker) => liker._id === currentUser._id,
  );

  function openImageView() {
    props.onCardThumbClick(props.cardData);
  }

  // TODO confirmation popup
  // function openDeleteConfirmPopup() {
  //   props.onDeleteButtonClick();
  // }

  function handleCardDelete() {
    props.onDeleteButtonClick(props.cardData);
  }

  function handleCardLike() {
    props.onCardLike(props.cardData);
  }

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
          // onClick={openDeleteConfirmPopup}> // TODO confirmation popup
          onClick={handleCardDelete}>
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
          <div
            className={`card__like-container ${
              hasLikes && 'card__like-container_is-liked'
            }`}>
            <button
              className={`button card__like-button ${
                isLiked && 'card__like-button_active'
              }`}
              type='button'
              name='like-button'
              title='Нравится!'
              onClick={handleCardLike}></button>
            <span
              className={`card__like-counter ${
                hasLikes && 'card__like-counter_visible'
              }`}>
              {props.cardData.likes.length}
            </span>
          </div>
        </div>
      </li>
    </>
  );
}
