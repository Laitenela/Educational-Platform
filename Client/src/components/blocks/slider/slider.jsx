function Slider({ blockName, items }) {
  let activeId = 0;
  let timer = undefined;
  const changeOnActiveSliderContainer = (event) => {
    if (!event.target.id || Number(event.target.id.slice(0, 1)) === activeId) return;
    const eventId = Number(event.target.id.slice(0, 1));
    const activeElements = [
      document.getElementById(`${activeId}image-slider__slide`), 
      document.getElementById(`${activeId}info-slider__container`)
    ];
    const eventElements = [
      document.getElementById(`${eventId}image-slider__slide`), 
      document.getElementById(`${eventId}info-slider__container`)
    ];
    if(eventId > activeId){
      eventElements[1].style.display = 'none';
      setTimeout(() => eventElements[1].style.top = "400px", 10);
      setTimeout(() => activeElements[1].style.top = "-400px", 10);
      setTimeout(() => eventElements[1].style.display = "", 50);
      setTimeout(() => eventElements[1].style.top = "", 100);
    } else {
      eventElements[1].style.display = 'none';
      setTimeout(() => activeElements[1].style.top = "400px", 10);
      setTimeout(() => eventElements[1].style.top = "-400px", 10);
      setTimeout(() => eventElements[1].style.display = "", 50);
      setTimeout(() => eventElements[1].style.top = "", 100);
      setTimeout(() => activeElements[1].style.display = "none", 400);
    }
    for(let element of activeElements){
      element.classList.remove("active");
    }
    for(let element of eventElements){
      element.classList.add("active");
    }
    activeId = eventId;
  }

  return (
    <div className={`${blockName}__slider-container`}>
      <div className="image-slider">
        {items.map((slide, index) => {
          return (
            <div
              className={`image-slider__slide${index === activeId ? " active" : ""}`}
              key={index}
              id={`${index}image-slider__slide`}
            >
              <div
                className="image-slider__image"
                id={`${index}image-slider__image`}
                onMouseEnter={(event) => timer = setTimeout(changeOnActiveSliderContainer, 100, event)}
                onMouseLeave={() => clearTimeout(timer)}
                style={{backgroundImage: `url(http://127.0.0.1:3000/uploads/${slide.image})`}}
              ></div>
            </div>
          );
        })}
      </div>
      <div className="info-slider">
        {items.map((slide, index) => {
          return (
              <div key={index} id={`${index}info-slider__container`} className={`info-slider__container${index === activeId ? " active" : ""}`}>
                <div className="info-slider__title">{slide.title}</div>
                <div className="info-slider__text">{slide.text}</div>
              </div>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
