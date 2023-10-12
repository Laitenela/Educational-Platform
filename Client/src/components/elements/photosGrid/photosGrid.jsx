function PhotosGrid({parentName, items = []}){
  return (
  <div className={`${parentName}__grid`}>
    {items.map((infoCard, index) => (
      <div className="label-card" key={index}>
        <img src={`http://127.0.0.1:3000/uploads/${infoCard.image}`} className="label-card__image" />
        <div className="label-card__title">{infoCard.title}</div>
      </div>)
    )}
  </div>
  )
}

export default PhotosGrid;