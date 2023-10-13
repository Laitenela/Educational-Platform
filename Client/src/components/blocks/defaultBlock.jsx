import { observer } from "mobx-react-lite";
import Text from "../elements/text/text";
import Caption from "../elements/caption/caption";
import Title from "../elements/title/title";

const DefaultBlock = observer(({block, editable}) => {
  const uploadImage = async (event) => {
    const formData = new FormData();
    formData.append('image', event.target.files[0]);
    const response = await fetch('http://127.0.0.1:3000/api/upload', {method: 'PUT', body: formData});
    const data = await response.json();
    console.log()
    block.changeImage(data.filename);
  }

  return(
    <>
    {block.image && (
      <div className={`${block.name}__image-container`}>
        <img className={`${block.name}__image`} src={`http://127.0.0.1:3000/uploads/${block.image}`} alt="" />
        {editable && <label className={`${block.name}__image-loader-button`} htmlFor={`${block.id}__file-input`}>Загрузить</label>}
        {editable && <input onChange={uploadImage} type="file" id={`${block.id}__file-input`} className={`${block.name}__image-loader-input`} />}
      </div>
    )}
    <div className={`${block.name}__info-container`}>
      {block.title && <Title parentName={block.name} onChange={(event) => {block.changeTitle(event.target.value)}} editable={editable}>{block.title}</Title>}
      {block.caption && <Caption parentName={block.name} onChange={(event) => {block.changeCaption(event.target.value)}} editable={editable}>{block.caption}</Caption>}
      {block.text && <Text parentName={block.name} onChange={(event) => {block.changeText(event.target.value)}} editable={editable}>{block.text}</Text>}
    </div>
  </>
  )
})

export default DefaultBlock;