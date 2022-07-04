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
          <form noValidate id='form-edit' name='form-edit' className='form'>
            <h2 className='form__header'>{formTitle}</h2>
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
                  required
                />
                <span className='form__input-error-hint about-input-error'></span>
              </div>
            </fieldset>
            <button
              className='button form__submit-button'
              form='form-edit'
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

// <section className='popup popup_type_edit'>
//       <div className='popup__container'>
//         <button
//           className='button popup__close-button'
//           type='button'
//           name='close-button'
//           title='Закрыть'>
//           Закрыть
//         </button>
//         <form noValidate id='form-edit' name='form-edit' className='form'>
//           <h2 className='form__header'>Редактировать профиль</h2>
//           <fieldset className='form__fieldset'>
//             <div className='form__input-container'>
//               <input
//                 className='form__input'
//                 id='nameInput'
//                 name='name'
//                 type='text'
//                 minLength='2'
//                 maxLength='40'
//                 placeholder='Как вас зовут?'
//                 required
//               />
//               <span className='form__input-error-hint name-input-error'></span>
//             </div>
//             <div className='form__input-container'>
//               <input
//                 className='form__input'
//                 id='aboutInput'
//                 name='about'
//                 type='text'
//                 minLength='2'
//                 maxLength='200'
//                 placeholder='Напишите что-нибудь о себе'
//                 required
//               />
//               <span className='form__input-error-hint about-input-error'></span>
//             </div>
//           </fieldset>
//           <button
//             className='button form__submit-button'
//             form='form-edit'
//             type='submit'
//             name='submit-button'>
//             Сохранить
//           </button>
//         </form>
//       </div>
//       <div className='popup__backdrop'></div>
//     </section>

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
//             <div className='form__input-container'>
//               <input
//                 className='form__input'
//                 id='updateInput'
//                 name='avatar'
//                 type='url'
//                 placeholder='Ссылка на картинку'
//                 required
//               />
//               <span className='form__input-error-hint avatar-input-error'></span>
//             </div>
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

//     {/* <!-- ADD CARD --> */}
//     <section className='popup'>
//       <div className='popup__container'>
//         <button
//           className='button popup__close-button'
//           type='button'
//           name='close-button'
//           title='Закрыть'>
//           Закрыть
//         </button>
//         <form noValidate id='form-add' name='form-add' className='form'>
//           <h2 className='form__header'>Новое место</h2>
//           <fieldset className='form__fieldset'>
//             <div className='form__input-container'>
//               <input
//                 className='form__input'
//                 id='photoNameInput'
//                 name='name'
//                 type='text'
//                 minLength='2'
//                 maxLength='30'
//                 placeholder='Название'
//                 required
//               />
//               <span className='form__input-error-hint name-input-error'></span>
//             </div>
//             <div className='form__input-container'>
//               <input
//                 className='form__input'
//                 id='photoLinkInput'
//                 name='link'
//                 type='url'
//                 placeholder='Ссылка на картинку'
//                 required
//               />
//               <span className='form__input-error-hint link-input-error'></span>
//             </div>
//           </fieldset>
//           <button
//             className='button form__submit-button'
//             form='form-add'
//             type='submit'
//             name='submit-button'>
//             Создать
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
