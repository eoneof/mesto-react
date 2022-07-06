import React from 'react';

// import * as consts from '../utils/constants.js';

import avatarPlaceHolderImage from '../images/avatar-placeholder.svg';
import PopupWithForm from './PopupWithForm';
const userName = 'Имя Пользователя';
const userAbout = 'Описание';

function Main({ onUpdateAvatar, onEditProfile, onAddCard, onCardClick }) {
  return (
    <>
      {/* <!-- TODO add `hidden` class (or should I?)--> */}
      <main className='main'>
        {/* <!-- PROFILE --> */}
        <section className='profile' data-user-id='' data-user-cohort=''>
          <div className='profile__container'>
            <div
              className='profile__photo-container'
              type='button'
              name='update-profile-photo-button'
              title='Изменить фотографию профиля'>
              <button
                className='profile__photo-overlay'
                onClick={onUpdateAvatar}></button>
              <img
                className='profile__photo'
                alt='Фотография пользователя.'
                src={avatarPlaceHolderImage}
              />
            </div>
            <div className='profile__main'>
              <div className='profile__headings'>
                <div className='profile__header'>
                  <h1 className='profile__name'>{userName}</h1>
                  <button
                    className='button profile__edit-button'
                    type='button'
                    name='edit-button'
                    title='Редактировать профиль'
                    onClick={onEditProfile}></button>
                </div>
                <p className='profile__about'>{userAbout}</p>
              </div>
            </div>
          </div>
          <button
            className='button profile__add-button'
            type='button'
            name='add-button'
            title='Добавить фотографии'
            onClick={onAddCard}></button>
        </section>

        {/* <!-- PHOTOS --> */}
        <section className='photos' aria-label='Фотографии пользователя'>
          <ul className='cards-grid'></ul>
        </section>
      </main>
    </>
  );
}

export default Main;
