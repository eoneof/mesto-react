import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Preloader from './Preloader.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import Card from './Card.js';

function App() {
  return (
    <div className='page'>
      <Header />
      <Preloader />
      <Main />
      <Footer />
      <PopupWithForm />
      <PopupWithImage />
      <Card />
    </div>
  );
}

export default App;
