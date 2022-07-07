import React from 'react';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Preloader from './Preloader.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import Card from './Card.js';
import PopupConfirm from './PopupConfirm.js';

export default function App() {
  const [isAddPopupOpen, setIsAddPopoupOpen] = React.useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = React.useState(false);
  const [isUpdatePopupOpen, setIsUpdatePopupOpen] = React.useState(false);
  const [isImageViewPopupOpen, setIsImageViewPopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState('');

  function closeAllPopups() {
    setIsUpdatePopupOpen(false);
    setIsEditPopupOpen(false);
    setIsAddPopoupOpen(false);
    setIsImageViewPopupOpen(false);
    setIsConfirmPopupOpen(false);

    setSelectedCard('');
  }

  function openUpdateAvatarPopup() {
    setIsUpdatePopupOpen(true);
  }

  function openEditProfilePopup() {
    setIsEditPopupOpen(true);
  }

  function openNewCardPopup() {
    setIsAddPopoupOpen(true);
  }

  function openConfirmDeletePopup() {
    setIsConfirmPopupOpen(true);
  }

  function openImageViewPopup(cardData) {
    setIsImageViewPopupOpen(true);
    setSelectedCard(cardData);
  }

  return (
    <div className='page'>
      <Header />
      <Main
        cardComponent={<Card />}
        preloaderComponent={<Preloader />}
        onUpdateAvatar={openUpdateAvatarPopup}
        onEditProfile={openEditProfilePopup}
        onAddCard={openNewCardPopup}
        onCardThumbClick={openImageViewPopup}
        onDeleteButtonClick={openConfirmDeletePopup}
      />

      <Footer />

      {/* EDIT */}
      <PopupWithForm
        formTitle='Редактировать профиль'
        popupType='edit'
        isOpen={isEditPopupOpen}
        submitButtonText='Сохранить'
        closeAllPopups={closeAllPopups}>
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
                placeholder='Как вас зовут?'
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
                placeholder='Напишите что-нибудь о себе'
                required
              />
              <span className='form__input-error-hint link-input-error'></span>
            </div>
          </fieldset>
        </>
      </PopupWithForm>

      {/* ADD */}
      <PopupWithForm
        formTitle='Новое место'
        popupType='add'
        submitButtonText='Сохранить'
        isOpen={isAddPopupOpen}
        closeAllPopups={closeAllPopups}>
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
                placeholder='Название'
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
                placeholder='Ссылка на картинку'
                required
              />
              <span className='form__input-error-hint about-input-error'></span>
            </div>
          </fieldset>
        </>
      </PopupWithForm>

      {/* UPDATE */}
      <PopupWithForm
        formTitle='Обновить аватар'
        popupType='update'
        submitButtonText='Сохранить'
        isOpen={isUpdatePopupOpen}
        closeAllPopups={closeAllPopups}>
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

      {/* CONFIRM */}
      <PopupConfirm
        popupType='confirm'
        formTitle='Вы уверены?'
        submitButtonText='Да'
        isOpen={isConfirmPopupOpen}
        closeAllPopups={closeAllPopups}
      />

      {/* IMAGE VIEW */}
      <ImagePopup
        popupType='view'
        selectedCard={selectedCard}
        isOpen={isImageViewPopupOpen}
        closeAllPopups={closeAllPopups}
      />
    </div>
  );
}
