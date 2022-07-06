import React from 'react';

// TODO remove redundant

function PopupWithImage(props) {
  // retain css transition effect
  const [openedClassName, setOpenedClassName] = React.useState('');

  // on mount / dismount
  React.useEffect(() => {
    if (props.isOpen) {
      setOpenedClassName('popup_opened');
    }

    // FIXME closing transition is missing
    return () => {
      setOpenedClassName('');
    };
  }, [props.isOpen]);

  // keep it closed
  if (!props.isOpen) {
    return null;
  }
  return (
    <>
      <section
        className={`popup popup_opened /* ${openedClassName} */`}
        aria-label='Превью фотографии'>
        <div className='popup__container'>
          <button
            className='button popup__close-button'
            type='button'
            name='close-button'
            title='Закрыть'>
            Закрыть
          </button>
          <figure className='preview'>
            <img className='preview__image' src={props.src} alt={props.title} />
            {/* FIXME caption text */}
            <figcaption className='preview__caption'>{props.caption}</figcaption>
          </figure>
        </div>
        <div className='popup__backdrop popup__backdrop_place_preview'></div>
      </section>
    </>
  );
}
export default PopupWithImage;
