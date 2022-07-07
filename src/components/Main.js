import React from 'react';

import Api from '../utils/Api.js';
import * as utils from '../utils/utils.js';
import * as consts from '../utils/constants.js';

import avatarPlaceHolderImage from '../images/avatar-placeholder.svg';
export default function Main(props) {
  const api = new Api(consts.apiConfig);

  const [userName, setUserName] = React.useState('Имя Пользователя');
  const [userDescription, setUserDescription] = React.useState('Описание');
  const [userAvatar, setUserAvatar] = React.useState(avatarPlaceHolderImage);

  const [cards, setCards] = React.useState([]);

  function getAllData() {
    Promise.all([api.getUser(), api.getAllCards()])
      .then(([remoteUserData, remoteCardsData]) => {
        setUserName(remoteUserData.name);
        setUserDescription(remoteUserData.about);
        setUserAvatar(remoteUserData.avatar);
        setCards(remoteCardsData);
      })
      .catch((err) => {
        utils.requestErrorHandler(err);
      });
  }

  React.useEffect(() => {
    getAllData();
  }, []);

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
                onClick={props.onUpdateAvatar}></button>
              <img
                className='profile__photo'
                alt='Фотография пользователя.'
                src={userAvatar}
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
                    onClick={props.onEditProfile}></button>
                </div>
                <p className='profile__about'>{userDescription}</p>
              </div>
            </div>
          </div>
          <button
            className='button profile__add-button'
            type='button'
            name='add-button'
            title='Добавить фотографии'
            onClick={props.onAddCard}></button>
        </section>

        {/* <!-- PHOTOS --> */}
        <section className='photos' aria-label='Фотографии пользователя'>
          <ul className='cards-grid'>
            {cards.map((data) => {
              return React.cloneElement(props.children, {
                key: data._id,
                cardData: data,
              });
            })}
          </ul>
        </section>
      </main>
    </>
  );
}
