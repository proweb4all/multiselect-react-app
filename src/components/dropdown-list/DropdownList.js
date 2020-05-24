import React from "react";
import "./dropdown-list.scss";
import DropdownItem from "../dropdown-item/DropdownItem";

const DropdownList = ({items, filterValue, selectItem}) => {
  let renderNotSelectedItem = items
  .filter(item => (!item.selected))
  .filter(item => (item.name.toLowerCase().indexOf(filterValue.toLowerCase()) > -1))
  .map(item => (
    <DropdownItem 
      key={item.id} 
      item={item} 
      selectItem={selectItem} />
  ))
  return (
    <div className='dropdown-block'>
      <ul className='dropdown-items'>
        {renderNotSelectedItem}
      </ul>
    </div>
  )
}

export default DropdownList
