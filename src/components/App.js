import React from 'react';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Preloader from './Preloader.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import Card from './Card.js';

function App() {
  const [isPopupOpen, setIsPopoupOpen] = React.useState(false);

  function handleCloseButton() {
    setIsPopoupOpen(false);
  }

  function handleUpdateAvatar() {
    setIsPopoupOpen(true);
  }

  function handleEditProfile() {
    setIsPopoupOpen(true);
  }
  function handleAddCArd() {
    setIsPopoupOpen(true);
  }
  function handleCardPreview() {
    setIsPopoupOpen(true);
  }

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
      <PopupWithForm
        formTitle='<TITLE>' /* TODO get from external */
        formName='<NAME>' /* TODO get from external */
        isOpen={isPopupOpen}
        buttonText='Сохранить'
        onPopupClose={handleCloseButton}
      />
      <PopupWithForm
        formTitle='<TITLE>' /* TODO get from external */
        formName='<NAME>' /* TODO get from external */
        isOpen={isPopupOpen}
        buttonText='Сохранить'
        onPopupClose={handleCloseButton}
      />
      <PopupWithImage />
      <Card />
    </div>
  );
}

export default App;
