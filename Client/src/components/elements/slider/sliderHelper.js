export const sliderController = {};
sliderController.activeIndex = 0;
sliderController.isChangeReady = true;
sliderController.delayTimer = undefined;
sliderController.trackingTimer = undefined;
sliderController.trackingSlideChanger = undefined;

sliderController.pauseReadyState = (ms) => {
  const timeoutAction = () => (sliderController.isChangeReady = true);
  
  sliderController.isChangeReady = false;
  sliderController.trackingTimer = setTimeout(timeoutAction, ms);
};

sliderController.defferedExecution = (event) => {
  clearTimeout(sliderController.trackingSlideChanger);
  sliderController.trackingSlideChanger = setTimeout(changeSlide, 100, event);
};

const doChangeSlide = (event) => {
  if (Number(event.target.id.slice(0, 1)) === sliderController.activeIndex) return;
  if (!sliderController.isChangeReady) return sliderController.defferedExecution(event);

  sliderController.pauseReadyState(500);

  const eventId = Number(event.target.id.slice(0, 1));
  const isFall = eventId > sliderController.activeIndex;

  const eventImageElement = document.getElementById(`${eventId}image-slider__slide`);
  const eventInfoElement = document.getElementById(`${eventId}info-slider__container`);

  const activeImageElement = document.getElementById(`${sliderController.activeIndex}image-slider__slide`);
  const activeInfoElement = document.getElementById(`${sliderController.activeIndex}info-slider__container`);

  animateElements(isFall, activeInfoElement, eventInfoElement);

  activeImageElement.classList.remove("active");
  activeInfoElement.classList.remove("active");

  eventImageElement.classList.add("active");
  eventInfoElement.classList.add("active");

  sliderController.activeIndex = eventId;
};


const animateElements = async (isFall, activeInfoContainer, eventInfoContainer) => {
  const positionSign = isFall ? 1 : -1;

  const promiseTimeout = (action, ms) =>
    new Promise((res) => {
      setTimeout(() => res(action()), ms);
    });

  await promiseTimeout(() => {
    eventInfoContainer.style.top = `${400 * positionSign}px`;
    activeInfoContainer.style.top = `${-400 * positionSign}px`;
  }, 10);

  await promiseTimeout(() => {
    eventInfoContainer.style.display = "";
  }, 40);

  await promiseTimeout(() => {
    eventInfoContainer.style.top = "";
  }, 50);

  await promiseTimeout(() => {
    activeInfoContainer.style.display = "none";
  }, 450);
};

export const changeSlide = (event) => {
  sliderController.delayTimer = setTimeout(doChangeSlide, 100, event);
}

export const preventChangeSlide = () => {
  clearTimeout(sliderController.delayTimer);
}
