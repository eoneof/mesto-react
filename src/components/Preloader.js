export default function Preloader(props) {
  const hiddenClassNameToggle = `${props.dataIsLoaded ? 'hidden' : ''}`;

  return (
    <>
      {/* TODO remove hidden */}
      <div className={`preloader ${hiddenClassNameToggle}`}>
        <div className='spinner'></div>
      </div>
    </>
  );
}
