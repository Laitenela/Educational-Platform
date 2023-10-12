function ItemsList({parentName, items = []}){
  return (
    <div className={`${parentName}__flex-container`}>
      {items.map((course, index) => (
        <div key={index} className="course-container">
          <img className="course-container__image" src={`http://127.0.0.1:3000/uploads/${course.image}`} alt="" />
          <div className="course-container__info-container">
            <div className="course-container__title">{course.title}</div>
            <div className="course-container__description">{course.description}</div>
          </div>
        </div>
      ))}
    </div> 
  )
}

export default ItemsList;