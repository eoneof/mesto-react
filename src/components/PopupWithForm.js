import React from 'react';

// TODO remove redundant

function PopupWithForm({
  formTitle,
  formName,
  children,
  buttonText,
  isOpen,
  onPopupClose,
}) {
  return (
    <>
      <section className={`popup ${isOpen ? 'popup_opened' : ''}`}>
        {children}
        <div className='popup__container'>
          <button
            className='button popup__close-button'
            type='button'
            name='close-button'
            title={buttonText}
            onClick={onPopupClose}>
            {buttonText}
          </button>
          <form noValidate id={formName} name={formName} className='form'>
            <h2 className='form__header'>{formTitle}</h2>
            <fieldset className='form__fieldset'>{children}</fieldset>
            <button
              className='button form__submit-button'
              form={formName}
              type='submit'
              name='submit-button'>
              Сохранить
            </button>
          </form>
        </div>
        <div className='popup__backdrop' onClick={onPopupClose}></div>
      </section>
    </>
  );
}

export default PopupWithForm;

//     {/* <!-- UPDATE PROFILE PHOTO --> */}
//     <section className='popup popup_type_update'>
//       <div className='popup__container'>
//         <button
//           className='button popup__close-button'
//           type='button'
//           name='close-button'
//           title='Закрыть'>
//           Закрыть
//         </button>
//         <form noValidate id='form-update' name='form-update' className='form'>
//           <h2 className='form__header'>Обновить аватар</h2>
//           <fieldset className='form__fieldset'>
//           </fieldset>
//           <button
//             className='button form__submit-button'
//             form='form-update'
//             type='submit'
//             name='submit-button'>
//             Сохранить
//           </button>
//         </form>
//       </div>
//       <div className='popup__backdrop'></div>
//     </section>

//     {/* <!-- CONFIRM POPUP --> */}
//     <section className='popup popup_type_confirm'>
//       <div className='popup__container'>
//         <button
//           className='button popup__close-button'
//           type='button'
//           name='close-button'
//           title='Закрыть'>
//           Закрыть
//         </button>
//         <div className='form'>
//           <h2 className='form__header'>Вы уверены?</h2>
//           <button className='button form__submit-button' name='submit-button'>
//             Да
//           </button>
//         </div>
//       </div>
//       <div className='popup__backdrop'></div>
//     </section>
