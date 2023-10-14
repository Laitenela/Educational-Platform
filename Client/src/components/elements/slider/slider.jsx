import { useLayoutEffect } from "react";
import { sliderController, changeSlide, preventChangeSlide } from "./sliderHelper";

function Slider({ blockName, items }) {
  useLayoutEffect(() => {
    sliderController.activeIndex = 0;
  })
  const imageSlidesProps = items.map((item, index) => {
    const isActive = index === sliderController.activeIndex;
    const backgroundImage = `url(http://127.0.0.1:3000/uploads/${item.image})`;

    const childrenProps = {};
    childrenProps.className = "image-slider__image";
    childrenProps.id = `${index}image-slider__image`;
    childrenProps.onMouseEnter = changeSlide;
    childrenProps.onMouseLeave = preventChangeSlide;
    childrenProps.style = { backgroundImage };
    const children = <div {...childrenProps} />;

    const imageSlideProps = {children};
    imageSlideProps.className = "image-slider__slide";
    if (isActive) imageSlideProps.className += " active";
    imageSlideProps.id = `${index}image-slider__slide`;
    imageSlideProps.key = imageSlideProps.id;

    return imageSlideProps;
  });

  const infoSlidesProps = items.map((_item, index) => {
    const isActive = index === sliderController.activeIndex;

    const infoSlideProps = {};
    infoSlideProps.id = `${index}info-slider__container`;
    infoSlideProps.key = infoSlideProps.id;
    infoSlideProps.className = "info-slider__container";
    if (isActive) infoSlideProps.className += " active";

    return infoSlideProps;
  });

  return (
    <div className={`${blockName}__slider-container`}>
      <div className="image-slider">
        {items.map((_slide, index) => (
          <div {...imageSlidesProps[index]} />
        ))}
      </div>
      <div className="info-slider">
        {items.map((slide, index) => (
          <div {...infoSlidesProps[index]}>
            <div className="info-slider__title">{slide.title}</div>
            <div className="info-slider__text">{slide.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
