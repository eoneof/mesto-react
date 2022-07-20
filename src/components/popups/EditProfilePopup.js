import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import PopupWithForm from './PopupWithForm.js';

export default function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
      <PopupWithForm
        formTitle='Редактировать профиль'
        popupType='edit'
        submitButtonText='Сохранить'
        isOpen={props.isOpen}
        closeAllPopups={props.closeAllPopups}>
        {/* children */}
        <fieldset className='form__fieldset'>
          <div className='form__input-container'>
            <input
              className='form__input'
              id='photoNameInput'
              name='name'
              type='text'
              minLength='2'
              maxLength='30'
              placeholder='Как вас зовут?'
              required
            />
            <span className='form__input-error-hint name-input-error'></span>
          </div>
          <div className='form__input-container'>
            <input
              className='form__input'
              id='photoLinkInput'
              name='link'
              type='url'
              placeholder='Напишите что-нибудь о себе'
              required
            />
            <span className='form__input-error-hint link-input-error'></span>
          </div>
        </fieldset>
      </PopupWithForm>
  );
}
