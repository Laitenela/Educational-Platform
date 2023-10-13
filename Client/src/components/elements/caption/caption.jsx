import { observer } from "mobx-react-lite";

const Caption = observer(({parentName, onChange, children, editable}) => {
  if(editable) return (
    <input type="text" onChange={onChange} className={`${parentName}__caption`} value={children}/>
  )
  return <div className={`${parentName}__caption`}>{children}</div>
})

export default Caption;