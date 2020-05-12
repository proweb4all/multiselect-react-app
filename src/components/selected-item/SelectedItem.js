import React from "react";
import "./selected-item.scss";



const closeClick = (event) => {
  console.log(event.target.parentElement)
  event.target.parentElement.remove()
}

const SelectedItem = () => (
    <div className='selected-item'>
        <span className='selected-item__name'>item__name</span>
        <div className='selected-item__close' onClick={closeClick}>✖</div>
    </div>
)

export default SelectedItem;
