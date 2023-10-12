function Title({parentName, children, editable, onChange}){
  if(editable) return (
    <input type="text" onChange={onChange} className={`${parentName}__title`} defaultValue={children}/>
  )
  return (<div className={`${parentName}__title`}>{children}</div>);
}

export default Title;