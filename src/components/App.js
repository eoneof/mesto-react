import React from 'react';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Preloader from './Preloader.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import Card from './Card.js';
import PopupConfirm from './PopupConfirm.js';

function App() {
  const [isAddPopupOpen, setIsAddPopoupOpen] = React.useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = React.useState(false);
  const [isUpdatePopupOpen, setIsUpdatePopupOpen] = React.useState(false);
  const [isPreviewPopupOpen, setIsPreviewPopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);

  function closeAllPopups() {
    setIsUpdatePopupOpen(false);
    setIsEditPopupOpen(false);
    setIsAddPopoupOpen(false);
    setIsPreviewPopupOpen(false);
  }

  function handleUpdateAvatar() {
    setIsUpdatePopupOpen(true);
  }

  function handleEditProfile() {
    setIsEditPopupOpen(true);
  }

  function handleAddCArd() {
    setIsAddPopoupOpen(true);
  }

  function handleCardPreview() {
    setIsPreviewPopupOpen(true);
  }

  // TODO move to card
  // function handleConfirmDelete() {
  //   setIsConfirmPopupOpen(true);
  // }

  // FIXME put it somewhere
  // function handleEscClose(evt) {
  //   if (evt.key === 'Escape') {
  //     setIsPopoupOpen(false);
  //   }
  // }

  return (
    <div className='page'>
      <Header />
      <Preloader />
      <Main
        onUpdateAvatar={handleUpdateAvatar}
        onEditProfile={handleEditProfile}
        onAddCard={handleAddCArd}
        onCardClick={handleCardPreview}>
        <Card />
      </Main>
      <Footer />
      <PopupWithForm
        formTitle='Редактировать профиль'
        formName='edit'
        isOpen={isEditPopupOpen}
        submitButtonText='Сохранить'
        onPopupClose={closeAllPopups}
        /* onEscape={handleEscClose} */
      >
        <>
          <fieldset className='form__fieldset'>
            <div className='form__input-container'>
              <input
                className='form__input'
                id='photoNameInput'
                name='name'
                type='text'
                minLength='2'
                maxLength='30'
                placeholder='Название'
                required
              />
              <span className='form__input-error-hint name-input-error'></span>
            </div>
            <div className='form__input-container'>
              <input
                className='form__input'
                id='photoLinkInput'
                name='link'
                type='url'
                placeholder='Ссылка на картинку'
                required
              />
              <span className='form__input-error-hint link-input-error'></span>
            </div>
          </fieldset>
        </>
      </PopupWithForm>

      <PopupWithForm
        formTitle='Новое место'
        formName='add'
        submitButtonText='Сохранить'
        isOpen={isAddPopupOpen}
        onPopupClose={closeAllPopups}>
        <>
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
        </>
      </PopupWithForm>

      <PopupWithForm
        formTitle='Обновить аватар'
        formName='update'
        submitButtonText='Сохранить'
        isOpen={isUpdatePopupOpen}
        onPopupClose={closeAllPopups}>
        <>
          <fieldset className='form__fieldset'>
            <div className='form__input-container'>
              <input
                className='form__input'
                id='updateInput'
                name='avatar'
                type='url'
                placeholder='Ссылка на картинку'
                required
              />
              <span className='form__input-error-hint avatar-input-error'></span>
            </div>
          </fieldset>
        </>
      </PopupWithForm>

      <PopupConfirm
        formTitle='Вы уверены?'
        submitButtonText='Да'
        isOpen={isConfirmPopupOpen}
        onPopupClose={closeAllPopups}
      />

      <PopupWithImage
        isOpen={isPreviewPopupOpen}
        onPopupClose={closeAllPopups}
        caption={'Caption'}
        src={'https://example.com/image.jpg'}
      />
    </div>
  );
}

export default App;
