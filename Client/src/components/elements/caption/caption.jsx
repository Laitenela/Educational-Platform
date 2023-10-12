function Caption({parentName, onChange, children, editable}){
  if(editable) return (
    <input type="text" onChange={onChange} className={`${parentName}__caption`} defaultValue={children}/>
  )
  return <div className={`${parentName}__caption`}>{children}</div>
}

export default Caption;