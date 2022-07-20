import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import PopupWithForm from './PopupWithForm.js';

export default function AddPlacePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <PopupWithForm
      formTitle='Новое место'
      popupType='add'
      submitButtonText='Сохранить'
      isOpen={props.isOpen}
      closeAllPopups={props.closeAllPopups}>
      {/* children */}
      <fieldset className='form__fieldset'>
        <div className='form__input-container'>
          <input
            className='form__input'
            id='nameInput'
            name='name'
            type='text'
            minLength='2'
            maxLength='40'
            placeholder='Название'
            required
          />
          <span className='form__input-error-hint name-input-error'></span>
        </div>
        <div className='form__input-container'>
          <input
            className='form__input'
            id='aboutInput'
            name='about'
            type='text'
            minLength='2'
            maxLength='200'
            placeholder='Ссылка на картинку'
            required
          />
          <span className='form__input-error-hint about-input-error'></span>
        </div>
      </fieldset>
    </PopupWithForm>
  );
}
