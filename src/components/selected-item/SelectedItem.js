import React from "react";
import "./selected-item.scss";

const SelectedItem = (props) => {
  return (
    <div className='selected-item'>
      <span className='selected-item__name'>{props.name}</span>
      <div className='selected-item__close' onClick={props.unselectItem}>✖</div>
    </div>
  )
}

export default SelectedItem
