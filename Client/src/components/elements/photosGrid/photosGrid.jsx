import { observer } from "mobx-react-lite";

const PhotosGrid = observer(({parentName, editable, block}) => {
  const uploadImage = async (event, infoCard) => {
    const formData = new FormData();
    formData.append('image', event.target.files[0]);
    const response = await fetch('http://127.0.0.1:3000/api/upload', {method: 'PUT', body: formData});
    const data = await response.json();
    infoCard.changeImage(data.filename);
  }
  
  return (
  <div className={`${parentName}__grid`}>
    {block.items.map((infoCard, index) => (
      <div className="label-card" key={index}>
        <img src={`http://127.0.0.1:3000/uploads/${infoCard.image}`} className="label-card__image" />
        {editable && <label className={`label-card__image-loader-button`} htmlFor={`label-card__file-input${index}`}>Загрузить</label>}
        {editable && <input onChange={(event) => uploadImage(event, infoCard)} type="file" id={`label-card__file-input${index}`} className="label-card__image-loader-input" />}
        {editable && <input type="text" onChange={(event) => infoCard.changeTitle(event.target.value)} className="label-card__title" value={infoCard.title}/>}
        {editable && <button className="label-card__button-delete" onClick={() => block.removeItem(index)}>Удалить</button>}
        {!editable && <div className="label-card__title">{infoCard.title}</div>}
      </div>)
    )}
  </div>
  )
})

export default PhotosGrid;