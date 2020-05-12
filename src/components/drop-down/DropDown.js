import React from "react";
import "./drop-down.scss";

const arrItems = [
  'item1__name',
  'item2__name',
  'item3__name',
  'item4__name',
  'item5__name',
  'item6__name',
  'item7__name',
  'item8__name',
  'item9__name',
  'item10__name'
]
const listItems = arrItems.map(item => (<li>${item}</li>))

const DropDown = () => (
  <ul className='drop-down-items'>
    {listItems}
  </ul>
)

export default DropDown;
