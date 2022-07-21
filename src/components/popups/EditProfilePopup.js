import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import PopupWithForm from './PopupWithForm.js';

export default function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [values, setValues] = React.useState({ name: '', about: '' });

  function setInitialValues() {
    setValues(() => {
      return {
        name: currentUser.name,
        about: currentUser.about,
      };
    });
  }

  function handleChanges(evt) {
    // extract target input's attributes
    const { name, value } = evt.target;

    // set it's name as key and it's value as value
    setValues({
      ...values,
      [name]: value,
    });
  }

  function handleUserInfoSubmit(evt) {
    evt.preventDefault();
    props.onSubmitUser(values);
    props.onClose();
    setInitialValues();
  }

  function handleClose() {
    // TODO reset inputs
    props.onClose();
  }

  React.useEffect(() => {
    setInitialValues();
  }, [currentUser]);

  return (
    <PopupWithForm
      formTitle='Редактировать профиль'
      popupType='edit'
      submitButtonText='Сохранить'
      isOpen={props.isOpen}
      onClose={handleClose}
      onSubmit={handleUserInfoSubmit}>
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
            placeholder='Как вас зовут?'
            onChange={handleChanges}
            defaultValue={values.name}
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
            placeholder='Напишите что-нибудь о себе'
            onChange={handleChanges}
            defaultValue={values.about}
            required
          />
          <span className='form__input-error-hint link-input-error'></span>
        </div>
      </fieldset>
    </PopupWithForm>
  );
}