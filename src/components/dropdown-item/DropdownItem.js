import React from "react"
import "./dropdown-item.scss"

const DropdownItem = ({item, selectItem}) => {
  return (
    <li className='dropdown-item' key={item.id} onClick={() => selectItem(item.id, true)}>{item.name}</li>
  )
}
export default DropdownItem