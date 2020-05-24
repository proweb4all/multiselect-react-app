import React from "react";
import "./selected-item.scss";

const SelectedItem = ({item, selectItem}) => {
  return (
    <div className='selected-item'>
      <span className='selected-item__name'>{item.name}</span>
      <div className='selected-item__close' onClick={() => selectItem(item.id, false)}>✖</div>
    </div>
  )
}

export default SelectedItem
