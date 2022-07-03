function App() {
  return (
    <>
      <div classname='page'>
        {/* <!-- HEADER --> */}
        <header classname='header'>
          <div classname='header__logo'></div>
        </header>

        <div classname='divider'></div>

        {/* <!-- PRELOADER --> */}
        <div classname='preloader'>
          <div classname='spinner'></div>
        </div>

        {/* <!-- MAIN --> */}
        <main classname='main hidden'>
          {/* <!-- PROFILE --> */}
          <section classname='profile' data-user-id='' data-user-cohort=''>
            <div classname='profile__container'>
              <div
                classname='profile__photo-container'
                type='button'
                name='update-profile-photo-button'
                title='Изменить фотографию профиля'>
                <button classname='profile__photo-overlay'></button>
                <img
                  classname='profile__photo'
                  alt='Фотография пользователя.'
                  src="<%=require('./images/avatar-placeholder.svg')%>"
                />
              </div>
              <div classname='profile__main'>
                <div classname='profile__headings'>
                  <div classname='profile__header'>
                    <h1 classname='profile__name'></h1>
                    <button
                      classname='button profile__edit-button'
                      type='button'
                      name='edit-button'
                      title='Редактировать профиль'></button>
                  </div>
                  <p classname='profile__about'></p>
                </div>
              </div>
            </div>
            <button
              classname='button profile__add-button'
              type='button'
              name='add-button'
              title='Добавить фотографии'></button>
          </section>

          {/* <!-- PHOTOS --> */}
          <section classname='photos' aria-label='Фотографии пользователя'>
            <ul classname='cards-grid'></ul>
          </section>
        </main>

        {/* <!-- FOOTER --> */}
        <footer classname='footer'>
          <p classname='footer__copyright'>© 2022 Mesto Russia</p>
        </footer>

        {/* <!-- POPUPS --> */}

        {/* <!-- EDIT PROFILE --> */}
        <section classname='popup popup_type_edit'>
          <div classname='popup__container'>
            <button
              classname='button popup__close-button'
              type='button'
              name='close-button'
              title='Закрыть'>
              Закрыть
            </button>
            <form novalidate id='form-edit' name='form-edit' classname='form'>
              <h2 classname='form__header'>Редактировать профиль</h2>
              <fieldset classname='form__fieldset'>
                <div classname='form__input-container'>
                  <input
                    classname='form__input'
                    id='nameInput'
                    name='name'
                    type='text'
                    minlength='2'
                    maxlength='40'
                    placeholder='Как вас зовут?'
                    required
                  />
                  <span classname='form__input-error-hint name-input-error'></span>
                </div>
                <div classname='form__input-container'>
                  <input
                    classname='form__input'
                    id='aboutInput'
                    name='about'
                    type='text'
                    minlength='2'
                    maxlength='200'
                    placeholder='Напишите что-нибудь о себе'
                    required
                  />
                  <span classname='form__input-error-hint about-input-error'></span>
                </div>
              </fieldset>
              <button
                classname='button form__submit-button'
                form='form-edit'
                type='submit'
                name='submit-button'>
                Сохранить
              </button>
            </form>
          </div>
          <div classname='popup__backdrop'></div>
        </section>

        {/* <!-- UPDATE PROFILE PHOTO --> */}
        <section classname='popup popup_type_update'>
          <div classname='popup__container'>
            <button
              classname='button popup__close-button'
              type='button'
              name='close-button'
              title='Закрыть'>
              Закрыть
            </button>
            <form novalidate id='form-update' name='form-update' classname='form'>
              <h2 classname='form__header'>Обновить аватар</h2>
              <fieldset classname='form__fieldset'>
                <div classname='form__input-container'>
                  <input
                    classname='form__input'
                    id='updateInput'
                    name='avatar'
                    type='url'
                    placeholder='Ссылка на картинку'
                    required
                  />
                  <span classname='form__input-error-hint avatar-input-error'></span>
                </div>
              </fieldset>
              <button
                classname='button form__submit-button'
                form='form-update'
                type='submit'
                name='submit-button'>
                Сохранить
              </button>
            </form>
          </div>
          <div classname='popup__backdrop'></div>
        </section>

        {/* <!-- ADD CARD --> */}
        <section classname='popup popup_type_add'>
          <div classname='popup__container'>
            <button
              classname='button popup__close-button'
              type='button'
              name='close-button'
              title='Закрыть'>
              Закрыть
            </button>
            <form novalidate id='form-add' name='form-add' classname='form'>
              <h2 classname='form__header'>Новое место</h2>
              <fieldset classname='form__fieldset'>
                <div classname='form__input-container'>
                  <input
                    classname='form__input'
                    id='photoNameInput'
                    name='name'
                    type='text'
                    minlength='2'
                    maxlength='30'
                    placeholder='Название'
                    required
                  />
                  <span classname='form__input-error-hint name-input-error'></span>
                </div>
                <div classname='form__input-container'>
                  <input
                    classname='form__input'
                    id='photoLinkInput'
                    name='link'
                    type='url'
                    placeholder='Ссылка на картинку'
                    required
                  />
                  <span classname='form__input-error-hint link-input-error'></span>
                </div>
              </fieldset>
              <button
                classname='button form__submit-button'
                form='form-add'
                type='submit'
                name='submit-button'>
                Создать
              </button>
            </form>
          </div>
          <div classname='popup__backdrop'></div>
        </section>

        {/* <!-- PREVIEW PHOTO --> */}
        <section classname='popup popup_type_preview' aria-label='Превью фотографии'>
          <div classname='popup__container'>
            <button
              classname='button popup__close-button'
              type='button'
              name='close-button'
              title='Закрыть'>
              Закрыть
            </button>
            <figure classname='preview'>
              <img classname='preview__image' />
              <figcaption classname='preview__caption'></figcaption>
            </figure>
          </div>
          <div classname='popup__backdrop popup__backdrop_place_preview'></div>
        </section>

        {/* <!-- CONFIRM POPUP --> */}
        <section classname='popup popup_type_confirm'>
          <div classname='popup__container'>
            <button
              classname='button popup__close-button'
              type='button'
              name='close-button'
              title='Закрыть'>
              Закрыть
            </button>
            <div classname='form'>
              <h2 classname='form__header'>Вы уверены?</h2>
              <button classname='button form__submit-button' name='submit-button'>
                Да
              </button>
            </div>
          </div>
          <div classname='popup__backdrop'></div>
        </section>
      </div>

      {/* <!-- CARD --> */}
      <template id='card-template'>
        <li
          classname='cards-grid__item card'
          data-card-id=''
          data-owner-id=''
          data-created-at=''>
          <button
            classname='button card__delete-button'
            type='button'
            name='delete-button'
            title='Удалить'></button>
          <div classname='card__image-container'>
            <img classname='card__image' />
          </div>
          <div classname='card__label'>
            <h2 classname='card__title'></h2>
            <div classname='card__like-container'>
              <button
                type='button'
                classname='button card__like-button'
                name='like-button'
                title='Нравится!'></button>
              <span classname='card__like-counter'>0</span>
            </div>
          </div>
        </li>
      </template>
    </>
  );
}

export default App;
