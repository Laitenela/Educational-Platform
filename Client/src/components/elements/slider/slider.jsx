import { useEffect } from "react";
import { sliderController, changeSlide, preventChangeSlide } from "./sliderHelper";
import { observer } from "mobx-react-lite";

const Slider = observer(({ blockName, items, editable }) => {

  useEffect(() => {
    sliderController.activeIndex = 0;
  }, []);
  const imageSlidesProps = items.map((item, index) => {
    const isActive = index === sliderController.activeIndex;
    const backgroundImage = `url(http://127.0.0.1:3000/uploads/${item.image})`;

    const uploadImage = async (event) => {
      const formData = new FormData();
      formData.append('image', event.target.files[0]);
      const response = await fetch('http://127.0.0.1:3000/api/upload', {method: 'PUT', body: formData});
      const data = await response.json();
      item.changeImage(data.filename);
    }

    const childrenProps = {};
    childrenProps.className = "image-slider__image";
    childrenProps.id = `${index}image-slider__image`;
    childrenProps.onMouseEnter = changeSlide;
    childrenProps.onMouseLeave = preventChangeSlide;
    childrenProps.style = { backgroundImage };
    const children = <>
      <div {...childrenProps} />
      {editable && <label className={`${blockName}__image-loader-button`} htmlFor={`${blockName}__file-input_${index}`}>+</label>}
      {editable && <input onChange={uploadImage} type="file" id={`${blockName}__file-input_${index}`} className={`${blockName}__image-loader-input`} />}
    </>
    

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
            {editable && <input type="text" className="info-slider__title" onChange={(event) => slide.changeTitle(event.target.value)} value={slide.title}/>}
            {editable && <textarea className="info-slider__text" onChange={(event) => slide.changeText(event.target.value)} value={slide.text}/>}
            {!editable && <div className="info-slider__title">{slide.title}</div>}
            {!editable && <div className="info-slider__text">{slide.text}</div>}
          </div>
        ))}
      </div>
    </div>
  );
})

export default Slider;
