import React from 'react';
import PopupWithForm from './PopupWithForm.js';

export default function PopupConfirm(props) {
  console.log(props.selectedCard);
  function handleSubmit(evt) {
    evt.preventDefault();
    props.onSubmit(props.selectedCard._id);
  }

  return (
    <PopupWithForm
      popupType='confirm'
      formTitle='Вы уверены?'
      submitButtonText='Да'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    />
  );
}
