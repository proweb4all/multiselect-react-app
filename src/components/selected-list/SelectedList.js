import React from "react"
import SelectedItem from './../selected-item/SelectedItem';
import "./selected-list.scss"

const DropdownList = ({items, selectItem}) => {
  const renderSelectedItem = items
  .filter(item => (item.selected))
  .map(item => (
    <SelectedItem
      key={item.id} 
      item={item} 
      selectItem={selectItem}
    />
  ))

  return (
    <div className='selected-block'>
      {renderSelectedItem}
    </div>
  )
}

export default DropdownList