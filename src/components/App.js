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
  const [currentUser, setCurrentUser] = React.useState({});
  // hide everything but header until data is fetched
  // TODO pass to Preloader.js
  // TODO rewrite as context
  const [userDataIsLoaded, setUserDataIsLoaded] = React.useState(false);

  const [isAddPopupOpen, setIsAddPopoupOpen] = React.useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = React.useState(false);
  const [isUpdatePopupOpen, setIsUpdatePopupOpen] = React.useState(false);
  const [isImageViewPopupOpen, setIsImageViewPopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({
    name: '',
    link: '',
  });

  const api = new Api(consts.apiConfig);

  function getUserData() {
    api
      .getUserInfo()
      .then((remoteUserData) => {
        setCurrentUser(remoteUserData);
      })
      .then(() => {
        setUserDataIsLoaded(true);
      })
      .catch((err) => {
        utils.requestErrorHandler(err);
      });
  }

  function onUpdateUser(values) {
    console.log('👉values:', values);
    api
      .setUserInfo(values)
      .then((remoteUserData) => {
        setCurrentUser(remoteUserData);
      })
      .catch((err) => {
        utils.requestErrorHandler(err);
      });
  }

  React.useEffect(() => {
    getUserData();
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
          preloaderComponent={<Preloader />}
          userDataIsLoaded={userDataIsLoaded}
          onUpdateAvatar={openUpdateAvatarPopup}
          onEditProfile={openEditProfilePopup}
          onAddCard={openNewCardPopup}
          onCardThumbClick={openImageViewPopup}
          // onDeleteButtonClick={openConfirmDeletePopup} // TODO confirmation popup
        />
        <Footer />
        <EditAvatarPopup isOpen={isUpdatePopupOpen} onClose={closeAllPopups} />
        <EditProfilePopup
          isOpen={isEditPopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={onUpdateUser}
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
