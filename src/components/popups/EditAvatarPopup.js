import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import PopupWithForm from './PopupWithForm.js';

export default function EditAvatarPopup(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <PopupWithForm
      formTitle='Обновить аватар'
      popupType='update'
      submitButtonText='Сохранить'
      isOpen={props.isOpen}
      onClose={props.onClose}>
      <fieldset className='form__fieldset'>
        <div className='form__input-container'>
          <input
            className='form__input'
            id='updateInput'
            name='avatar'
            type='url'
            placeholder='Ссылка на картинку'
            required
          />
          <span className='form__input-error-hint avatar-input-error'></span>
        </div>
      </fieldset>
    </PopupWithForm>
  );
}
