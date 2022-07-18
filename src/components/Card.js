import React from 'react';
import { CurrentUserContext } from './contexts/CurrentUserContext.js';


export default function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

    const [hasLikes, setHasLikes] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);

  function openImageView() {
    props.onCardThumbClick(props.cardData);
  }

  function openDeleteConfirmPopup() {
    props.onDeleteButtonClick();
  }

  function checkHasLikes() {
    if (props.cardData.likes.length > 0) {
      setHasLikes(true);
    }
  }

  function checkIsLiked() {
    if (props.cardData.likes.some((liker) => liker._id === currentUser._id)) {
      setIsLiked(true);
    }
  }

  React.useEffect(() => {
    checkHasLikes();
    checkIsLiked();
  }, []);

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
              title='Нравится!'></button>
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
