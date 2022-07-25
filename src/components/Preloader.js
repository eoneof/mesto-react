export default function Preloader(props) {
  const hiddenClassName = `${props.dataIsLoaded ? 'hidden' : ''}`;

  return (
    <>
      {/* <div className={`preloader ${hiddenClassName}`}> */}
      <div className='preloader'>
        <section className='preloader__profile'>
          <div className='preloader__profile-container'>
            <div className='preloader__photo-container'>
              <div className='preloader__photo shimmer animate' />
            </div>
            <div className='preloader__profile-main'>
              <div className='preloader__profile-headings'>
                <div className='preloader__profile-header'>
                  <div className='preloader__profile-name shimmer animate'></div>
                  <div className='preloader__button preloader__profile-edit-button shimmer animate'></div>
                </div>
                <div className='preloader__profile-about shimmer animate'></div>
              </div>
            </div>
          </div>
          <div className='preloader__button preloader__profile-add-button shimmer animate'></div>
        </section>
        <section className='preloader__cards'>
          <ul className='preloader__card-list'>
            <li className='preloader__card preloader__cards-grid-item shimmer animate'></li>
            <li className='preloader__card preloader__cards-grid-item shimmer animate'></li>
            <li className='preloader__card preloader__cards-grid-item shimmer animate'></li>
            <li className='preloader__card preloader__cards-grid-item shimmer animate'></li>
            <li className='preloader__card preloader__cards-grid-item shimmer animate'></li>
            <li className='preloader__card preloader__cards-grid-item shimmer animate'></li>
          </ul>
        </section>
        <div className='spinner'></div>
      </div>
    </>
  );
}
