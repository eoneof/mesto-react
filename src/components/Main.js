import React from 'react';

import Api from '../utils/Api.js';
import * as utils from '../utils/utils.js';
import * as consts from '../utils/constants.js';
import avatarPlaceHolderImage from '../images/avatar-placeholder.svg';
import { CurrentUserContext } from './contexts/CurrentUserContext.js';

export default function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  // store cards array from server
  const [cards, setCards] = React.useState([]);

  // hide everything but header until data is fetched
  const [cardDataIsLoaded, setCardDataIsLoaded] = React.useState(false);
  const hiddenClassNameToggle = `${!cardDataIsLoaded ? 'hidden' : ''}`;

  const api = new Api(consts.apiConfig);

  function getCadsData() {
    api
      .getAllCards()
      .then((remoteCardsData) => {
        setCards(remoteCardsData);
      })
      .then(() => {
        setCardDataIsLoaded(true);
      })
      .catch((err) => {
        utils.requestErrorHandler(err);
      });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((liker) => liker._id === currentUser._id);

    api.toggleCardLike(card._id, isLiked).then((newCard) => {
      setCards((state) =>
        state.map((item) => (item._id === card._id ? newCard : item)),
      );
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then((newCards) => {
      setCards((newCards) => newCards.filter((item) => item._id !== card._id));
    });
  }

  React.useEffect(() => {
    getCadsData();
  }, []);

  return (
    <>
      <main className='main'>
        {React.cloneElement(props.preloaderComponent, {
          dataIsLoaded: cardDataIsLoaded,
        })}

        {/* <!-- PROFILE --> */}
        <section
          className={`profile ${hiddenClassNameToggle}`}
          data-user-id=''
          data-user-cohort=''>
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
                src={
                  props.userDataIsLoaded
                    ? currentUser.avatar
                    : avatarPlaceHolderImage // TODO move to CSS bg image
                }
              />
            </div>
            <div className='profile__main'>
              <div className='profile__headings'>
                <div className='profile__header'>
                  <h1 className='profile__name'>{currentUser.name}</h1>
                  <button
                    className='button profile__edit-button'
                    type='button'
                    name='edit-button'
                    title='Редактировать профиль'
                    onClick={props.onEditProfile}></button>
                </div>
                <p className='profile__about'>{currentUser.about}</p>
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

        {/* <!-- CARDS WITH PHOTOS --> */}
        <section
          className={`photos ${hiddenClassNameToggle}`}
          aria-label='Фотографии пользователя'>
          <ul className='cards-grid'>
            {cards.map((card) => {
              // clone Card child from App
              return React.cloneElement(props.cardComponent, {
                key: card._id,
                cardData: card,
                onCardThumbClick: props.onCardThumbClick,
                // from App.js
                // onDeleteButtonClick: props.onDeleteButtonClick, // TODO confirmation popup
                onDeleteButtonClick: handleCardDelete,
                onCardLike: handleCardLike,
                dataIsLoaded: cardDataIsLoaded,
              });
            })}
          </ul>
        </section>
      </main>
    </>
  );
}
