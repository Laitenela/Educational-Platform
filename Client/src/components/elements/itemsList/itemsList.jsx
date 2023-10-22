import { observer } from "mobx-react-lite";

const ItemsList = observer(({parentName, editable, block}) => {
  const uploadImage = async (event, course) => {
    const formData = new FormData();
    formData.append('image', event.target.files[0]);
    const response = await fetch('http://127.0.0.1:3000/api/upload', {method: 'PUT', body: formData});
    const data = await response.json();
    course.changeImage(data.filename);
  }

  return (
    <div className={`${parentName}__flex-container`}>
      {block?.items?.map((course, index) => (
        <div key={index} className="course-container">
          <img className="course-container__image" src={`http://127.0.0.1:3000/uploads/${course.image}`} alt="" />
          {editable && <label className={`course-container__image-loader-button`} htmlFor={`course-container__file-input${index}`}>Загрузить</label>}
          {editable && <input onChange={(event) => uploadImage(event, course)} type="file" id={`course-container__file-input${index}`} className="course-container__image-loader-input" />}
          <div className="course-container__info-container">
            {editable && <input onChange={(event) => course.changeTitle(event.target.value)} className="course-container__title" value={course.title}/>}
            {editable && <textarea onChange={(event) => course.changeDescription(event.target.value)} className="course-container__description" value={course.description}/>}
            {!editable && <div className="course-container__title">{course.title}</div>}
            {!editable && <div className="course-container__description">{course.description}</div>}
          </div>
          {editable && <button className={`course-container__delete-button`} onClick={() => block.removeItem(index)}>Удалить</button>}
        </div>
      ))}
    </div> 
  )
})

export default ItemsList;