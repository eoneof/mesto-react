import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import PopupWithForm from './PopupWithForm.js';

export default function PopupConfirm(props) {
  return (
    <PopupWithForm
      popupType='confirm'
      formTitle='Вы уверены?'
      submitButtonText='Да'
      isOpen={props.isOpen}
      onClose={props.onClose}></PopupWithForm>
  );
}
