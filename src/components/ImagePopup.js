import React from 'react';

export default function ImagePopup(props) {
  const cardHasData = () => {
    if ((props.selectedCard.name || props.selectedCard.link) !== '') {
      return true;
    } else {
      return false;
    }
  };

  const openedClassNameToggle = `${cardHasData() && props.isOpen ? 'popup_opened' : ''}`;

  return (
    <>
      <section className={`popup popup_type_${props.popupType} ${openedClassNameToggle}`}>
        <div className='popup__container'>
          <button
            className='button popup__close-button'
            type='button'
            name='close-button'
            title='Закрыть'
            onClick={props.closeAllPopups}>
            Закрыть
          </button>
          <figure className='preview'>
            <img
              className='preview__image'
              src={props.selectedCard.link}
              alt={props.selectedCard.name}
            />
            <figcaption className='preview__caption'>
              {props.selectedCard.name}
            </figcaption>
          </figure>
        </div>
        <div
          className='popup__backdrop popup__backdrop_place_preview'
          onClick={props.closeAllPopups}></div>
      </section>
    </>
  );
}
