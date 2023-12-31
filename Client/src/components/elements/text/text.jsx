function Text({parentName, children, editable, onChange}){
  if(editable) return (
    <textarea onChange={onChange} className={`${parentName}__text`} value={children}></textarea>
  )
  return <div className={`${parentName}__text`}>{children}</div>
}

export default Text;