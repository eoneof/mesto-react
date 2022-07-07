import React from 'react';

export default function PopupWithForm(props) {
  const openedClassNameToggle = `${props.isOpen && 'popup_opened'}`;

  return (
    <>
      <section
        className={`popup popup_type_${props.formName} ${openedClassNameToggle}`}>
        <div className='popup__container'>
          <button
            className='button popup__close-button'
            type='button'
            name='close-button'
            title='Закрыть'
            onClick={props.onPopupClose}>
            Закрыть
          </button>
          <form
            noValidate
            id={props.formName}
            name={props.formName}
            className='form'>
            <h2 className='form__header'>{props.formTitle}</h2>
            {props.children}
            <button
              className='button form__submit-button'
              form={props.formName}
              type='submit'
              name='submit-button'>
              {props.submitButtonText}
            </button>
          </form>
        </div>
        <div className='popup__backdrop' onClick={props.onPopupClose}></div>
      </section>
    </>
  );
}
