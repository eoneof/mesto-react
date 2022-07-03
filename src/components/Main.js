import avatarPlaceHolderImage from '../images/avatar-placeholder.svg';
const userName = 'Имя Пользователя';
const userAbout = 'Описание';

function Main() {
  function handleEditAvatarClick() {
    // TODO go declarative
    document.querySelector('.popup_type_update').classList.add('popup_opened');
    console.log('popupUpdate');
  }
  function handleEditProfileClick() {
    document.querySelector('.popup_type_edit').classList.add('popup_opened');
    console.log('popupEdit');
  }
  function handleAddPlaceClick() {
    document.querySelector('.popup_type_add').classList.add('popup_opened');
    console.log('popupAdd');
  }

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
                onClick={handleEditAvatarClick}></button>
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
                    onClick={handleEditProfileClick}></button>
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
            onClick={handleAddPlaceClick}></button>
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
