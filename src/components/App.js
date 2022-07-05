import React from 'react';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Preloader from './Preloader.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import Card from './Card.js';

function App() {
  const [isAddPopupOpen, setIsAddPopoupOpen] = React.useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = React.useState(false);
  const [isUpdatePopupOpen, setIsUpdatePopupOpen] = React.useState(false);
  const [isPreviewPopupOpen, setIsPreviewPopupOpen] = React.useState(false);

  function handleCloseButton() {
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

  // FIXME put it somewhere
  // function handleEscClose(evt) {
  //   if (evt.key === 'Escape') {
  //     setIsPopoupOpen(false);
  //   }
  // }

  // function handleAddPlaceClick() {
  //   setIsPopoupOpen(true);
  // }

  return (
    <div className='page'>
      <Header />
      <Preloader />

      <Main
        onUpdateAvatar={handleUpdateAvatar}
        onEditProfile={handleEditProfile}
        onAddCard={handleAddCArd}
        onCardClick={handleCardPreview}
      />

      <Footer />
      {/* FIXME input containers shift backdrops as they are rendered the wrong node (where?) */}
      <PopupWithForm
        formTitle='Редактировать профиль' /* TODO get from external */
        formName='form-edit' /* TODO get from external */
        isOpen={isEditPopupOpen}
        buttonText='Сохранить'
        onPopupClose={handleCloseButton}
        /* onEscape={handleEscClose} */
      >
        <>
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
        </>
      </PopupWithForm>

      <PopupWithForm
        formTitle='Новое место'
        formName='form-add'
        buttonText='Сохранить'
        isOpen={isAddPopupOpen}
        onPopupClose={handleCloseButton}>
        <>
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
        </>
      </PopupWithForm>

      <PopupWithForm
        formTitle='Обновить аватар' /* TODO get from external */
        formName='form-update' /* TODO get from external */
        buttonText='Сохранить'
        isOpen={isUpdatePopupOpen}
        onPopupClose={handleCloseButton}>
        <>
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
        </>
      </PopupWithForm>
      <PopupWithImage />
      <Card />
    </div>
  );
}

export default App;
