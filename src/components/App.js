import React from 'react';

import * as utils from '../utils/utils.js';
import * as consts from '../utils/constants.js';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Preloader from './Preloader.js';
import EditAvatarPopup from './popups/EditAvatarPopup.js';
import EditProfilePopup from './popups/EditProfilePopup.js';
import AddPlacePopup from './popups/AddPlacePopup.js';
import ImagePopup from './popups/ImagePopup.js';
import PopupConfirm from './popups/PopupConfirm.js';
import Card from './Card.js';
import Api from '../utils/Api.js';
import { CurrentUserContext } from './contexts/CurrentUserContext.js';

export default function App() {
  // hide everything but header until data is fetched
  const [allDataIsLoaded, setAllDataIsLoaded] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  const [isAddPopupOpen, setIsAddPopoupOpen] = React.useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = React.useState(false);
  const [isUpdatePopupOpen, setIsUpdatePopupOpen] = React.useState(false);
  const [isImageViewPopupOpen, setIsImageViewPopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);

  // pass to ImagePopup
  const [selectedCard, setSelectedCard] = React.useState({
    name: '',
    link: '',
  });

  const api = new Api(consts.apiConfig);

  function getAllData() {
    Promise.all([api.getUserInfo(), api.getCardsList()])
      .then(([remoteUserData, remoteCardsData]) => {
        setCurrentUser(remoteUserData);
        setCards(remoteCardsData);
      })
      .then(() => {
        setAllDataIsLoaded(true);
      })
      .catch((err) => {
        utils.requestErrorHandler(err);
      });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((liker) => liker._id === currentUser._id);

    api.toggleCardLike(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((item) => (item._id === card._id ? newCard : item)));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then((newCards) => {
      setCards((newCards) => newCards.filter((item) => item._id !== card._id));
    });
  }

  function onSubmitUser(values) {
    api
      .setUserInfo(values)
      .then((remoteUserData) => {
        setCurrentUser(remoteUserData);
      })
      .catch((err) => {
        utils.requestErrorHandler(err);
      });
  }

  function onSubmitAvatar(avatar) {
    api
      .setAvatar(avatar)
      .then((remoteUserData) => {
        setCurrentUser(remoteUserData);
      })
      .catch((err) => {
        utils.requestErrorHandler(err);
      });
  }

  React.useEffect(() => {
    getAllData();
  }, []);

  function closeAllPopups() {
    setIsUpdatePopupOpen(false);
    setIsEditPopupOpen(false);
    setIsAddPopoupOpen(false);
    setIsImageViewPopupOpen(false);
    setIsConfirmPopupOpen(false);

    setSelectedCard({ name: '', link: '' });
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
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Header />
        <Main
          cardComponent={<Card />}
          cards={cards}
          allDataIsLoaded={allDataIsLoaded}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          preloaderComponent={<Preloader />}
          onClick={openUpdateAvatarPopup}
          onEditProfile={openEditProfilePopup}
          onAddCard={openNewCardPopup}
          onCardThumbClick={openImageViewPopup}
          // onDeleteButtonClick={openConfirmDeletePopup} // TODO confirmation popup
        />
        <Footer />
        <EditAvatarPopup
          isOpen={isUpdatePopupOpen}
          onClose={closeAllPopups}
          onSubmitAvatar={onSubmitAvatar}
        />
        <EditProfilePopup
          isOpen={isEditPopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={onSubmitUser}
        />
        <AddPlacePopup isOpen={isAddPopupOpen} onClose={closeAllPopups} />
        <PopupConfirm isOpen={isConfirmPopupOpen} onClose={closeAllPopups} />
        <ImagePopup
          selectedCard={selectedCard}
          isOpen={isImageViewPopupOpen}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}
