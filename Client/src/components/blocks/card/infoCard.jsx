import './infoCard.css';

function InfoCard({title, description, courseInfo, picture, price}) {
  return (
    <div className="info-card">
      <div className='info-card__title'><h2>{title}</h2></div>
      <div className='info-card__picture' style={{background: "url(public/img_test.png)"}}></div>
      <div className='info-card__description'>{description}</div>
      <div className='info-card__course-info'>{courseInfo}</div>
      <div className='info-card__price'>{price + ' ₽'}</div>
    </div>
  );
}

export default InfoCard;
