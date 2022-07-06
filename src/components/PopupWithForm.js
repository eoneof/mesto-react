import React from 'react';

// TODO remove redundant

function PopupWithForm(props) {
  // retain css transition effect
  const [openedClassName, setOpenedClassName] = React.useState('');

  // on mount / dismount
  React.useEffect(() => {
    if (props.isOpen) {
      setOpenedClassName('popup_opened');
    }

    // FIXME closing transition is missing
    return () => {
      setOpenedClassName('');
    };
  }, [props.isOpen]);

  // keep it closed
  if (!props.isOpen) {
    return null;
  }

  return (
    <>
      <section className={`popup ${openedClassName}`}>
        <div className='popup__container'>
          <button
            className='button popup__close-button'
            type='button'
            name='close-button'
            title={props.buttonText}
            onClick={props.onPopupClose}>
            {props.buttonText}
          </button>
          <form noValidate id={props.formName} name={props.formName} className='form'>
            <h2 className='form__header'>{props.formTitle}</h2>
            <fieldset className='form__fieldset'>{props.children}</fieldset>
            <button
              className='button form__submit-button'
              form={props.formName}
              type='submit'
              name='submit-button'>
              Сохранить
            </button>
          </form>
        </div>
        <div className='popup__backdrop' onClick={props.onPopupClose}></div>
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
