import avatarPlaceHolderImage from '../images/avatar-placeholder.svg';
const userName = 'Имя Пользователя';
const userAbout = 'Описание';

function App() {
  return (
    <>
      <div className='page'>
        {/* <!-- HEADER --> */}
        <header className='header'>
          <div className='header__logo'></div>
        </header>

        <div className='divider'></div>

        {/* <!-- PRELOADER --> */}
        {/* TODO remove hidden */}
        <div className='preloader hidden'>
          <div className='spinner'></div>
        </div>

        {/* <!-- MAIN --> */}
        <main className='main hidden'>
          {/* <!-- PROFILE --> */}
          <section className='profile' data-user-id='' data-user-cohort=''>
            <div className='profile__container'>
              <div
                className='profile__photo-container'
                type='button'
                name='update-profile-photo-button'
                title='Изменить фотографию профиля'>
                <button className='profile__photo-overlay'></button>
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
                      title='Редактировать профиль'></button>
                  </div>
                  <p className='profile__about'>{userAbout}</p>
                </div>
              </div>
            </div>
            <button
              className='button profile__add-button'
              type='button'
              name='add-button'
              title='Добавить фотографии'></button>
          </section>

          {/* <!-- PHOTOS --> */}
          <section className='photos' aria-label='Фотографии пользователя'>
            <ul className='cards-grid'></ul>
          </section>
        </main>

        {/* <!-- FOOTER --> */}
        <footer className='footer'>
          <p className='footer__copyright'>© 2022 Mesto Russia</p>
        </footer>

        {/* <!-- POPUPS --> */}

        {/* <!-- EDIT PROFILE --> */}
        <section className='popup popup_type_edit'>
          <div className='popup__container'>
            <button
              className='button popup__close-button'
              type='button'
              name='close-button'
              title='Закрыть'>
              Закрыть
            </button>
            <form noValidate id='form-edit' name='form-edit' className='form'>
              <h2 className='form__header'>Редактировать профиль</h2>
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
              <button
                className='button form__submit-button'
                form='form-edit'
                type='submit'
                name='submit-button'>
                Сохранить
              </button>
            </form>
          </div>
          <div className='popup__backdrop'></div>
        </section>

        {/* <!-- UPDATE PROFILE PHOTO --> */}
        <section className='popup popup_type_update'>
          <div className='popup__container'>
            <button
              className='button popup__close-button'
              type='button'
              name='close-button'
              title='Закрыть'>
              Закрыть
            </button>
            <form noValidate id='form-update' name='form-update' className='form'>
              <h2 className='form__header'>Обновить аватар</h2>
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
              <button
                className='button form__submit-button'
                form='form-update'
                type='submit'
                name='submit-button'>
                Сохранить
              </button>
            </form>
          </div>
          <div className='popup__backdrop'></div>
        </section>

        {/* <!-- ADD CARD --> */}
        <section className='popup popup_type_add'>
          <div className='popup__container'>
            <button
              className='button popup__close-button'
              type='button'
              name='close-button'
              title='Закрыть'>
              Закрыть
            </button>
            <form noValidate id='form-add' name='form-add' className='form'>
              <h2 className='form__header'>Новое место</h2>
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
              <button
                className='button form__submit-button'
                form='form-add'
                type='submit'
                name='submit-button'>
                Создать
              </button>
            </form>
          </div>
          <div className='popup__backdrop'></div>
        </section>

        {/* <!-- PREVIEW PHOTO --> */}
        <section className='popup popup_type_preview' aria-label='Превью фотографии'>
          <div className='popup__container'>
            <button
              className='button popup__close-button'
              type='button'
              name='close-button'
              title='Закрыть'>
              Закрыть
            </button>
            <figure className='preview'>
              <img className='preview__image' />
              <figcaption className='preview__caption'></figcaption>
            </figure>
          </div>
          <div className='popup__backdrop popup__backdrop_place_preview'></div>
        </section>

        {/* <!-- CONFIRM POPUP --> */}
        <section className='popup popup_type_confirm'>
          <div className='popup__container'>
            <button
              className='button popup__close-button'
              type='button'
              name='close-button'
              title='Закрыть'>
              Закрыть
            </button>
            <div className='form'>
              <h2 className='form__header'>Вы уверены?</h2>
              <button className='button form__submit-button' name='submit-button'>
                Да
              </button>
            </div>
          </div>
          <div className='popup__backdrop'></div>
        </section>
      </div>

      {/* <!-- CARD --> */}
      <template id='card-template'>
        <li
          className='cards-grid__item card'
          data-card-id=''
          data-owner-id=''
          data-created-at=''>
          <button
            className='button card__delete-button'
            type='button'
            name='delete-button'
            title='Удалить'></button>
          <div className='card__image-container'>
            <img className='card__image' />
          </div>
          <div className='card__label'>
            <h2 className='card__title'></h2>
            <div className='card__like-container'>
              <button
                type='button'
                className='button card__like-button'
                name='like-button'
                title='Нравится!'></button>
              <span className='card__like-counter'>0</span>
            </div>
          </div>
        </li>
      </template>
    </>
  );
}

export default App;
