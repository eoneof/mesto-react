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
            title={props.submitButtonText}
            onClick={props.onPopupClose}></button>
          <div className='form'>
            <h2 className='form__header'>{props.formTitle}</h2>
            <button
              className='button form__submit-button'
              form={props.formName}
              type='submit'
              name='submit-button'>
              {props.submitButtonText}
            </button>
          </div>
        </div>
        <div className='popup__backdrop'></div>
      </section>
    </>
  );
}
