import React from 'react';

export default function PopupWithForm(props) {
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
            onClick={props.closeAllPopups}>
            Закрыть
          </button>
          <form
            noValidate
            className='form'
            id={props.popupType}
            name={props.popupType}>
            <h2 className='form__header'>{props.formTitle}</h2>
            {props.children}
            <button
              className='button form__submit-button'
              type='submit'
              name='submit-button'
              form={props.popupType}
              // onSubmit={ } // TODO submit
            >
              {props.submitButtonText}
            </button>
          </form>
        </div>
        <div className='popup__backdrop' onClick={props.closeAllPopups}></div>
      </section>
    </>
  );
}
