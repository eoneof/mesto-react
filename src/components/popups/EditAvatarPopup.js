import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import PopupWithForm from './PopupWithForm.js';

export default function EditAvatarPopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [avatar, setAvatar] = React.useState({ avatar: '' });

  function updateAvatar() {
    setAvatar({ avatar: currentUser.avatar });
  }

  function handleChange(evt) {
    setAvatar({ avatar: evt.target.value });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onSubmitAvatar(avatar);
    props.onClose();
    updateAvatar();
  }

  function handleClose() {
    // TODO reset inputs
    props.onClose();
  }

  React.useEffect(() => {
    updateAvatar();
  }, [currentUser]);

  return (
    <PopupWithForm
      formTitle='Обновить аватар'
      popupType='update'
      submitButtonText='Сохранить'
      isOpen={props.isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}>
      <fieldset className='form__fieldset'>
        <div className='form__input-container'>
          <input
            className='form__input'
            id='updateInput'
            name='avatar'
            type='url'
            placeholder='Ссылка на картинку'
            onChange={handleChange}
            required
          />
          <span className='form__input-error-hint avatar-input-error'></span>
        </div>
      </fieldset>
    </PopupWithForm>
  );
}
