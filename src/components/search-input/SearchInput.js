import React from "react"
import "./search-input.scss"

const SearchInput = ({inputClick, changeInputHandler, btnClick}) => {

  return (
    <div className='main-block'>
      <input 
        type="text" 
        className="search-input" 
        name="item"
        onClick={inputClick}
        onChange={(event) => changeInputHandler(event.target.value)}
      />
      <div className='btn-dropdown' onClick={btnClick}>▼</div>
    </div>
  )
}

export default SearchInput