function PopupWithImage() {
  return (
    <>
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
    </>
  );
}
export default PopupWithImage;
