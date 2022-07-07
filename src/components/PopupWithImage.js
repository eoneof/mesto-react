import React from 'react';

export default function PopupWithImage(props) {
  const openedClassNameToggle = `${props.isOpen ? 'popup_opened' : ''}`;

  return (
    <>
      <section
        className={`popup popup_type_${props.popupType} ${openedClassNameToggle}`}
        aria-label='Превью фотографии'>
        <div className='popup__container'>
          <button
            className='button popup__close-button'
            type='button'
            name='close-button'
            title='Закрыть'
            onClick={props.onPopupClose}>
            Закрыть
          </button>
          <figure className='preview'>
            <img className='preview__image' src={props.src} alt={props.title} />
            <figcaption className='preview__caption'>
              {props.caption}
            </figcaption>
          </figure>
        </div>
        <div
          className='popup__backdrop popup__backdrop_place_preview'
          onClick={props.onPopupClose}></div>
      </section>
    </>
  );
}
