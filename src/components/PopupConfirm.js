import React from 'react';

export default function PopupConfirm(props) {
  const openedClassNameToggle = `${props.isOpen ? 'popup_opened' : ''}`;

  return (
    <>
      <section
        className={`popup popup_type_${props.popupType} ${openedClassNameToggle}`}>
        <div className='popup__container'>
          <button
            className='button popup__close-button'
            type='button'
            name='close-button'
            title='Закрыть'
            onClick={props.onPopupClose}>
            Закрыть
          </button>
          <form className='form'>
            <h2 className='form__header'>{props.formTitle}</h2>
            <button
              className='button form__submit-button'
              type='submit'
              name='submit-button'
              // onSubmit={ } // TODO submit
            >
              {props.submitButtonText}
            </button>
          </form>
        </div>
        <div className='popup__backdrop' onClick={props.onPopupClose}></div>
      </section>
    </>
  );
}
